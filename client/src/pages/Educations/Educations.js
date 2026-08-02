import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import "./Educations.css"

const Educations = () => {
    return (
        <>
            <div className="container educations" id='education'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education Details</h2>
                <hr />
                

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'blank' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2023 - 2025 "
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={< MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">MCA</h3>
                        <h4 className="vertical-timeline-element-subtitle">Future University, Bareilly Uttar Pradesh</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'blank' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2020 - 2023"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={< MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">BCA</h3>
                        <h4 className="vertical-timeline-element-subtitle">MJPRU University, Bareilly Uttar Pradesh</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'blank' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2019 - 2020"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={< MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">11th & 12th</h3>
                        <h4 className="vertical-timeline-element-subtitle">ADARSH KRISHNA DEVI INTER COLLEGE, Bareilly Uttar Pradesh</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'blank' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2017 - 2018"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={< MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">9th & 10th</h3>
                        <h4 className="vertical-timeline-element-subtitle">Spring Dale High Secondary School, Bareilly Uttar Pradesh</h4>

                    </VerticalTimelineElement>


                </VerticalTimeline>
            </div>

        </>
    )
}

export default Educations
