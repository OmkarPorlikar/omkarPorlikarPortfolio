
import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import './Home.css';
import TechStack from '../TechStack/TechStack';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 500, y: 1000 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e ,"Event")
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  },);

  return (
    <div className='h-container innerWidth paddings'>
      {/* <div className="background-hover">   </div> */}
      <div
          className="blur-circle"
          style={{ left: mousePosition.x-70 , top: mousePosition.y-90 }}
        ></div>
      <div className="home"> 
      <Hero />
      <Services />
      <Project />
      <TechStack/>
      <Education />
      <Contact />
      </div>
   
    </div>
  );
}

export default Home;
