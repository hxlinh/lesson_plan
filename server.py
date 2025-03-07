from flask import Flask, jsonify, request
import json
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from datetime import datetime
import shutil
from src.utils.pdf_processor import process_pdf
from src.utils.clo_generator import start_CLO, chat

app = Flask(__name__)
CORS(app)

DATA_FILE = 'src/assets/content/data.json'
UPLOAD_FOLDER = 'src/assets/book'

def read_data():
    with open(DATA_FILE, 'r', encoding='utf-8') as file:
        return json.load(file)

def write_data(data):
    with open(DATA_FILE, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)

@app.route('/courses', methods=['GET'])
def get_courses():
    return jsonify(read_data())

@app.route('/update-data', methods=['POST'])
def update_data():
    data = request.json
    write_data(data)
    return jsonify({'message': 'Cập nhật thành công'})

@app.route('/create-course', methods=['POST'])
def create_course():
    try:
        file = request.files['file']
        subject = request.form['subject']
        number_lesson = request.form['numberLesson']
        duration_lesson = request.form['durationLesson']
        
        # Save file temporarily
        temp_path = os.path.join(UPLOAD_FOLDER, "temp.pdf")
        file.save(temp_path)
        
        # Process PDF
        pdf_info = process_pdf(temp_path)
        
        # Get current courses and generate new ID
        courses = read_data()
        new_id = max([course['id'] for course in courses], default=0) + 1
        
        # Create directory for the new course
        course_dir = os.path.join(UPLOAD_FOLDER, str(new_id))
        os.makedirs(course_dir, exist_ok=True)
        
        # Move PDF to final location
        final_path = os.path.join(course_dir, secure_filename(file.filename))
        shutil.move(temp_path, final_path)
        
        # Generate CLOs
        initial_clo = start_CLO(
            messages=[],
            s=subject,
            book=f"{pdf_info['book']} by {pdf_info['author']}",
            tc=pdf_info['content']
        )

        # Create new course data
        new_course = {
            "id": new_id,
            "subject": subject,
            "date": datetime.now().strftime("%d-%m-%Y"),
            "book": pdf_info["book"],
            "author": pdf_info["author"],
            "content": pdf_info["content"],
            "number_lesson": int(number_lesson),
            "duration_lesson": int(duration_lesson),
            "message_CLOs": [
                {"role": "AI", "content": initial_clo}
            ]
        }
        
        # Update JSON file
        courses.append(new_course)
        write_data(courses)
        
        return jsonify({"success": True, "id": new_id})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/delete-course/<int:course_id>', methods=['DELETE'])
def delete_course(course_id):
    try:
        # Read current data
        courses = read_data()
        
        # Remove course from data
        courses = [course for course in courses if course['id'] != course_id]
        write_data(courses)
        
        # Delete the course folder
        course_folder = os.path.join(UPLOAD_FOLDER, str(course_id))
        if os.path.exists(course_folder):
            shutil.rmtree(course_folder)
        
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/chat-clo', methods=['POST'])
def chat_clo():
    try:
        data = request.json
        course_id = data['courseId']
        user_message = data['message']
        
        # Đọc dữ liệu hiện tại
        courses = read_data()
        course = next((c for c in courses if c['id'] == course_id), None)
        
        if not course:
            return jsonify({"error": "Course not found"}), 404
            
        # Lấy lịch sử chat
        messages = [
            {"role": m["role"], "content": m["content"]} 
            for m in course["message_CLOs"]
        ]
        
        # Gọi hàm chat
        response = chat(messages, user_message)
        
        # Cập nhật lịch sử chat
        course["message_CLOs"].extend([
            {"role": "User", "content": user_message},
            {"role": "AI", "content": response}
        ])
        
        # Lưu dữ liệu
        write_data(courses)
        
        return jsonify({
            "success": True,
            "message": response
        })
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)