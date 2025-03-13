import React from "react";
import Stocks from "./Stocks";
import './Marquee.scss';
const Marquee = () => {
    return (
        <div className="stock-marquee-wrap">
            <div className="stock-marquee">
                <Stocks/>
            </div>
        </div>
    )
}

export default Marquee