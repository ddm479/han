import { CSSProperties } from "react"
import AdBanner from "../components/AdBanner"

const topDivStyle:CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
}
const Home = () => {
    return (
        <div style={topDivStyle}> {/* 광고 높이만큼 여백 추가 */}
            {/* 광고 배너 컴포넌트 사용 */}
            <AdBanner
            />
            {/* 페이지 내용 */}
            
        </div>
    )
}

export default Home