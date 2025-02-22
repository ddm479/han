import React from "react"

const AdInButton = () => {
    return (
        <button className="closeButton" onClick={(e) => {
            e.preventDefault()
            handleClose()
        }}>
            <span className='blind'>X</span>
        </button>
    )
}
export default AdInButton;