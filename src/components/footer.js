import React, { useState, useEffect } from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';
import { BsLine } from 'react-icons/bs';
import Link from 'next/link';

function SocialMediaLink({ href, target, icon, className }) {
    return (
      <Link href={href} target={target} className={`${className}`}>
        {icon}
      </Link>
    );
  }

export default function Footer () {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getIconSize = () => {
        if (screenWidth < 1024) {
        return 24;
        } else if (screenWidth >= 1024 && screenWidth <= 1536) {
        return 36;
        } else {
        return 48;
        }
    };

    const socialMediaStyle = "transition-transform duration-300 ease-in-out hover:translate-y-1"

    const socialLinks = [
        { href: "https://www.youtube.com/@finditugm7962", icon: <FaYoutube size={getIconSize()} />, className: `${socialMediaStyle}` },
        { href: "https://www.tiktok.com/@findit_ugm", icon: <IoLogoTiktok size={getIconSize()} />, className: `${socialMediaStyle}` },
        { href: "https://www.instagram.com/findit_ugm", icon: <FaInstagram size={getIconSize()} />, className: `${socialMediaStyle}` },
        { href: "#", icon: <BsLine size={getIconSize()} />, className: `${socialMediaStyle}` }, //Tambahin link line
        { href: "https://www.linkedin.com/company/findit-ugm", icon: <FaLinkedin size={getIconSize()} />, className: `${socialMediaStyle}` }
      ];

    {/* Tambahin link antarpage */}
    const competitions = [
        { text: 'Hackaton', href: '' },
        { text: 'UX Competition', href: '' },
        { text: 'E-Sports', href: '' },
        { text: 'Informatics Competition', href: '' },
        { text: 'Data Analytics', href: '' },
        { text: 'Capture The Flag', href: '' },
      ];

    {/* Ganti no Whasapp */}
    const whatsappNumber = "+62 123456789";

    return (
        <footer className="bg-shade-black font-Montserrat text-shade-white w-full pb-[1vh]">
            <div className="mx-[5vw] pt-[5vh]">
                <div className="flex sm:flex-row flex-col items-center sm:items-start">
                    <div className="flex flex-col w-[50%] items-center sm:items-start">
                        <div className="sm:w-[30vw] md:w-[35vw] w-[60vw]">
                            <div className="flex justify-center sm:justify-start">
                                <img src='/assets/images/LogoFINDITNew.png' alt='LogoFINDIT' className='2xl:scale-150' />
                            </div>
                            <p className="font-bold lg:my-[1.5vh] mt-[2vh] mb-[2.5vh] text-center sm:text-left text-sm lg:text-base 2xl:text-2xl">Empower Breakthrough</p>
                            <p className="text-center sm:text-left text-xs lg:text-base 2xl:text-xl">The premier annual IT event hosted by DTETI UGM. Brings together technology enthusiasts for a week of innovation, competition, and collaboration.</p>
                        </div>
                        <div className="sm:mb-0 mb-[6vh]">
                            <p className="font-bold lg:mt-[3vh] mt-[5vh] mb-[1.5vh] text-base sm:text-sm lg:text-xl 2xl:text-2xl">Presented by</p>
                            <div className="flex justify-center sm:justify-start">
                                <img src="/assets/images/LogoUGM.png" alt="logo UGM" className='2xl:scale-150' />
                                <img src="/assets/images/LogoKMTETI.png" alt="logo KMTETI" className="mx-[2vw] md:mx-[1vw] 2xl:scale-150 2xl:mx-[1.5vw]" />
                                <img src="/assets/images/LogoNL.png" alt="logo NL" className='2xl:scale-150' />
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-[1.5vh] sm:flex-row flex-col items-center sm:items-start w-[50%] sm:mr-[3vw] md:mr-0 lg:w-[50vw]">
                        <div className="flex sm:w-[50%] w-[100%] lg:flex-row flex-col translate-x-0 sm:-translate-x-[5vw] lg:translate-x-0">
                            <div className="mb-[2vh] sm:mb-0">
                                <p className="font-bold mb-[2vh] text-center lg:text-left 2xl:text-xl">EVENTS</p>
                                    <ul>
                                        <li className="text-sm text-center lg:text-left 2xl:text-lg">
                                            <Link className='hover:opacity-80' href={"/comingsoon"}>Webinar</Link>
                                        </li>
                                    </ul>
                            </div>
                            <div className="lg:ml-[4vw] mt-[4vh] lg:mt-0">
                                <p className="font-bold mb-[2vh] text-center lg:text-left text-sm lg:text-base 2xl:text-xl">COMPETITIONS</p>
                                <ul>
                                    {competitions.map((competition, index) => (
                                        <li key={index} className="mb-2.5 lg:mb-2 text-xs lg:text-sm text-center lg:text-left 2xl:text-lg">
                                        <Link className='hover:opacity-80' href={competition.href}>{competition.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="sm:ml-[5vw] mt-[5vw] sm:mt-0">
                            <div className="mt-[4vh] sm:mt-0">
                                <p className="font-bold mb-[1.5vh] text-center text-sm lg:text-base sm:text-right lg:text-left 2xl:text-xl">SOCIAL MEDIA</p>
                                <div className="flex flex-row justify-center md:justify-start">
                                    {socialLinks.map((link, index) => (
                                        <SocialMediaLink key={index} href={link.href} target="_blank" icon={link.icon} className={`${link.className} ${index !== socialLinks.length - 1 ? 'mr-[2.5vw] lg:mr-[1.5vw]' : ''}`} />
                                    ))}
                                </div>
                            </div>
                            <div className="contact mt-[8vh] sm:mt-[5vh] text-center sm:text-right lg:text-left">
                                <p className="font-bold mb-[1.5vh] text-sm lg:text-base 2xl:text-xl">KONTAK KAMI</p>
                                <p className="text-xs lg:text-sm mb-2">
                                    <Link href="mailto:timitfindit2024@gmail.com" target="_blank" className='hover:opacity-80 2xl:text-lg'>timitfindit2024@gmail.com</Link>
                                </p>
                                <p className="text-xs lg:text-sm">
                                    <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" className='hover:opacity-80 2xl:text-lg'>{whatsappNumber}</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright flex justify-center mt-[6vh] mb-[.5vh]">
                <img className="w-4 lg:w-5 2xl:w-7 h-4 lg:h-5 2xl:h-7" src="/assets/images/Copyright.png" alt="copyright"/><span className="font-semibold ml-1 text-xs lg:text-sm 2xl:text-lg text-slate-600">FindIT 2024. All rights reserved.</span>
            </div>
        </footer>
    );
}
