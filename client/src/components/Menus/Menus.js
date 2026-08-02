import React from 'react'
import './Menus.css';
// import profile from '/Hannan Portfolio/client/src/faizan.jpeg'
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'

import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from "react-icons/fc";


const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ?
        (
          <>
            <Zoom>
              <div className='profile'><h3>My Profile</h3></div>
              <div className="navbar-profile-pic">
                <img src='/images/hannan.png' width={250} alt="Profile pic" />
              </div>

            </Zoom>

            <Fade left>

              <div className='nav-items'>
                <div className="nev-item">

                  <div className="nav-link">
                    <Link to='home' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcHome size={35} />Home
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcAbout size={35} />About
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link to='education' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcReadingEbook size={35} />Education
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcBiotech size={35} />Tech Stack
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link to='project' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcVideoProjector size={35} />Project
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link to='workexp' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcPortraitMode size={35} />Work Experince
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcBusinessContact size={35} />Contact
                    </Link>
                  </div>

                </div>
              </div>
            </Fade>
          </>
        ) : (
          <>
            <div className='nav-items'>
              <div className="nev-item">
                <Fade bottom>
                  <div className="nav-link" id='nav-item'>
                    <Link to='home' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcHome size={35} title='Home' />
                    </Link>
                  </div>

                  <div className="nav-link" id='nav-item'>
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcAbout size={35} title='About' />
                    </Link>
                  </div>

                  <div className="nav-link" id='nav-item'>
                    <Link to='education' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcReadingEbook size={35} title='Education' />
                    </Link>
                  </div>

                  <div className="nav-link" id='nav-item'>
                    <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcBiotech size={35} title='Tech Stack' />
                    </Link>
                  </div>

                  <div className="nav-link" id='nav-item'>
                    <Link to='project' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcVideoProjector size={35} title='Project' />
                    </Link>
                  </div>

                  <div className="nav-link" id='nav-item'>
                    <Link to='workexp' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcPortraitMode size={35} title='Work Experince' />
                    </Link>
                  </div>

                  <div className="nav-link" id='nav-item'>
                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} >
                      <FcBusinessContact size={35} title='Contact' />
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>


          </>
        )
      }
    </>
  )
}

export default Menus
