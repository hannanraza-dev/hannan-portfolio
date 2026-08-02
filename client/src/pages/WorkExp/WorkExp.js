import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiReacttable } from "react-icons/si";
import './WorkExp.css'

const WorkExp = () => {
  return (
    <>
      <div className=" work" id='workexp'>
        <div className="container work-exp">
          <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Work Experince</h2>
          <hr />
          <VerticalTimeline lineColor=' #1e1e2c'>
              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: ' white', color: 'blank' }}
              contentArrowStyle={{ borderRight: '7px solid #128781' }}
              date=" 6 Jan 2025 - 30 Sep 2025"
              iconStyle={{ background: '#1e1e2c', color: '#fff' }}
              icon={<SiReacttable />}
            >
              <h3 className="vertical-timeline-element-title">WEB DESIGNER & DEVELOPER</h3>
              <h4 className="vertical-timeline-element-subtitle">EFOX TECHNOLOGIES PVT LTD</h4>
              <p className='exp'>
                Developed responsive, user-friendly web interfaces using Figma, Photoshop, and Canva. Ensured cross-browser functionality, debugging in VS Code, and delivered client-focused solutions through effective collaboration.
              </p>
            </VerticalTimelineElement>
             <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: ' white', color: 'blank' }}
              contentArrowStyle={{ borderRight: '7px solid #128781' }}
              date=" 1 Mar 2023 - 3 Jan 2025"
              iconStyle={{ background: '#1e1e2c', color: '#fff' }}
              icon={<SiReacttable />}
            >
              <h3 className="vertical-timeline-element-title">FULL STACK WEB DEVELOPER</h3>
              <h4 className="vertical-timeline-element-subtitle">JSS IT SOLUTION COMPANY</h4>
              <p className='exp'>
               Developed and maintained dynamic, responsive web applications using React.js, Node.js, Express.js, and MongoDB, ensuring secure databases, mobile-first design, and scalable, collaborative web solutions.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: ' white', color: 'blank' }}
              contentArrowStyle={{ borderRight: '7px solid #128781' }}
              date=" 1 Month"
              iconStyle={{ background: '#1e1e2c', color: '#fff' }}
              icon={<SiReacttable />}
            >
              <h3 className="vertical-timeline-element-title">Front-end-developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Saasaki Technology Private Limited</h4>
              <p className='exp'>
                Live Project Work Front Page, Web Pages, Ui/UX design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'blank' }}
              contentArrowStyle={{ borderRight: '7px solid #128781' }}
              date="6 Month - 2022"
              iconStyle={{ background: '#1e1e2c', color: '#fff' }}
              icon={<SiReacttable />}
            >
              <h3 className="vertical-timeline-element-title">Data Entry Operater</h3>
              <h4 className="vertical-timeline-element-subtitle">Cogent E-Services, Bareilly</h4>
              <p className='exp'>
                Data Manage Data Operater
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp
