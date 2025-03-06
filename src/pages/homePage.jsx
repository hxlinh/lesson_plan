import React, { useState, useEffect } from 'react';
import '../styles/homePage.css';
import { Link, useNavigate } from 'react-router-dom';
import CreateCourseModal from '../components/ui/common/CreateCourseModal';
import { deleteCourse } from '../components/core/handleJson';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [editCourseId, setEditCourseId] = useState(null);
  const [newSubject, setNewSubject] = useState('');
  // const [showPopup, setShowPopup] = useState(false);
  // const [newCourseName, setNewCourseName] = useState('');
  // const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Lỗi tải dữ liệu:', error));
  }, []);

  const updateData = (updatedCourses) => {
    fetch('http://localhost:5000/update-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCourses),
    })
    .then(response => response.json())
    .then(() => setCourses(updatedCourses))
    .catch(error => console.error('Lỗi cập nhật dữ liệu:', error));
  };

  // const handleCreateNewCourse = () => {
  //   if (!newCourseName || !selectedFile) {
  //     alert('Vui lòng nhập tên môn học và chọn file PDF.');
  //     return;
  //   }
  //   const formData = new FormData();
  //   formData.append('subject', newCourseName);
  //   formData.append('file', selectedFile);

  //   fetch('http://localhost:5000/upload', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setCourses([...courses, data]);
  //       setShowPopup(false);
  //       navigate(`/chat/${data.id}`);
  //     })
  //     .catch(error => console.error('Lỗi tạo môn học:', error));
  // };

  const handleEdit = (event, courseId) => {
    event.preventDefault();
    event.stopPropagation();
    const updatedCourses = courses.map(course =>
      course.id === courseId ? { ...course, subject: newSubject } : course
    );
    updateData(updatedCourses);
    setEditCourseId(null);
  };

  const handleDelete = async (event, courseId) => {
    event.preventDefault();
    event.stopPropagation();
  
    try {
      await deleteCourse(courseId);
      const updatedCourses = courses.filter(course => course.id !== courseId);
      setCourses(updatedCourses);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className='home-page'>
      <div className='grid wide'>
        <div className='home-page__header'>
          <h1>Chào mừng bạn đến với Scistu25</h1>
          <h2>Khóa học của tôi</h2>
        </div>
        <div className='home-page__body'>
        <button 
          className='create-btn' 
          onClick={() => setIsModalOpen(true)}
        >
          Tạo mới
        </button>
        <CreateCourseModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
          <div className='home-page__body__list row'>
            {courses.map(course => (
              <div key={course.id} className='course col l-3 m-4 c-6 box-item'>
                {editCourseId === course.id ? (
                  <div className='course__info'>
                    <input
                      type='text'
                      value={newSubject}
                      onChange={(e) => setNewSubject(e.target.value)}
                    />
                    <p>Ngày tạo: {course.date}</p>
                  </div>
                ) : (
                  <Link to={`/chat/${course.id}`}>
                    <div className='course__info'>
                      <h2>{course.subject}</h2>
                      <p>Ngày tạo: {course.date}</p>
                    </div>
                  </Link>
                )}
                <div className='course__action'>
                  {editCourseId === course.id ? (
                    <button className='save-btn' onClick={(e) => handleEdit(e, course.id)}>
                      Lưu
                    </button>
                  ) : (
                    <button className='edit-btn' onClick={(e) => { setEditCourseId(course.id); setNewSubject(course.subject); }}>
                      Sửa
                    </button>
                  )}
                  <button className='delete-btn' onClick={(e) => handleDelete(e, course.id)}>
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>Thêm khóa học mới</h2>
            <input
              type='text'
              placeholder='Nhập tên môn học'
              value={newCourseName}
              onChange={(e) => setNewCourseName(e.target.value)}
            />
            <input
              type='file'
              accept='application/pdf'
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <button onClick={handleCreateNewCourse}>Lưu</button>
            <button onClick={() => setShowPopup(false)}>Hủy</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default HomePage;