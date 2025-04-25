import React, { useState } from "react";
import LoggedInInfo from "./LoggedInInfo";

type UtilLoggedInProps = {
    handleLogoutClick: () => void;
};

const LoggedInModalContent = ({ handleLogoutClick }: UtilLoggedInProps) => {

    return (

        <>
            <div className="info__mypages">
                <LoggedInInfo linkUrl="https://www.hankyung.com/" imgUrl="src/assets/header/icon-account-hk.svg" title="studycode2408@gmail.com" description="계정관리" gradientBorder={false} />
                <LoggedInInfo linkUrl="https://www.hankyung.com/" imgUrl="src/assets/header/icon-ai-start.svg" title="My한경" description="한경 AI" gradientBorder={true} />
                <p className="info-txt">한경 AI로 맞춤 뉴스와 빠른 검색을 경험하세요!</p>
                <LoggedInInfo linkUrl="https://www.hankyung.com/" imgUrl="src/assets/header/icon-subscription.svg" title="구독" description="유료 상품" gradientBorder={false} />
            </div>
            <div className="hk-user__links">
                <button className="btn-logout" onClick={handleLogoutClick}>로그아웃</button>

                <a href="https://www.hankyung.com/">고객센터</a>
            </div>
        </>
    );
};

export default LoggedInModalContent;
