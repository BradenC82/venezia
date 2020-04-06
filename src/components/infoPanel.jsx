import React from 'react'
import '../assets/index.css';
import './infoPanel.css';

export default function InfoPanel(props) {

    let infoClasses = "p-12 h-full md:h-screen w-full top-0 left-0 absolute wrapper"

    if (props.open) {
        infoClasses += ' wrapperShown'
    }

    return (
        <div className={`${infoClasses} normalScroll`} style={{ background: props.solid ? '#333333' : 'rgb(10,10,10,0.66)' }}>
            <div className="h-full flex flex-col mr-12 md:p-12 ">
                <h1 className=" text-white md:max-w-xs font-display text-3xl md:text-4xl mb-2 md:mb-3 ">{props.title}</h1>
                <div className="text-white md:max-w-xs h-full  overflow-auto ">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
