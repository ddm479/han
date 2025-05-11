import React from "react";

import { LinkWithIcon } from "../../../styles/Icon";

type AccessLinkProps = {
    linkUrl: string;
    imgUrl: string;
    description: string;
}

const AccessLink = ({ linkUrl, imgUrl, description }: AccessLinkProps) => {

    return (
        <>
            <LinkWithIcon href={linkUrl} $width="17px" $height="16px" $imgUrl={imgUrl} className="return-url">
                <span>{description}</span>
            </LinkWithIcon>
        </>
    );
}
export default AccessLink