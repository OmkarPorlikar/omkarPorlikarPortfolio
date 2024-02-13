
import './Navbar.css';
import {
  RiMenu3Fill,
  RiContactsBook2Fill,
  RiFolderInfoFill,
} from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { FaHome, FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Slider from 'react-slide-out';
// import 'react-slide-out/dist/index.css';
import 'react-slide-out/lib/index.css';
import React, { useState, useEffect } from "react";


function Navbar() {

  const [isSlideOutOpen, setIsSlideOutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [flag, setFlag] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#FF651C",
    };
  };
  const navLinks = [
    { id:1, title: "Home", link: "/", icon: <FaHome /> },
    { id:2, title: "About", link: "/about", icon: <RiFolderInfoFill /> },
    { id:3 , title: "Project", link: "/project", icon: <MdWork /> },
    { id:4 ,title: "Contact", link: "/contact", icon: <RiContactsBook2Fill /> },
  ];

  const toggleSlideOut = () => {
    setIsSlideOutOpen(!isSlideOutOpen);
  };

  useEffect(() => {

    const handleScroll = () => {
      const home = document.getElementsByClassName('hero-container');
      const about = document.getElementsByClassName('ed-timeline');
      const contact = document.getElementsByClassName('s-wrapper');
      const services = document.getElementsByClassName('c-wrapper');
      
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      console.log(home, "home")
      
   

      if (scrollTop >= home.offsetTop && scrollTop < about.offsetTop) {
        setActiveSection('hero-container');
      } else if (scrollTop >= about.offsetTop && scrollTop < services.offsetTop) {
        setActiveSection('ed-timeline');
      } else if (scrollTop >= services.offsetTop && scrollTop < contact.offsetTop) {
        setActiveSection('s-wrapper');
      } else if (scrollTop >= contact.offsetTop) {
        setActiveSection('c-wrapper');
      }
    };

    window.addEventListener('scroll', handleScroll);

    console.log(isSlideOutOpen , "what??")

    const controlScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setFlag(true);
        } else {
          setFlag(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlScroll);
      return () => {
        window.removeEventListener('scroll', controlScroll);
        window.removeEventListener('scroll', handleScroll);

      };
    }
  }, [lastScrollY]);

  return (
    <div className={`nav-container  flexCenter ${flag && "hidden"}`} style={{ flexWrap: 'nowrap' }}>
<a href="/">   <span> Omkar Porlikar</span> </a>
      <ul className='h-menu-large flexCenter'>
        {navLinks.map((navItem) => (
          <li className="mx-4" key={navItem.id}>
            <a href={navItem.link}>
              {navItem.title}
            </a>
          </li>
        ))}
        <li><button className='Button flexCenter' style={{ gap: '8px' }}> <span style={{ fontSize: '14px' }}>RESUME</span> <FaDownload />  </button></li>
      </ul>


  {/* responsive navbr */}
{/*       <div className="h-menu-small flexColStart show">
        <button
          style={{ color: 'white', border: 'none', backgroundColor: 'transparent', fontSize: '1.1rem' }}
          onClick={toggleSlideOut}
        >
          <RiMenu3Fill />
        </button>

        <Slider
          isOpen={isSlideOutOpen}
          position="right"
          onClose={toggleSlideOut}
          style={{ backgroundColor: "#212121" , height:'110vh' }}
          className='flexColCenter'
          foldMode isFolded foldWidth="250px"
>
          <button onClick={toggleSlideOut}> <GiCrossMark /> </button>

          <ul className='h-menu flexColCenter'>
            {navLinks.map((navItem) => (
              <a className="flexCenter list-items" 
              href={navItem.link}
              key={navItem.id}
              style={{activeLink}}
              >
               <span> {navItem.icon} 
               </span>
               
                <span>
                  {navItem.title}
                </span>

              </a>
            ))}
            <li><button className='Button flexCenter' style={{ gap: '8px' , width:'100%' , margin:'0px 23px'} }> <span style={{ fontSize: '14px' }}>RESUME</span> <FaDownload />  </button></li>
          </ul>
        </Slider>
      </div> */}
    </div>
  );
}

export  {Navbar};

