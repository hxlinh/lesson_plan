import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './modal.css';

const CreateCourseModal = ({ isOpen, onClose }) => {
  const [subject, setSubject] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [numberLesson, setNumberLesson] = useState('');
  const [durationLesson, setDurationLesson] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subject || !selectedFile || !numberLesson || !durationLesson) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('subject', subject);
    formData.append('numberLesson', numberLesson);
    formData.append('durationLesson', durationLesson);

    try {
      const response = await fetch('http://localhost:5000/create-course', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        onClose();
        navigate(`/chat/${data.id}`);
      } else {
        throw new Error(data.error || 'Failed to create course');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra khi tạo khóa học');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Tạo khóa học mới</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tên môn học:</label>
            <input 
              type="text" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              placeholder="Nhập tên môn học" 
            />
          </div>
          <div className="form-group">
            <label>Số buổi học:</label>
            <input 
              type="number" 
              value={numberLesson} 
              onChange={(e) => setNumberLesson(e.target.value)} 
              placeholder="Nhập số buổi học"
              min="1" 
            />
          </div>
          <div className="form-group">
            <label>Thời lượng mỗi buổi (giờ):</label>
            <input 
              type="number" 
              value={durationLesson} 
              onChange={(e) => setDurationLesson(e.target.value)} 
              placeholder="Nhập thời lượng mỗi buổi"
              min="1" 
            />
          </div>
          <div className="form-group">
            <label>Tài liệu PDF:</label>
            <input 
              type="file" 
              accept=".pdf" 
              onChange={(e) => setSelectedFile(e.target.files[0])} 
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="submit-btn">Tạo mới</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Hủy</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseModal;