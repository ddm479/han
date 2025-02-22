import React from "react";
import styled from "styled-components";
import AdInButton from "./AdInButton";
// props로 padding값 넘겨받아 재사용할 수 있게 styled component

type AdProps = {
    padding?: string;
    imageUrl: string;
    linkUrl: string;
}

const AdContainer = styled.div<{ padding?: string }>`
    padding: ${(props) => props.padding || "20px 0"};
    
`;

const Ad = ({ padding, imageUrl, linkUrl}: AdProps) => {
    return (<AdContainer padding={padding}>
        <div className='adInner'>
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} width={970} height={250} className="adImage" />
            </a>
            <AdInButton/>
        </div>
    </AdContainer>)
    ;
};

export default Ad