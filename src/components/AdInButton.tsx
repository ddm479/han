import React from "react"
import { useAdContext } from "./AdContext"; // Context 가져오기

const AdInButton = () => {
    const { handleClose } = useAdContext();

    return (
        <button className="closeButton" onClick={(e) => {
            e.preventDefault();
            handleClose();
        }}>

        </button>
    )
}
export default AdInButton;