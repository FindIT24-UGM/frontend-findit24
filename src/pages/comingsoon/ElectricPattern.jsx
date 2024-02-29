import React from 'react';
import Image from "next/image";
import leftBottom from "../../assets/background/Group240.png";
import rightTop from "../../assets/background/Group241.png";

const ElectricPattern = ({children, backgroundColor}) => {
    return (
        <div className={`bg-background-skyblue min-h-screen w-full relative ${backgroundColor}`}>
            <div className="absolute left-0 bottom-0 lg:w-[150px] md:w-[125px] w-[100px] flex">
                <Image src={leftBottom} />
            </div>
            <div className="absolute right-0 top-0 lg:w-[150px] md:w-[125px] w-[100px] flex">
                <Image src={rightTop} />
            </div>
            <div className='min-h-screen flex'>
                {children}
            </div>
        </div>
    );
}

export default ElectricPattern;
