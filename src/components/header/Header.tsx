import React from "react";
import HeaderTop from "./HeaderTop";
import './Header.scss';
import HeaderBottom from "./HeaderBottom";

const Header = () => {
    return (
    <div className="header">
        <HeaderTop />
        <HeaderBottom/>
    </div>
    )
};

export default Header                             