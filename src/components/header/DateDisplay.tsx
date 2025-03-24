import React from "react";

const DateDisplay = () => {
    const today = new Date();

    // padStart() 메서드는 String 값의 메서드로, 결과 문자열이 주어진 길이에 도달할 때까지 이 문자열의 시작 부분에 다른 문자열을 (필요하다면 여러 번) 채웁니다. 패딩은 이 문자열의 시작 부분부터 적용됩니다.
    // 두 자리 숫자로 포맷팅하는 함수 (한 자리 숫자일 경우 앞에 '0' 추가)
    const formatNumber = (num: number): string => num.toString().padStart(2, "0"); 

    const formattedDate = `${today.getFullYear()}.${formatNumber(today.getMonth() + 1)}.${formatNumber(today.getDate())}`;

    return (
        <div className="date-area">
            <p className="date">{formattedDate}</p>
        </div>
    );
};

export default DateDisplay;
