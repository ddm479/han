// // import React, { CSSProperties, useState } from "react"
// // import './AdBanner.scss'

// // const iframeStyle: CSSProperties = {
// //     border: 0,
// //     verticalAlign: 'bottom'
// // }



// // const styles = {
// //     iframeStyle: {
// //         border: 0, 
// //         verticalAlign: 'bottom'
// //     }
// // } as const

// // const Ad = () => {

// //     const [clicked, setClicked] = useState(false) // 광고 닫는 버튼 클릭 여부
// //     // 광고 닫는 함수
// //     const AdClose = () => { setClicked(true) }
// //     return (
// //         <div className="ad-top">
// //             <div className="ad-top-inner">
// //                 <div className="ad-top-inner-2">
// //                     <img src="src/assets/samsungAd.gif" className="ad-top-img" alt="Samsung Advertisement" />
// //                 </div>
// //                 <button onClick={AdClose} className="btn-close-ad">X</button>
// //                 <iframe
// //                     id="google_ads_iframe_/3448900/Main_Leaderboard1_0"
// //                     name="google_ads_iframe_/3448900/Main_Leaderboard1_0"
// //                     title="3rd party ad content"
// //                     width="970"
// //                     height="250"
// //                     scrolling="no" // ✅ HTML 속성으로 이동
// //                     marginWidth={0}
// //                     marginHeight={0}
// //                     frameBorder="0"
// //                     aria-label="Advertisement"
// //                     tabIndex={0}
// //                     allow="private-state-token-redemption;attribution-reporting"
// //                     data-google-container-id="1"
// //                     style={styles.iframeStyle}
// //                     data-gtm-yt-inspected-10="true"
// //                     data-load-complete="true"
// //                 />
// //             </div>
// //         </div>
// //     )
// // }

// // export default Ad

// import React, { useState } from "react";
// import styles from "./AdBanner.css"; // CSS 모듈 import

// interface AdBannerProps {
//     imageUrl?: string; // 이미지 광고 URL
//     iframeSrc?: string; // Iframe 광고 URL
//     altText?: string; // 이미지 대체 텍스트
// }

// const AdBanner = ({ imageUrl, iframeSrc, altText }: AdBannerProps) => {
//     const [isVisible, setIsVisible] = useState(true);

//     // 광고 닫기 함수
//     const handleClose = () => {
//         setIsVisible(false);
//     };

//     if (!isVisible) return null; // 광고 닫힘 상태이면 렌더링 X

//     return (
//         <div className="adContainer">
//             <div className="adContent">
//                 {/* 이미지 광고 또는 iframe 광고 */}
//                 {imageUrl ? (
//                     <img src={imageUrl} alt={altText} className="adImage" />
//                 ) : iframeSrc ? (
//                     <iframe
//                         src={iframeSrc}
//                         title="Advertisement"
//                         width="100%"
//                         height="90"
//                         frameBorder="0"
//                         scrolling="no"
//                         className="adIframe"
//                     ></iframe>
//                 ) : null}

//                 {/* 닫기 버튼 */}
//                 <button onClick={handleClose} className="closeButton">X</button>
//             </div>
//         </div>
//     );
// };

// export default AdBanner;

import React, { useState } from 'react';
import Ad from './Ad';
import './AdBanner.scss'; // scss는 전역(global) 적용 - import시 모든컴포넌트에서 클래스 사용가능 

type AdBannerProps  =  {
    
}

const AdBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <AdProvider handleClose={handleClose}> {/* ✅ Context Provider로 감싸기 */}
            <div className="adBanner">
                <Ad padding="24px 0 20px" imageUrl="src/assets/samsungAd.gif" linkUrl="https://www.naver.com/" />
            </div>
        </AdProvider>
    );
};

export default AdBanner;
