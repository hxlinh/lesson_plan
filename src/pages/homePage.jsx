import React from 'react';
import '../styles/homePage.css';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='home-page'>
        <div className='grid wide'>
            <div className='home-page__header'>
                <h1>Chào mừng bạn đến với Scistu25</h1>
                <h2>Khóa học của tôi</h2>
            </div>
            <div className='home-page__body'>
                <button className='create-btn'>Tạo mới</button>
                <div className='home-page__body__list row'>
                    <Link className='course col l-3 m-4 c-6 box-item'>
                        <div className='course__info'>
                            <h2>Khóa học 1</h2>
                            <p>Ngày tạo: 10/10/2021</p>
                        </div>
                        <div className='course__action'>
                            <button className='edit-btn'>Sửa</button>
                            <button className='delete-btn'>Xóa</button>
                        </div>
                    </Link>
                    <Link className='course col l-3 m-4 c-6 box-item'>
                        <div className='course__info'>
                            <h2>Khóa học 1</h2>
                            <p>Ngày tạo: 10/10/2021</p>
                        </div>
                        <div className='course__action'>
                            <button className='edit-btn'>Sửa</button>
                            <button className='delete-btn'>Xóa</button>
                        </div>
                    </Link>
                    <Link className='course col l-3 m-4 c-6 box-item'>
                        <div className='course__info'>
                            <h2>Khóa học 1</h2>
                            <p>Ngày tạo: 10/10/2021</p>
                        </div>
                        <div className='course__action'>
                            <button className='edit-btn'>Sửa</button>
                            <button className='delete-btn'>Xóa</button>
                        </div>
                    </Link>
                    <Link className='course col l-3 m-4 c-6 box-item'>
                        <div className='course__info'>
                            <h2>Khóa học 1</h2>
                            <p>Ngày tạo: 10/10/2021</p>
                        </div>
                        <div className='course__action'>
                            <button className='edit-btn'>Sửa</button>
                            <button className='delete-btn'>Xóa</button>
                        </div>
                    </Link>
                    <Link className='course col l-3 m-4 c-6 box-item'>
                        <div className='course__info'>
                            <h2>Khóa học 1</h2>
                            <p>Ngày tạo: 10/10/2021</p>
                        </div>
                        <div className='course__action'>
                            <button className='edit-btn'>Sửa</button>
                            <button className='delete-btn'>Xóa</button>
                        </div>
                    </Link>
                    <Link className='course col l-3 m-4 c-6 box-item'>
                        <div className='course__info'>
                            <h2>Khóa học 1</h2>
                            <p>Ngày tạo: 10/10/2021</p>
                        </div>
                        <div className='course__action'>
                            <button className='edit-btn'>Sửa</button>
                            <button className='delete-btn'>Xóa</button>
                        </div>
                    </Link>
                    <Link className='course col l-3 m-4 c-6 box-item'>
                        <div className='course__info'>
                            <h2>Khóa học 1</h2>
                            <p>Ngày tạo: 10/10/2021</p>
                        </div>
                        <div className='course__action'>
                            <button className='edit-btn'>Sửa</button>
                            <button className='delete-btn'>Xóa</button>
                        </div>
                    </Link>
                    <Link className='course col l-3 m-4 c-6 box-item'>
                        <div className='course__info'>
                            <h2>Khóa học 1</h2>
                            <p>Ngày tạo: 10/10/2021</p>
                        </div>
                        <div className='course__action'>
                            <button className='edit-btn'>Sửa</button>
                            <button className='delete-btn'>Xóa</button>
                        </div>
                    </Link>
                    <Link className='course col l-3 m-4 c-6 box-item'>
                        <div className='course__info'>
                            <h2>Khóa học 1</h2>
                            <p>Ngày tạo: 10/10/2021</p>
                        </div>
                        <div className='course__action'>
                            <button className='edit-btn'>Sửa</button>
                            <button className='delete-btn'>Xóa</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomePage;