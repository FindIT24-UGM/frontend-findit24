import React from 'react';
import Image from "next/image";
import leftBottom from "../assets/background/Group240.png";
import rightTop from "../assets/background/Group241.png";

const ElectricPattern = ({children, backgroundColor}) => {
    return (
        <div className={`bg-background-skyblue min-h-screen w-full lg:relative ${backgroundColor}`}>
            <div className="lg:absolute lg:left-0 lg:bottom-0 lg:w-[150px] lg:flex hidden">
                <Image src={leftBottom} />
            </div>
            <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[150px] lg:flex hidden">
                <Image src={rightTop} />
            </div>
            <div className='min-h-screen'>
                {children}
            </div>
        </div>
    );
}

export default ElectricPattern;
