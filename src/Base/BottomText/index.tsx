import React from "react";

import "./bottomText.scss"

const BottomText = (props: { text: string }) => {
    return (
        <div className="bottom">{props.text}</div>
    )
}

export default BottomText;