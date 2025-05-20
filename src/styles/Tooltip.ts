import React from "react";
import styled from "styled-components";

export const Tooltip = styled.span`
    // 부모 요소의 정확한 가로 중앙에 정렬하기
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translateX(-50%);
    ////
    padding: 6px 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
    font-size: 10px;
    line-height: 1;
    white-space: nowrap;
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    transition: all ease .3s;
    letter-spacing: 0;
    font-weight: 400;

    // 기준은 span태그
    &::before, &::after {
        content: '';
        border-style: solid;
        width: 0;

        // 아래 코드는 부모 요소의 정확한 가로 중앙에 정렬하기
        position: absolute;
        left: 50%;  // 부모 기준으로 왼쪽에서 부모 너비의 50% 위치까지 이동
        transform: translateX(-50%); // 자기 자신의 너비의 50%만큼 왼쪽으로 이동
    }

    // 아래 코드는 툴팁 꼬리부분을 삼각형으로 표현
    // 아래가 뾰족한 회색 삼각형(회색 테두리)
    &::before {
        border-width: 5px 4px 0 4px; // 위부터 시계방향
        border-color: #ddd transparent;
        bottom: -5px;
        z-index: 0;
    }

    // 아래가 뾰족한 흰색 삼각형
    &::after {
        border-width: 5px 4px 0 4px;
        border-color: #fff transparent;
        bottom: -3.7px;
        z-index: 1;
    }
`