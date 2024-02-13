import React, { useState , useEffect} from 'react';
import './Service.css';
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import BotomLine from '../BottomLine/BottomLine';
import {useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { headingAnimation , sectionBodyAnimation } from '../../hooks/useAnimation';
import {motion} from "framer-motion";

function Services() {

  const animation = useAnimation();
  const [ref , inView] = useInView({threshold:0.3 , triggerOnce:true});
  const [viewDiv , setViewDiv] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
    // services.js

const services = [
    {
      id: 1,
      logo:  <DiAtom />, // Replace with the actual URL
      title: 'Front End Development',
      desc: 'As a Front-end developer, I would love to develop any front-end application using React and its libraries.',
    },
    {
      id: 2,
      logo:  <FiServer />, // Replace with the actual URL
      title: 'MERN Development',
      desc: 'I am very familiar with NodeJS, Express JS, and MongoDB/Prisma Schema . So I can build a full-stack application with MERN.',
    },
    {
      id: 3,
      logo: <BiPalette />, // Replace with the actual URL
      title: 'Web Design',
      desc: 'I also provide Fully Responsive Static Website Design with  ReactJs & Vanila css',
    },
  ];
  
  useEffect(()=>{
if(inView){
  setViewDiv(true)
}
else{
  setViewDiv(false)
}

  },[inView , animation])

  return (
<section className='s-wrapper' onMouseMove={handleMouseMove}>

  < motion.div className='flexColCenter'
  initial='hidden'
  animate={viewDiv && 'visible'}
variants={headingAnimation}  
  > 
  <h3 className='secondaryText'>What i Provide </h3>
<h1 className='primaryText'> My <span className='orangeText'> Services</span> </h1>
<BotomLine/>
     </motion.div>

     <motion.div className='flexCenter'
     ref={ref}
     initial='hidden'
     animate={viewDiv && 'visible'}
     variants={sectionBodyAnimation}
     > 
{
    services.map((services,i)=>(
        <div className="service-card flexColCenter" key={i}>
            { services.logo}
            <span> {services.title}</span>
            <span> {services.desc} </span>
        </div>
    ))
}
</motion.div>
</section>
    )
}

export default Services