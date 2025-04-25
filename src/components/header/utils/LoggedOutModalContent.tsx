import React, { useState } from "react";
import AccessLink from "./AccessLink";
import BenefitList from "./BenefitList";

// type UtilLoggedOutProps = {
//     isModalOpen: boolean;
//     handleLoginClick: () => void;
//     handleCloseModal: () => void;
// };

const LoggedOutModalContent = () => {
    
    return (
        <>
            <div className="hk-user__btns">
                <AccessLink linkUrl="https://www.hankyung.com/" imgUrl="src/assets/header/icon-signup.svg" description="회원가입" />
                <AccessLink linkUrl="https://www.hankyung.com/" imgUrl="src/assets/header/icon-login.svg" description="로그인" />
            </div>
            <div className="info__panel">
                <div className="info-item info-msg">
                    <p><strong>한국경제 회원이 되어 보세요</strong></p>
                    <p>지금 바로 한국경제 회원으로 가입하시고, 독점 혜택을 누려보세요</p>
                </div>
                <BenefitList />
                <p className="info-item txt">이미 회원이시면 <strong><a href="https://www.hankyung.com/">로그인</a></strong>을 클릭해 주세요</p>
            </div>
            <div className="hk-user__links"><a href="https://www.hankyung.com/">고객센터</a></div>

        </>
    );
};

export default LoggedOutModalContent;
