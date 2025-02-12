import React,{useState} from "react"
import './Ad.scss'
export const Ad = () => {
    
    const [clicked, setClicked] = useState(false) // 광고 닫는 버튼 클릭 여부
    // 광고 닫는 함수
    const AdClose = () => { setClicked(true)}
    return (
        <div className="ad-top">
            <div className="ad-top-inner">
                <div className="ad-top-inner-2">
                    <img src="src\assets\samsungAd.gif" className="ad-top-img"></img>
                </div>
                <button onClick={AdClose} className="btn-close-ad"></button>
                <iframe id="google_ads_iframe_/3448900/Main_Leaderboard1_0" name="google_ads_iframe_/3448900/Main_Leaderboard1_0" title="3rd party ad content" width="970" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" aria-label="Advertisement" tabindex="0" allow="private-state-token-redemption;attribution-reporting" data-google-container-id="1" style="border: 0px; vertical-align: bottom;" data-load-complete="true"></iframe>
            </div>
            
        </div>
    )
}

export default Ad