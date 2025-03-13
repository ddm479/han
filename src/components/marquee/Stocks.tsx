import React, { useEffect, useState } from "react";
import Stock, { StockData } from "./Stock";
import { fetchStocks } from "./stockApi";

const Stocks = () => {
    const [stocks, setStocks] = useState<StockData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStocks = async () => {
            try {
                const data = await fetchStocks();
                setStocks(data);
            } catch (error) {
                console.error("데이터 불러오기 실패", error);
            } finally {
                setLoading(false);
            }
        };

        getStocks();
    }, []);
    console.log(stocks)
    
    if (loading) return <p>로딩 중...</p>;

    return (
        <ul>
            {stocks.map(stock => (
                <Stock key={stock.id} stock={stock} />
            ))}
        </ul>
    );
};

export default Stocks;