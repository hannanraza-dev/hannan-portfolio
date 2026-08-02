import React, { useState } from 'react'
import './MobileNav.css';
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from "react-icons/fc";
import { Link } from 'react-scroll';
import { TfiMenu } from "react-icons/tfi";

const MobileNav = () => {
    const [open, setOpen] = useState(false)



    //handle open
    const handleOpen = () => {
        setOpen(!open);
    }

    //handle new click
    const handleMenuClick = () => {
        setOpen(false);
    }
    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (<RiMenuFold3Fill size={30} className='mobile-nav-icon' onClick={handleOpen} />) : (<RiMenuFold4Fill size={30} className='mobile-nav-icon' onClick={handleOpen} />)}
                    {/* <RiMenuFold3Fill size={30} className='mobile-nav-icon' /> */}
                    <span className='mobile-nav-title'>My Portfolio App</span>
                </div>
                {
                    open && (
                        <div className="mobile-nav-menu">
                            <div className='nav-items'>
                                <div className="nev-item">


                                    <div className="nav-link">
                                        <Link to='home' spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={100}
                                            onClick={handleMenuClick}
                                        >
                                            <FcHome size={35} />Home
                                        </Link>
                                    </div>

                                    <div className="nav-link">
                                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100}
                                            onClick={handleMenuClick} >
                                            <FcAbout size={35} />About
                                        </Link>
                                    </div>

                                    <div className="nav-link">
                                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
                                            <FcReadingEbook size={35} />Education
                                        </Link>
                                    </div>




                                    <div className="nav-link">
                                        <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}
                                        >
                                            <FcBiotech size={35} />Tech Stack
                                        </Link>
                                    </div>


                                    <div className="nav-link">
                                        <Link to='project' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcVideoProjector size={35} />Project
                                        </Link>
                                    </div>

                                    <div className="nav-link">
                                        <Link to='workexp' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcPortraitMode size={35} />Work Experince
                                        </Link>
                                    </div>



                                    {/* <div className="nav-link"><FcVoicePresentation size={35}/>Testimonial</div> */}
                                    <div className="nav-link">
                                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcBusinessContact size={35} />Contact
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default MobileNav
