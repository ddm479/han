import React from "react";
import RelServiceList from "./RelServiceList";
import DateDisplay from "./DateDisplay";
import HeaderUtil from "./utils/HeaderUtil";
import { Tooltip } from "../../styles/Tooltip";

const HeaderTop = () => {
    return (
        <div className="header-top-inner">
            <RelServiceList />
            <div className="main-logo-area">
                <div className="main-logo">                
                    <a href="https://www.hankyung.com/">
                        <img src="src/assets/header/logo-hk.svg" width="220" height="55" />
                    </a>
                    <Tooltip className="hk-tooltip">성공을 부르는 습관</Tooltip>
                </div>
            </div>

            <HeaderUtil/>
            <DateDisplay />
        </div>
    )
};

export default HeaderTop

// justify-content: space-between; 첫번쩨아이템에 너비에 따라 달라지는 거 해결하기
