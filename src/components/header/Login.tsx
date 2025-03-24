import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="header-login">
            {isLoggedIn ? (
                <p>환영합니다!</p>
            ) : (
                <button className="btn-hk-user before-login" onClick={handleLoginClick}>로그인</button>
            )}
            <div className={`modal ${isModalOpen ? "active" : ""}`}>
                <div className="modal-content">
                    <p>로그인 모달창</p>
                    <button onClick={handleCloseModal}>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
