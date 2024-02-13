
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {  FaBriefcase, FaSchool, FaStar } from 'react-icons/fa';
import './Education.css'
import React, { useState , useEffect} from 'react';

import BotomLine from '../BottomLine/BottomLine';
import {useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { headingAnimation} from '../../hooks/useAnimation';
import {motion} from "framer-motion";
import { useLocation } from 'react-router-dom';
import TechStack from '../TechStack/TechStack'


function Education() {
  const location = useLocation();

  const [flag , setFlag] = useState(location.pathname)
  const animation = useAnimation();
  const [ref , inView] = useInView({threshold:0.3 , triggerOnce:true});
  const [viewDiv , setViewDiv] = useState(false);
    useEffect(()=>{
      if(inView){
        setViewDiv(true)
      }
      else{
        setViewDiv(false)
      }
      
        },[inView , animation])

    const innerWidth = window.innerWidth;
  return (
    <section className="ed-timeline innerWidth paddings " ref={ref}
    >  

< motion.div className='flexColCenter'
  initial='hidden'
  animate={viewDiv && 'visible'}
variants={headingAnimation}  
style={{gap:'1rem', margin:'4rem 0px'}}
  > 
<h1 className='primaryText'>  Education <span className='orangeText'>  & Experience </span> </h1>
<BotomLine/>
     </motion.div>

<div className="ed-timeline-container" >  

<VerticalTimeline  className='verticle-compo' >
    {/* one */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#414040', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2024 - present"
    iconStyle={{ background: 'rgb(255, 101, 28)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">  Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Completed Full stack Developer course from Odin School</h4>
    
  </VerticalTimelineElement>

  {/* two */}

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#414040', color: '#fff' }}
    date="2019 - 2023"
    iconStyle={{ background: 'rgb(255, 101, 28)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title"> Information Technology
JD College of Engineering, Nagpur </h3>
   
<ul style={{marginTop:'1rem'}}>
    <li>Completed IT Engineering course from  JD College of Engineering, Nagpur</li>
    <li>Worked on web application development using HTML, CSS, and JavaScript, designing a database system using SQL</li>
</ul>

<p> CGPA:- 7.19  </p>

  </VerticalTimelineElement>

  {/* three */}

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2018 - 2019"
    iconStyle={{ background: 'rgb(255, 101, 28)', color: '#fff' }}
    contentStyle={{ background: '#414040', color: '#fff' }}

    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">HSC</h3>
    <h4 className="vertical-timeline-element-subtitle">Waninganga Jr College ,Pauni, dist.Bhandara </h4>
    <p>
    Percentage:- 69.69%
    </p>
  </VerticalTimelineElement>
  {/* four */}

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2016 - 2017"
    iconStyle={{ background: 'rgb(255, 101, 28)', color: '#fff' }}
    contentStyle={{ background: '#414040', color: '#fff' }}

    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">SSC</h3>
    <h4 className="vertical-timeline-element-subtitle">Waninganga Vidyalaya ,Pauni, dist.Bhandara </h4>
    <p>
    Percentage:- 80.80%
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ backgroundColor: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaStar />}
  />
</VerticalTimeline>
</div>

{ !(flag === '/project') ? 
<TechStack/>
 : null
}
</section>
 
 
 )
}

export default Education