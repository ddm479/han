import React, { useState } from "react";
import styled from "styled-components";
import UtilLoggedIn from "./UtilLoggedIn";
import UtilLoggedOut from "./UtilLoggedOut";

const HeaderUtil = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        setIsModalOpen(false);
    }

    return (
        <div className="header-util">
            {isLoggedIn ? (
                <UtilLoggedIn
                    isModalOpen={isModalOpen}
                    handleLoginClick={handleLoginClick}
                    handleLogoutClick={handleLogoutClick}
                    handleCloseModal={handleCloseModal}
                />
            ) : (
                <UtilLoggedOut
                    isModalOpen={isModalOpen}
                    handleLoginClick={handleLoginClick}
                    handleCloseModal={handleCloseModal}
                />
            )}
        </div>
    );
    // 로그아웃 했을 때 modal inner부분 구현하기
};

export default HeaderUtil;
