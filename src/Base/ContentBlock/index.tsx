import React, { useContext } from "react";
import randNum from "../../utils/randNum";
import ContentContext from "../../utils/context";

import "./contentBlock.scss"

interface IContentBlockProps {
    title: string,
    arr: string[],
    id: number
}

const ContentBlock = (props: IContentBlockProps) => {
    const {textParts, setTextParts} = useContext(ContentContext);

    const { title, arr, id} = props;

    const btnClick = () => {
        const rndTxt = arr[randNum(arr.length)];

        setTextParts((prev: any[]) => {
            return prev.map((txt, index) => {
                if (index === id) {
                    return rndTxt;
                }

                return txt;
            })
        });                                        
    }

    return (
        <div className="content">
            <div className="contentText">
                <div className="smallTitle">{title}</div>
                <div>{textParts[id]}</div>
            </div>
            <input type="button" className="gradient-button" value="Random" onClick={btnClick}/>
        </div>
    );
}

export default ContentBlock;