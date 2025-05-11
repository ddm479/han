import React, { useState, useEffect, useRef } from "react";
import LoggedInModalContent from "./LoggedInModalContent";
import LoggedOutModalContent from "./LoggedOutModalContent";
import Modal from "../../Modal";

const HeaderUtil = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                <>
                    <div>
                        <a href="https://www.hankyung.com/" className="header-logo">
                            <span className="myhankyung2"></span>
                            <span className="beta"></span>
                        </a>
                    </div>
                    <button className="btn-hk-user after-login" onClick={handleLoginClick}>
                    </button>
                </>
            ) : (<button className="btn-hk-user before-login" onClick={handleLoginClick}>로그인</button>)}

            <Modal isModalOpen={isModalOpen} onClose={handleCloseModal} className={`modal ${isModalOpen ? "active" : ""}`}>
                <button className="btn-close-modal" onClick={handleCloseModal}></button>
                <div className="modal-inner">
                    <div className={`hk-user__info ${isLoggedIn ? 'after' : 'before'}`}>
                        { isLoggedIn ? <LoggedInModalContent handleLogoutClick={handleLogoutClick} /> : <LoggedOutModalContent /> }
                    </div>
                </div>
            </Modal>

        </div>
    );
};

export default HeaderUtil;

// 개선사항
// modal 바깥 클릭 시 모달 닫히게 하고 싶다면 useRef + 이벤트 버블링 막기 방식도 고려 가능.   modal 구현완료

// 혹시 나중에 로그인 정보가 서버에서 온다면 isLoggedIn도 상태가 아닌 props나 context로 관리해도 됨.

// 이미지 경로 (src/assets/...)는 빌드 경로 이슈 생길 수 있으니 import해서 사용하는 방식도 고려해볼 수 있어.