import React from "react";
import styled from "styled-components";

type AccessLinkProps = {
    linkUrl: string;
    imgUrl: string;
    description: string;
}

const LinkWithIcon = styled.a<{ $imgUrl: string }>`
    &::before {
        content: "";
        display: inline-block;
        width: 17px;
        height: 16px;
        background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;  
        vertical-align: top;
    }   
`;

const AccessLink = ({ linkUrl, imgUrl, description }: AccessLinkProps) => {

    return (
        <>
            <LinkWithIcon href={linkUrl}  $imgUrl={imgUrl} className="return-url">
                <span>{description}</span>
            </LinkWithIcon>
        </>
    );
}
export default AccessLink