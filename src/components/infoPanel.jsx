import React from 'react'
import '../assets/index.css';
import './infoPanel.css';

export default function InfoPanel(props) {

    let infoClasses = "p-12 h-full md:h-screen w-full top-0 left-0 absolute wrapper"

    if(props.open){
        infoClasses += ' wrapperShown'
    }

    return (
        <div className={infoClasses} style={{background: 'rgb(10,10,10,0.66)'}}>
            <div className="h-full flex flex-col mr-12 md:p-12 ">
            <h1 className=" text-white max-w-xs font-display text-2xl md:text-4xl mb-2 md:mb-3 ">Santa Maria della Salute </h1>
            <div className="text-white max-w-xs h-full  overflow-auto ">
                 
                <p className="font-body text-sm md:text-base font-light mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="font-body text-sm md:text-base font-light mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
            </div>
            </div>
        </div>
    )
}
