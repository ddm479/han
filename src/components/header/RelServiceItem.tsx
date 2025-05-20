import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Tooltip } from "../../styles/Tooltip";

type RelServiceItemProps = {
    href: string;
    imgUrl: string;
    className: string;
    tooltip: string;
};

const RelServiceLink = styled.a<{ $imgUrl: string }>`
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 24px;
    vertical-align: top;
    
    &::before {
        content: '';
        display: inline-block;
        background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: top;
    }
    
    &:hover .hk-tooltip {
        opacity: 1;
        z-index: 1;
        visibility: visible;
    }
`;

const RelServiceItem = ({ href, tooltip, imgUrl, className }: RelServiceItemProps) => {
    
    return (
        <li className={className}>
            <RelServiceLink $imgUrl={imgUrl} href={href}>
                <Tooltip className="hk-tooltip">{tooltip}</Tooltip>
            </RelServiceLink>
        </li>
    );
};

export default RelServiceItem;
