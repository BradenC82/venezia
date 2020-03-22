import React from 'react'
import '../assets/index.css';
import {ReactComponent as CloseIcon} from '../assets/icons/close.svg'
import './Drawer.css'
import fullpage_api from '@fullpage/react-fullpage'

export default function Drawer(props) {

    let DrawerClasses = "transition duration-500 ease-out h-full p-8 md:p-12 bg-white fixed top-0 right-0 z-10 w-auto transform translate-x-full"

    if(props.open){
        DrawerClasses+="translate-x-0"
    }

    console.log(fullpage_api)

    return (
        <div className={DrawerClasses}>
            <CloseIcon onClick={props.toggle} className="text-right ml-auto mb-2">Close</CloseIcon>
            <ul className="list-none text-right font-display ml-4 md:ml-8">
                <li  className="whitespace-no-wrap text-2xl md:text-4xl py-2"><div><a style={{position:'relative'}}>Explore Venice</a></div></li>
                <li className="whitespace-no-wrap text-2xl md:text-4xl py-2"><a>Vibrant Communities</a></li>
                <li className="whitespace-no-wrap text-2xl md:text-4xl py-2"><a>Romantic History</a></li>
                <li className="whitespace-no-wrap text-2xl md:text-4xl py-2"><a>Breathtaking Attractions</a></li>
            </ul>
        </div>
    )
}
