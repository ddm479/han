import { CSSProperties } from "react"
import AdBanner from "../components/ad/AdBanner"
import Marquee from "../components/marquee/Marquee"

const topDivStyle:CSSProperties = {
    
}
const Home = () => {
    return (
        <>
            {/* 광고 배너 컴포넌트 사용 */}
            <AdBanner
            />
            {/* 페이지 내용 */}
            <Marquee />
        </>
    )
}

export default Home