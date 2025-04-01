
import React, { useState, useRef, useLayoutEffect } from 'react';
import Ad from './Ad';
import { AdProvider } from "./AdContext";
import AdInButton from './AdInButton';
import './AdBanner.scss'; // scss는 전역(global) 적용 - import시 모든컴포넌트에서 클래스 사용가능 

type AdBannerProps = {

}

const AdBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isSlidingUp, setIsSlidingUp] = useState(false);

    const [maxHeight, setMaxHeight] = useState(0);
    const adBannerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // console.log("adBannerRef.current",adBannerRef.current)
        if (adBannerRef.current) {
            // console.log("배너의 높이:", adBannerRef.current.offsetHeight);
            // setMaxHeight(adBannerRef.current.offsetHeight);
            // console.log("useLayoutEffect() maxHeight", maxHeight)
            adBannerRef.current.style.setProperty("--maxHeight", `${adBannerRef.current.offsetHeight}px`); // css var값 동적으로 설정
        }
    }, []);
    // console.log("maxHeight", maxHeight)
    // console.log("adBannerRef.current",adBannerRef.current)

    const handleClose = () => {
        setIsSlidingUp(true);  // 애니메이션 시작 (위로 올라가기 시작)
    
    };

    return ( isVisible && (
        <AdProvider handleClose={handleClose}> {/* ✅ Context Provider로 감싸기 */}
            <div 
                ref={adBannerRef}
                className={`adBanner${isSlidingUp ? ' hidden' : ''}`}
                onTransitionEnd={() => isSlidingUp && setIsVisible(false)}
                // isSlidingUp이 true인 경우에만 setIsVisible(false)실행 
                // -> onTransitionEnd는 컴포넌트 내의 모든 트랜지션이 끝날 때마다 호출되기 때문에 광고배너를 닫는 트랜지션이 끝날 때에만 상태를 변경하도록 한다.
            >
                <Ad padding="24px 0 20px" imageUrl="src/assets/samsungAd.gif" linkUrl="https://www.naver.com/" Component={<AdInButton />} />
            </div>
        </AdProvider>
    ) );
};

export default AdBanner;



