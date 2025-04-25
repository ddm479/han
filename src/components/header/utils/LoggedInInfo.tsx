import React, { useState } from "react";
import styled from "styled-components";

type LoggedInInfoProps = {
    linkUrl: string;
    imgUrl: string;
    title: string;
    description: string;
    gradientBorder: boolean;
};

const Icon = styled.span<{ $imgUrl: string }>`
    &::before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
        vertical-align: middle;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
    }   
`;

const LoggedInInfo = ({ linkUrl, imgUrl, title, description, gradientBorder }: LoggedInInfoProps) => {

    return (

        <div className={`my-item${gradientBorder ? ' myhankyung' : ''}`}>
            <a href={linkUrl} className="my-item__link">
                <div>
                    <Icon $imgUrl={imgUrl} />
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
