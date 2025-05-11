import styled, { css } from "styled-components";
type IconProps = { 
    $width: string; 
    $height: string; 
    $imgUrl: string; 
}
// 1. css 유틸 방법, 공통 ::before부분 IconStyle로 묶음
export const IconStyle = css<IconProps>`
    &::before {
        content: "";
        display: inline-block;
        width: ${({ $width }) => $width};
        height: ${({ $height }) => $height};
        background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
        vertical-align: middle;
    }
`;

export const Icon = styled.span<IconProps>`
    ${IconStyle} // 재사용
`;

export const LinkWithIcon = styled.a<IconProps>`
    ${IconStyle} // 재사용
    &::before {
        vertical-align: top;
    }
`;

// 2. styled component 방식
// 공통 ::before 스타일 정의
// export const Icon = styled.span<IconProps>`
//     &::before {
//         content: "";
//         display: inline-block;
//         width: ${({ $width }) => $width};
//         height: ${({ $height }) => $height};
//         background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
//         background-repeat: no-repeat;
//         background-position: 50% 50%;
//         background-size: contain;
//         vertical-align: middle;
//     }
// `;

// // a 태그로 바꾸면서 스타일 상속
// export const LinkWithIcon = styled(Icon).attrs({ as: "a" })`
//     &::before {
//         vertical-align: top;
//     }
// `;
