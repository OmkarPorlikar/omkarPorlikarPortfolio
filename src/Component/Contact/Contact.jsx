import React from 'react'
import './Contact.css'
import BottomLine from '../BottomLine/BottomLine';
import {motion} from 'framer-motion'
import { useEffect , useState } from 'react';
import { headingAnimation, contactAnimation , contactDetails } from "../../hooks/useAnimation";
import { useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { MdEmail, MdSend } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import toast from 'react-toastify'

import {
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";





function Contact() {
  const [data  , setData] = useState({
    name:null,
    email:null,
    subject:null,
    desc:null
  })



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


const handleForm = (e) =>
{
e.preventDefault();
toast.success(' Your message has been Sent !')
setData((prev)=>(
  {
    name:'',
    email:'',
    subject:'',
    desc:''
  }
))
}

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

<form className='flexColCenter contact-form' onSubmit={handleForm} >

<span className='form-title'>Contact Me</span>
<div className='name-email flexCenter'>
    <input type="text" className='Input' placeholder='name' value={data.name}  onChange={(e)=>{setData((prev)=>({...prev , name:e.target.value})) }} required/>
    <input type='email' className='Input' placeholder='email' value={data.email} onChange={(e)=>{ setData((prev)=>({...prev , email:e.target.value}))}} required />
</div>
 <input className='Input' type="text" placeholder='subject' value={data.subject} onChange={(e)=>{setData((prev)=>({...prev , subject:e.target.value}))}} required/> 

<textarea  className='Input'  placeholder='add description...' name="" id="" cols="30" rows="5"
value={data.desc}

onChange={(e)=>{setData((prev)=>({...prev ,desc:e.target.value })) }}
required
></textarea> 

<div  className='btn-form-container'>
  <button className='Button btn-contact-form flexCenter'  type='submit'>    
  <span> Send </span>
  <span><MdSend/> </span>
   </button>
 
</div>
</form>

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
