import React from 'react'
import '../assets/index.css';
import {ReactComponent as CloseIcon} from '../assets/icons/close.svg'
import './Drawer.css'

export default function Drawer(props) {

    let DrawerClasses = "transition duration-500 ease-out h-full p-8 md:p-12 bg-white fixed top-0 right-0 z-10 w-auto transform translate-x-full"

    if(props.open){
        DrawerClasses+="translate-x-0"
    }

    return (
        <div className={DrawerClasses}>
            <CloseIcon onClick={props.toggle} className="text-right ml-auto mb-2 cursor-pointer">Close</CloseIcon>
            <ul id="drawerList" className="list-none text-right font-display ml-4 md:ml-8">
                <li  className="whitespace-no-wrap text-2xl md:text-4xl py-2"><a href="#Explore">Explore Venice</a></li>
                <li className="whitespace-no-wrap text-2xl md:text-4xl py-2"><a href="#Communities">Vibrant Communities</a></li>
                <li className="whitespace-no-wrap text-2xl md:text-4xl py-2"><a href="#History">Romantic History</a></li>
                <li className="whitespace-no-wrap text-2xl md:text-4xl py-2"><a href="#Attractions">Breathtaking Attractions</a></li>
                <li className="whitespace-no-wrap text-2xl md:text-4xl py-2"><a href="#Book">Book Now</a></li>
            </ul>
        </div>
    )
}
