import React from 'react'
import './Hero.css'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react';
function Hero() {
    
       


  return (
<section className='hero-container flexCenter innerWidth paddings'   >
    <div className="text-container">   
<span>Hello, I'm</span>
<span>Omkar Porlikar</span>
<div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
            cursor={true}
            sequence={[
              "A Mern-stack Developer",
              2000,
              "A Full-stack Developer",
              2000,
              "A Front-end Developer",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
<p>As a MERN stack developer, I am committed to building high-quality web applications that meet the 
needs of my clients. With years of experience in full-stack web development, I specialize in using 
React.js, Next js, Typescript, MongoDB, Express.js, and Node.js to create scalable and robust web applications.
</p>
<div className="btn-container">
    <button className='Button'>My Resume </button>
    <button className='Button'>  <a href="#project-wrapper"> Project</a>  </button>
</div>
</div>

<div className="hero-image-container">
  <div className='hero-blur'></div>
    <img src="./a boy.png" alt="" />
</div>
</section>
    )
}

export default Hero