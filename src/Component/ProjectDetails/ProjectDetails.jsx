import React, { useEffect } from 'react'
import './ProjectDetails.css'
import { Item } from '../../Utils/Item.js'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaLink, FaCode } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ProjectDetails() {

  const [Items , setItem] = useState()
  const param = useParams();



  useEffect(()=>{
const val = Item.find( (val)=> val.id== param.id )
setItem(val)
  }, [param.id])


  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='pd-wrapper '>
<div className="pd-title">
{/* <img src="./ResdImg/img5.png" alt="Image" /> */}
   {Items?.title}
</div>

 <Slider {...settings}>
        {Items?.img.map((img, index) => (
          <div key={index} className="image-container" >
          <div 
            className="pd-image"
            style={{ backgroundColor: "#313131" }}
          >
          <img src={`.${img}`}  />
          </div>
        </div>
        ))}
      </Slider>
  
  
  <div className="pd-desc">

    <span className='pd-heading'> Description :</span> {Items?.desc}
  </div>

  <div className="pd-features">
    <span className='pd-heading'> Features :</span>
   <div className="pd-features-container">
   {Items?. features.map((val)=>(
      <ul>
        <li>{val}</li>
      </ul>
    ))}
   </div>
  </div>

  <div className="pd-features">
    <span className='pd-heading'>  Technologies :</span>
   <div className="pd-features-container">
   {Items?.technologies.map((val)=>(
      <ul>
        <li>{val}</li>
      </ul>
    ))}
   </div>
  </div>


  <div className="flexStart pd-btn">
        <a href={Items?.liveLink} className="mr-4" target="blank">
<button className='Button btn-first flexCenter'> 
            <span>Visit Now</span>
            <span>
              <FaLink />
            </span>
            </button>
        </a>
        <a href={Items?.codeLink} target="blank">
          <button className='Button btn-second flexCenter'>    
            <span>Source Code</span>
            <span>
              <FaCode />
            </span>
            </button>
        </a>
      </div>
          </div>
  )
}

export default ProjectDetails
