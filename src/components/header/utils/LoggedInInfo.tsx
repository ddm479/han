import React, { useState } from "react";
import { Icon } from "../../../styles/Icon";

type LoggedInInfoProps = {
    linkUrl: string;
    imgUrl: string;
    title: string;
    description: string;
    gradientBorder: boolean;
};

const LoggedInInfo = ({ linkUrl, imgUrl, title, description, gradientBorder }: LoggedInInfoProps) => {

    return (

        <div className={`my-item${gradientBorder ? ' myhankyung' : ''}`}>
            <a href={linkUrl} className="my-item__link">
                <div>
                    <Icon $width="20px" $height="20px" $imgUrl={imgUrl} />
                </div>
                <div className="txt">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                </div>
            </a>
        </div>

    );
};

export default LoggedInInfo;
