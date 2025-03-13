import axios from "axios";
import { StockData } from "./Stock";

// 주식 데이터 가져오는 API 함수
export const fetchStocks = async (): Promise<StockData[]> => {
    const response = await axios.get<StockData[]>("https://openapi.koreainvestment.com:9443/uapi/overseas-price/v1/quotations/inquire-daily-chartprice");
    return response.data;
};