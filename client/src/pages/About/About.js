import React from 'react'
import './About.css';
import logo from './hannan.jpg'
import Jump from 'react-reveal/Jump'

const About = () => {
  return (
    <>
      <Jump>
        <div className=" about" id='about'>
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img">
              <img src={logo} width={100} alt="profile" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-content">
              <h1>About Me</h1>
              {/* <p>As a Computer Engineer Student From MJPRU University in Bareilly. Now I am Pursing in MCA From Future University Bareilly.Certain Skill that I have worked with Data Structure and Algorithms and Web Development (Html, Css, Javascript, Node.js, Express.js, MongoDB, React.js, Next.js). I am a Full Stack Web Developer.My Goal is to built a career in the IT industry Where I can apply my skills and knowledge to solve complex problems and make a meaningful Impact and Continuous learning new technologies and tools.</p> */}
              <p>As a passionate and dedicated Full Stack Developer with a strong foundation in modern web technologies, I specialize in designing, developing, and deploying responsive, scalable, and high-performance web applications. My expertise spans across HTML, CSS, JavaScript, Node.js, React, and related frameworks, enabling me to build seamless front-end interfaces and robust back-end systems that work harmoniously to deliver exceptional results. I have hands-on experience in developing dynamic websites, integrating APIs, managing databases, and ensuring smooth functionality across various devices and browsers. With a focus on writing clean, maintainable code and optimizing performance, I aim to create efficient, user-centric solutions that not only meet client objectives but also enhance the overall user experience. My collaborative approach, combined with strong problem-solving and debugging skills, allows me to contribute effectively to team-driven projects and ensure the delivery of innovative, reliable, and future-ready digital solutions.
</p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  )
}

export default About
