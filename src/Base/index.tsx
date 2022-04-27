import React, {useState, useEffect} from "react";
import Head from "./Head";
import ContentBlock from "./ContentBlock";
import { who, what, using, why } from "../utils/data";
import ContentContext from "../utils/context";
import BottomText from "./BottomText";

const Base = () => {
    const whoTitle = 'Хто це був?';
    const whatTitle = 'Що зробив?';
    const usingTitle = 'З допомогою чого?';
    const whyTitle = 'Чому зробив?';

    const [finText, setFinText] = useState('Натисніть на кнопки у кожному пункті');
    const [textParts, setTextParts] = useState([whoTitle, whatTitle, usingTitle, whyTitle]);

    useEffect(() => {
        let result: string = '';
        textParts.forEach((val, num) => {
            let mutation = '';
            if (num !== 0) {
                mutation = val[0].toLowerCase();
                mutation += val.slice(1);
            } else {
                mutation = val;
            }
            if (num === 2 && mutation !== 'з допомогою чого?') result += 'з допомогою ';
                result += mutation + ' ';
        });
        setFinText(result); 
    },[textParts]);

    
    return (
        <div className="base">
            <div className="baseHead"></div>
            <ContentContext.Provider value={{textParts, setTextParts}}>
                <div className="mainSheet">
                    <Head />
                    <ContentBlock arr={who} title='Хто' id={0} />
                    <ContentBlock arr={what} title='Що зробив' id={1} />
                    <ContentBlock arr={using} title='З допомогою' id={2} />
                    <ContentBlock arr={why} title='Чому зробив' id={3} />
                    <BottomText text={finText} />
                </div>
            </ContentContext.Provider>
        </div>
    );
}

export default Base;
