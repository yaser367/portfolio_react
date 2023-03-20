import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi'
import { AppWrap, motionWrap } from "../../wrapper";
import { images } from "../../constants";

import './Testimonial.scss'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [{
    name:'sarah',
    company:'google',
    imgUrl:images.redex,
    feedback:'yaser is a awesome developer'
  },{
    name:'saheer',
    company:'microsoft',
    imgUrl:images.React,
    feedback:'yaser is a awesome developer'
  }]
  const test = testimonials[currentIndex]

  const handleClick = (index)=>{
    setCurrentIndex(index)
  }

  const brand = [{name:'linkedin',imgUrl:images.linkedin}]
  return (
    <>
    {testimonials.length &&(
      <>
      <div className='app__testimonial-item app__flex'>
        <img src={test.imgUrl} alt="testimonial" />
        <div className='app__testimonial-content'>
      <p className='p-text'>{test.feedback}</p>
      <div>
        <h4 className='bold-text'>{test.name}</h4>
        <h5 className='p-text'>{test.company}</h5>
      </div>
        </div>
      </div>
      <div className='app__testimonial-btns app__flex'>
      <div className='app__flex' onClick={()=>handleClick(currentIndex ===0 ? testimonials.length -1:  currentIndex -1)}>
        <HiChevronLeft/>
      </div>
      <div className='app__flex' onClick={()=>handleClick(currentIndex === testimonials.length -1 ? 0 :  currentIndex + 1)}>
        <HiChevronRight/>
      </div>
      </div>
      </>
    )}
    <div className='app__testimonial-brands app__flex'>
      {brand.map((brand)=>(
        <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5,type:'tween'}}
        key={brand}
        >
          <img src={brand.imgUrl} alt={brand.imgUrl} />
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrap(
  motionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);