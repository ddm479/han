import React,{useState} from "react"
import './Ad.scss'
export const Ad = () => {
    
    const [clicked, setClicked] = useState(false) // 광고 닫는 버튼 클릭 여부
    // 광고 닫는 함수
    const AdClose = () => { setClicked(true)}
    return (
        <div>
            <img src="src\assets\samsungAd.gif" className="ad-top"></img>
            <button onClick={AdClose}></button>
        </div>
    )
}

export default Ad