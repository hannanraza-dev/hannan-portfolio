import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram, BsSnapchat } from "react-icons/bs";
import './Contact.css'
// import contact from '/Hannan Portfolio/client/src/utils/contactus.jpg'
import Rotate from 'react-reveal/Rotate'
import LightSpeed from 'react-reveal/LightSpeed'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import { Message, SMTPClient } from 'emailjs';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs

            .sendForm('service_d5w3wxf', 'template_xkrngmc', form.current, {
                publicKey: '637y8bWboq-Gsdy64',
            })


            .then(
                () => {
                    console.log('SUCCESS!');

                    alert("Message Send Succesfully")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    // const Contact = () => {

    return (

        <>

            <div className=" contact" id='contact'>
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <LightSpeed>
                                        <img src='/images/contactus.jpg' className='images' alt="ocantact" />
                                    </LightSpeed>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Rotate>
                                <div className="card2 d-flex card border-0 px-4 py-5">
                                    <div className="row">

                                        <div className="row "><h6>
                                            Contact With
                                            <BsLinkedin size={30} color='blue' className='ms-2' />
                                            <BsGithub size={30} color='black' className='ms-2' />
                                            <BsFacebook size={30} color='blue' className='ms-2' />
                                            <BsInstagram size={30} color='#ec0093' className='ms-2' />
                                            <BsSnapchat size={30} color='yellow' className='ms-2' />
                                        </h6></div>


                                        <div className="row px-3 mb-4">
                                            <div className="line" />
                                            <small className='or text-center'>OR</small>
                                            <div className="line" />
                                        </div>
                                        <form ref={form} onSubmit={sendEmail} onReset={false} >
                                            <div className="row px-3">
                                                <input type="text" name="to_name" placeholder='Enter your Name' className='mb-3' id="name" />

                                            </div>
                                            <div className="row px-3">
                                                <input type="Email" name="from_name" placeholder='Enter your Email' className='mb-3' id="email" />

                                            </div>
                                            <div className="row px-3">
                                                <input type="Number" name="from_number" placeholder='Enter your Number' className='mb-3' id="number" />

                                            </div>
                                            <div className="row px-3">
                                                <textarea type="text" name="message" placeholder='Enter your Msg' className='mb-3' id="message" />

                                            </div>
                                            <div className="row px-3">
                                                <button type='Submit' id='sendEmail' value="Send" className='button'>SEND MESSAGE</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default Contact
