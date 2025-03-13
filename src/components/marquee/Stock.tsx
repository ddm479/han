import React from "react";
// import styles from "./styles.module.scss"; // SCSS 파일 (선택)

export type StockData = {
    id: number;
    name: string;
    price: number;
    change: number;
};

const Stock = ({ stock } : StockData ) => {
    return (
        <li>
            <h3>{stock.name}</h3>
            <p>가격: {stock.price}원</p>
            <p style={{ color: stock.change >= 0 ? "green" : "red" }}>
                변동: {stock.change}%
            </p>
        </li>
    );
};

export default Stock;

// 주식 api 한국투자는 500 서버오류났다 해외꺼 알아보기
// postman 가입 및 안 되면 정적인 값으로 주식 대체하든 아래에 Header 컴포넌트 구현하기 