import React from "react";

type RelServiceItemProps = {
    href: string;
    imgSrc: string;
    className: string;
};

const RelServiceItem = ({ href, imgSrc, className }: RelServiceItemProps) => {
    return (
        <li className={className}>
            <a href={href}>
                <img src={imgSrc} alt="서비스 아이콘" />
            </a>
        </li>
    );
};

export default RelServiceItem;
