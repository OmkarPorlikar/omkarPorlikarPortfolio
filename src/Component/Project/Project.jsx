import React from 'react'
import './Project.css'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useEffect , useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import BottomLine from '../BottomLine/BottomLine';
import { useAnimation, motion} from 'framer-motion';
import { headingAnimation, sectionBodyAnimation } from '../../hooks/useAnimation';
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Project() {
  const animation = useAnimation();
  const [ref, inView] = useInView();
  const [viewDiv , setViewDiv] = useState(false);
  const location = useLocation();

  const [flag , setFlag] = useState(location.pathname)
const projects =[
    {
        id:1,
        title:"Urban Hevan",
        image:'./Urban_Hevan.png',
        desc: " An innovative platform designed to revolutionize the way you navigate the world of residences. This digital haven empowers you to effortlessly discover, book, and manage your dream accommodations. Seamlessly upload, edit, and curate your property listings"
     } ,
    {
        id:2,
        title:"Wanderer Worlds",
        image:'./Wanderer_Worlds.png',
        desc:" A captivating platform that invites users to pen their thoughts and stories effortlessly. Unleash your creativity through seamless blog creation, editing, and deletion.   Dive into a realm where users can personalize profiles, manage account details, and explore a search feature that elevates the blogosphere. Wander's World—weaving tales, one post at a time."
    },
    {
        id:3,
        title : "FitClub",
        image:'./FitClub.png',
        desc:"powered by ReactJS, boasts a modern design and responsive interface. With an intuitive layout, it offers tailored fitness programs and a supportive community for users. Leveraging cutting-edge technology, FitClub delivers a seamless experience, guiding fitness enthusiasts on their wellness journey with precision and style."
    }
   
]

useEffect(()=>{
  if(inView){
    setViewDiv(true)
  }
  else{
    setViewDiv(false)
  }
    },[inView , animation])


    return (
    <div className=' innerWidth  ' id='project-wrapper'  >

<motion.div className='flexColCenter headx'
initial='hidden'
animate={viewDiv && 'visible'}
variants={headingAnimation}
>

<h3 className='secondaryText'>Some of my recent Projects </h3>
 <h1 className='primaryText'>  Featured  <span className='orangeText'> Projects</span>  </h1>
<BottomLine/>
</motion.div>

        <motion.div className='flexCenter  project-container'
        ref={ref}
        initial='hidden'
        animate={viewDiv && 'visible'}
        variants={sectionBodyAnimation}
        > 
{

projects.map((val)=>(
    <div key={val.id} className='project-card flexColCenter'> 
        <div style={{width:'100%'}}>
            <img src={val.image} alt="" />
        </div>
<div className="pro-desc flexColCenter">
    <p> <span className='pro-desc-title'> {val.title} , </span>  
    <span>  {val.desc.slice(0,182)}...... &   </span> 
    <a href="#">Know More</a> </p>
</div>

<div className="logos flexCenter">
        <span className="gitHub">
<a href="#" target='blank'> <FaGithub/> </a>
        </span>
        <span>
            <a href="#" target='blank'> <FaLinkedin/> </a>
        </span>

    </div>

    <div className="overlay flexColCenter">
                    <h3 className="" style={{color:'white'}}>
                      {val.title}
                    </h3>
                   <a
                      href={`/projects/${val.id}`}
                      target={`/projects/${val.id}`}
                      className="mt-3 inline-block"
                    >
                      <button className="Button">
                        See Details
                      </button>
                    </a>
                  </div>
    </div>
))

}

</motion.div>

<div>
  { !(flag === '/project') ? 
<Link to='/project'>

<button className='Button btn-project flexCenter'> 
<span>See All</span>
<span> <BsArrowRight/> </span>
 </button>
 </Link> 
 : null
}
</div>
    </div>
  )
}

export default Project
