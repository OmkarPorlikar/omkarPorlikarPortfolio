import React from 'react'
import './Contact.css'
import BottomLine from '../BottomLine/BottomLine';
import {motion} from 'framer-motion'
import { useState } from 'react';
import { useEffect } from 'react';
import { headingAnimation, contactAnimation , contactDetails } from "../../hooks/useAnimation";
import { useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { MdEmail, MdSend } from "react-icons/md";

import {
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";



function Contact() {
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
const [viewDiv, setViewDiv] = useState(false);


useEffect(() => {

  if (inView) {

    setViewDiv(true);
  } else {
    setViewDiv(false);
  }

}, [inView, animation]);



  return (
    <div className=' innerWidth paddings c-wrapper'>
    <motion.div
    className='headx flexColCenter'
        initial="hidden"
        animate={ viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="secondaryText " style={{textAlign:'center'}}  >Feel Free To Contact Me</h3>
        <h1 className="primaryText">
          Get In <span className="orangeText
          ">Touch</span>
        </h1>
        <BottomLine />
      </motion.div>

      <div className='flexCenter c-container' 
      ref={ref}>
        {/* form container */}

   <motion.div
   initial={'hidden'}
   animate={viewDiv && 'visible'}
   variants={contactAnimation}
   className="contact-form-container"
   
   >    

<form className='flexColCenter contact-form' >

<span>Contact Me</span>
<div className='name-email flexCenter'>
    <input type="text" className='Input' placeholder='name' />
    <input type='email' className='Input' placeholder='email' />
</div>
 <input className='Input' type="text" placeholder='subject' /> 

<textarea  className='Input'  placeholder='add description...' name="" id="" cols="30" rows="5"></textarea> 

</form>
<div >
  <button className='Button btn-contact-form flexCenter'>    
  <span> Send </span>
  <span><MdSend/> </span>
   </button>
 
</div>
</motion.div>   

{/* contact details container  */}

< motion.div className="contact-details-container flexColCenter"
initial='hidden'
animate={viewDiv && 'visible'}
variants={contactDetails}
>
  <span className='contact-info'> Contact Info </span>

  <ul className=' contact-details flexColCenter  '>
<li> <span> <FaUserAlt/> </span>   <span>Omkar Porlikar</span> </li>
<li> <span> <FaPhoneAlt/> </span>  <span> +91 7666267904 </span>  </li>
<li> <span style={{color:'white'}} > <FaEnvelope/> </span>     <span> porlikarom676@gmail.com</span> </li>
<li> <span> <FaMapMarkerAlt/> </span>      <span> Nagpur , Maharashtra </span> </li>
  </ul>
</ motion.div>
    </div>

     </div>
  )
}

export default Contact
