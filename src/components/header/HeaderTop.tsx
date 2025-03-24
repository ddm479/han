import React from "react";
import RelServiceList from "./RelServiceList";
import DateDisplay from "./DateDisplay";
import Login from "./Login";

const HeaderTop = () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;
    return (
        <div className="header-top-inner">
            <RelServiceList />
            <div className="main-logo-area">
                <a href="https://www.hankyung.com/"><img src="src/assets/logo-hk.svg" width="220" height="55" /></a>
            </div>

            <Login/>
            <DateDisplay />
            
        </div>
    )
};

export default HeaderTop

// justify-content: space-between; 첫번쩨아이템에 너비에 따라 달라지는 거 해결하기
