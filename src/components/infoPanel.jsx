import React, { useState, useEffect } from 'react'
import '../assets/index.css';
import './infoPanel.css';


export default function InfoPanel(props) {

    // True for view ports <= 768px
    const [matches, setMatches] = useState(window.matchMedia("(max-width: 768px)").matches);

    // Keeping the handler defined inside useEffect prevents the method being recreated on every render
    useEffect(() => {
        const handler = (event) => { setMatches(event.matches) }
        window.matchMedia('(max-width: 768px)').addListener(handler);
    }, [] /* componentDidMount*/) 

    return (
        <div className={`p-12 h-full md:h-screen w-full top-0 left-0 absolute wrapper ${props.open && "wrapperShown"}`} style={{ background: props.solid ? '#333333' : 'rgb(10,10,10,0.66)' }}>
            <div className="h-full flex flex-col mr-12 md:p-12 ">
                <h1 className=" text-white md:max-w-xs font-display text-3xl md:text-4xl mb-2 md:mb-3 ">{props.title}</h1>
                <div className={`text-white max-w-xs h-full overflow-auto ${matches && props.open ? 'normalScroll' : ''}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
