import React, { createContext, useContext } from "react";

// Context 타입 정의
type AdContextType = {
    handleClose: () => void;
}

// 초기값 설정 (handleClose는 기본적으로 빈 함수)
export const AdContext = createContext<AdContextType>({
    handleClose: () => { },
});

// Context를 쉽게 사용하기 위한 Custom Hook
export const useAdContext = () => useContext(AdContext);

type AdProviderProps = {
    children: React.ReactNode;
    handleClose: () => void;
}

// Context Provider 컴포넌트
export const AdProvider = ({ children,  handleClose }: AdProviderProps) => {
    return <AdContext.Provider value={{ handleClose }}>{children}</AdContext.Provider>;
};
