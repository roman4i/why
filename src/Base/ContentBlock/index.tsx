import React, { useState } from "react";
import randNum from "../../utils/randNum";

interface IContentBlockProps {
    text: string,
    title: string,
    arr: string[]
}

const ContentBlock = (props: IContentBlockProps) => {
    const [text, setText] = useState(props.text);

    return (
        <div className="content">
            <div>
                <div className="smallTitle">{props.title}</div>
                <div>{text}</div>
            </div>
            <input type="button" className="rndBtn" value="Random" onClick={() => {setText(props.arr[randNum(props.arr.length)])}}/>
        </div>
    );
}

export default ContentBlock;