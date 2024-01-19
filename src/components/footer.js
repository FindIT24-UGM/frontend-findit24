import React from 'react';
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin} from 'react-icons/fa';

export default function Footer () {
    return (
        <footer className="bg-black font-Montserrat text-white w-full pb-[1vh]">
            <div className="footer mx-[5vw] pt-[5vh]">
                <div className="mainfooter flex sm:flex-row flex-col items-center sm:items-start">
                    <div className="leftfooter flex flex-col w-[50%] items-center sm:items-start">
                        <div className="aboutus sm:w-[30vw] md:w-[35vw] w-[60vw]">
                            <div className="logo flex justify-center sm:justify-start">
                                <img src="/assets/images/LogoFINDIT.png" alt="logo FIND IT"/>
                            </div>
                            <p className="font-bold lg:my-[1.5vh] mt-[2vh] mb-[2.5vh] text-center sm:text-left text-sm lg:text-base">Empower Breakthrough</p>
                            <p className="text-center sm:text-left text-xs lg:text-base">The premier annual IT event hosted by DTETI UGM. Brings together technology enthusiasts for a week of innovation, competition, and collaboration.</p>
                        </div>
                        <div className="partnership sm:mb-0 mb-[6vh]">
                            <p className="font-bold lg:mt-[3vh] mt-[8vh] mb-[1.5vh] text-base sm:text-sm lg:text-xl">Presented by</p>
                            <div className="logo flex justify-center sm:justify-start">
                                <img src="/assets/images/LogoUGM.png" alt="logo UGM"/>
                                <img className="mx-[2vw] md:mx-[1vw]" src="/assets/images/LogoKMTETI.png" alt="logo KMTETI"/>
                                <img src="/assets/images/LogoNL.png" alt="logo NL"/>
                            </div>
                        </div>
                    </div>
                    <div className="rightfooter flex mt-[1.5vh] sm:flex-row flex-col items-center sm:items-start w-[50%] sm:mr-[3vw] md:mr-0 lg:w-[50vw]">
                        <div className="event flex sm:w-[50%] w-[100%] lg:flex-row flex-col translate-x-0 sm:-translate-x-[5vw] lg:translate-x-0">
                            <div className="webinar mb-[2vh] sm:mb-0">
                                <p className="font-bold mb-[2vh] text-center lg:text-left">EVENTS</p>
                                    <ul>
                                        <li className="text-sm text-center lg:text-left">
                                            <a href="#" target="_self">Webinar</a>
                                        </li>
                                    </ul>
                            </div>
                            <div className="competition lg:ml-[4vw] mt-[4vh] lg:mt-0">
                                <p className="font-bold mb-[2vh] text-center lg:text-left text-sm lg:text-base">COMPETITIONS</p>
                                <ul>
                                    <li className="mb-2.5 lg:mb-2 text-xs lg:text-sm text-center lg:text-left">
                                        <a href="#" target="_self">Hackaton</a>
                                    </li>
                                    <li className="mb-2.5 lg:mb-2 text-xs lg:text-sm text-center lg:text-left">
                                        <a href="#" target="_self">UX Competition</a>
                                    </li>
                                    <li className="mb-2.5 lg:mb-2 text-xs lg:text-sm text-center lg:text-left">
                                        <a href="#" target="_self">E-Sports</a>
                                    </li>
                                    <li className="mb-2.5 lg:mb-2 text-xs lg:text-sm text-center lg:text-left">
                                        <a href="#" target="_self">Informatics Competition</a>
                                    </li>
                                    <li className="mb-2.5 lg:mb-2 text-xs lg:text-sm text-center lg:text-left">
                                        <a href="#" target="_self">Data Analyts</a>
                                    </li>
                                    <li className="text-xs lg:text-sm text-center lg:text-left">
                                        <a href="#" target="_self">Capture The Flag</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contactandsocialmedia sm:ml-[5vw] mt-[5vw] sm:mt-0">
                            <div className="socialmedia mt-[4vh] sm:mt-0">
                                <p className="font-bold mb-[1.5vh] text-center text-sm lg:text-base sm:text-right lg:text-left">SOCIAL MEDIA</p>
                                <div className="socialmedialogo flex flex-row justify-center md:justify-start">
                                    <a href="#" target="_blank" className="mr-[2.5vw] lg:mr-[1.5vw]">
                                        <FaTwitter className='w-6 lg:w-10 h-6 lg:h-10'/>
                                    </a>
                                    <a href="#" target="_blank" className="mr-[2.5vw] lg:mr-[1.5vw]">
                                        <FaFacebook className='w-6 lg:w-10 h-6 lg:h-10'/>
                                    </a>
                                    <a href="#" target="_blank" className="mr-[2.5vw] lg:mr-[1.5vw]">
                                        <FaYoutube className='w-6 lg:w-10 h-6 lg:h-10'/>
                                    </a>
                                    <a href="#" target="_blank" className="mr-[2.5vw] lg:mr-[1.5vw]">
                                        <FaInstagram className='w-6 lg:w-10 h-6 lg:h-10'/>
                                    </a>
                                    <a href="#" target="_blank">
                                        <FaLinkedin className='w-6 lg:w-10 h-6 lg:h-10'/>
                                    </a>
                                </div>
                            </div>
                            <div className="contact mt-[8vh] sm:mt-[5vh] text-center sm:text-right lg:text-left">
                                <p className="font-bold mb-[.5vh] text-sm lg:text-base">KONTAK KAMI</p>
                                <p className="text-xs lg:text-sm my-4 lg:mb-2"><a href="#" target="_blank">findit2024@gmail.com</a></p>
                                <p className="text-xs lg:text-sm">+62 8123456789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright flex justify-center mt-[10vh] mb-[.5vh]">
                <img className="w-4 lg:w-5 h-4 lg:h-5" src="/assets/images/Copyright.png" alt="copyright"/><span className="font-semibold ml-1 text-xs lg:text-sm text-slate-600">FindIT 2024. All rights reserved.</span>
            </div>
        </footer>
    );
}
