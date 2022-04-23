import React from "react";
import Head from "./Head";
import ContentBlock from "./ContentBlock";
import { who, what, using, why } from "../utils/data";

const Base = () => {
    const whoTitle = 'Хто це був?';
    const whatTitle = 'Що зробив?';
    const usingTitle = 'З допомогою чого?';
    const whyTitle = 'Чому зробив?';
    
    return (
        <div className="base">
            <div className="baseHead"></div>
            <div className="mainSheet">
                <Head />
                <ContentBlock arr={who} title='Хто' text={whoTitle} />
                <ContentBlock arr={what} title='Що зробив' text={whatTitle} />
                <ContentBlock arr={using} title='З допомогою' text={usingTitle} />
                <ContentBlock arr={why} title='Чому зробив' text={whyTitle} />
            </div>
        </div>
    );
}

export default Base;
