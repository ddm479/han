import React from "react";

const benefits = [
    "특별한 뉴스와 분석 보고서 접근",
    "주식 시장 및 경제 동향에 대한 최신 정보",
    "한경만의 독자적인 콘텐츠에 대한 접근",
    "이벤트 및 세미나 참가 기회"
];

const BenefitList = () => {
    return (
        <ul className="info-item member-benefit">
            {benefits.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default BenefitList;