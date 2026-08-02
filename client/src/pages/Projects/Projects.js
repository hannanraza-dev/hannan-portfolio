import React from 'react'
import "./Projects.css"
import Spin from 'react-reveal/Spin'
// import images from '/Hannan Portfolio/client/src/images.jpg'
// import twitter from '/Hannan Portfolio/client/src/assets/images/Twitter.jpg'
// import todo from '/Hannan Portfolio/client/src/assets/images/images.png'
// import portfolio from '/Hannan Portfolio/client/src/assets/images/Portfolio1.png'

const Projects = () => {
    return (
        <>
            <div className="container project" id='project'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>TOP RECENT PROJECTS</h2>
                <hr />

                <p className='pb-3 text-center p'>
                    Here are my top 3 recent project with live links and source code
                </p>

                {/* card design  */}
                <div className="row" id='ads'>
                    <Spin>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Full Stack</span>
                                    <img src='images/imagesnew.png' alt="project1" />

                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className='card-detail-badge'>Node</span>
                                    <span className='card-detail-badge'>Express</span>
                                    <span className='card-detail-badge'>React</span>
                                    <span className='card-detail-badge'>MongoDB</span>
                                </div>
                                <div className="card-body text-center m-auto">
                                    <div className="ad-title m-auto">
                                        <h4 className="text-uppercase hannan">Todo List Website</h4>
                                    </div>
                                    <a className='ad-btn' href="https://todoslisthannan.netlify.app/">View</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Full Stack</span>
                                    <img src='/images/Twitter.jpg' alt="project1" />

                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className='card-detail-badge'>HTML</span>
                                    <span className='card-detail-badge'>CSS</span>
                                    <span className='card-detail-badge'>JavaScript</span>
                                    <span className='card-detail-badge'>Tailwind</span>
                                </div>
                                <div className="card-body text-center m-auto">
                                    <div className="ad-title m-auto">
                                        <h4 className="text-uppercase hannan">Twitter Clone</h4>
                                    </div>
                                    <a className='ad-btn' href="https://twitterclonehannan.netlify.app/">View</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Full Stack</span>
                                    <img src='/images/images.jpg' alt="project1" />


                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className='card-detail-badge'>HTML</span>
                                    <span className='card-detail-badge'>CSS</span>
                                    <span className='card-detail-badge'>JavaScript</span>
                                    {/* <span className='card-detail-badge'>Tailwind</span> */}
                                </div>
                                <div className="card-body text-center m-auto">
                                    <div className="ad-title m-auto raza">
                                        <h6 className="text-uppercase hannan text-sm-[10px]">Hannan Portfolio</h6>
                                    </div>
                                    <a className='ad-btn' href=''>View</a>
                                </div>

                            </div>
                        </div>
                    </Spin>
                </div>

            </div>
        </>
    )
}

export default Projects
