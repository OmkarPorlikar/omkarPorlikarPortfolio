// //  TechStack.js
// import React from 'react';
// // import Icon from '../../Utils/Icon';
// import './TechStack.css'
// import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase , FaGit } from 'react-icons/fa';
// import { SiPrisma, SiMongodb, SiExpress , SiGit } from 'react-icons/si';
// import { motion } from 'framer-motion';

// const icons = [
//   { title: 'HTML', icon: <FaHtml5 style={{color:'orange'}} /> },
//   { title: 'CSS', icon: <FaCss3  style={{color:'skyblue'}} /> },
//   { title: 'JavaScript', icon: <FaJs style={{color:'yellow'}} />  },
//   { title: 'React', icon: <FaReact  style={{color:'cyan'}} /> },
//   { title: 'Node.js', icon: <FaNodeJs style={{color:'green'}} /> },
//   { title: 'Express', icon: <SiExpress  /> }, 
//   { title: 'Prisma Schema', icon: <SiPrisma  style={{color:'cyan'}} /> },
//   { title: 'MongoDB', icon: <SiMongodb style={{color:'green'}} /> },
//   { title: 'Git', icon: <SiGit style={{color:'white'}} /> },

// ];

// // const TechStack = () => {
// //   return (
// //     <div className="tech-stack flexCenter innerWidth">
// //       {icons.map((tech, index) => (
// // <div className='icon flexCenter' title={tech?.title} > 
// // <span> {tech?.icon} </span>
// // <span>  {tech?.title} </span>
// //   </div>

// // ))}
// //     </div>
// //   );
// // };

// // export default TechStack;



// const containerVariants = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1
//   }
// };

// const TechStack = () => {
//   return (
//     <motion.div variants={containerVariants} initial="hidden" animate="visible" className="tech-stack flexCenter innerWidth">
//       {icons.map((tech, index) => (
//         <motion.div key={index} variants={itemVariants} className='icon flexCenter' title={tech?.title}>
//           <span>{tech?.icon}</span>
//           <span>{tech?.title}</span>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default TechStack;


import React, { useEffect  , useState} from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase , FaGit } from 'react-icons/fa';
import { SiPrisma, SiMongodb, SiExpress , SiGit } from 'react-icons/si';
import './TechStack.css'
import BotomLine from '../BottomLine/BottomLine';
import { headingAnimation , sectionBodyAnimation } from '../../hooks/useAnimation';
const icons = [
  { title: 'HTML', icon: <FaHtml5 style={{color:'orange'}} /> },
  { title: 'CSS', icon: <FaCss3  style={{color:'skyblue'}} /> },
  { title: 'JavaScript', icon: <FaJs style={{color:'yellow'}} />  },
  { title: 'React', icon: <FaReact  style={{color:'cyan'}} /> },
  { title: 'Node.js', icon: <FaNodeJs style={{color:'green'}} /> },
  { title: 'Express', icon: <SiExpress  /> }, 
  { title: 'Prisma Schema', icon: <SiPrisma  style={{color:'cyan'}} /> },
  { title: 'MongoDB', icon: <SiMongodb style={{color:'green'}} /> },
  { title: 'Git', icon: <SiGit style={{color:'white'}} /> },
];

const TechStack = () => {
  const animation = useAnimation();
  const [viewDiv , setViewDiv] = useState(false);
  const [ref , inView] = useInView({threshold:0.3 , triggerOnce:true});
  const controls = useAnimation();


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(()=>{
    if(inView){
      setViewDiv(true)
      controls.start("visible");
    }
    else{
      setViewDiv(false)
    }
    
      },[inView , animation])
    
  return (

<section className='techStack-wrapper flexColCenter'>  

< motion.div className='flexColCenter'
  initial='hidden'
  animate={viewDiv && 'visible'}
variants={headingAnimation}  
ref={ref}
  > 
<h1 className='primaryText'> Technical <span className='orangeText'> Skills</span> </h1>
<BotomLine/>
     </motion.div>


    <div className="tech-stack flexCenter innerWidth" >
      {icons.map((tech, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ delay: index * 0.2 }}
          className='icon flexCenter'
          title={tech?.title}
        >
          <span>{tech?.icon}</span>
          <span>{tech?.title}</span>
        </motion.div>
      ))}
    </div>
    </section>
  );
};

export default TechStack;
