import React from 'react'
import {BsInstagram,BsGithub} from 'react-icons/bs'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
          <a href="https://www.instagram.com/y_s__r____/" target="_blank" rel="noreferrer"> <div>
         <BsInstagram />
        </div></a>
        <a href="https://www.linkedin.com/in/muhammedyaser/" target="_blank" rel="noreferrer"> <div>
 <FaLinkedinIn />
        </div></a>
        <a href="https://github.com/yaser367" target="_blank" rel="noreferrer"> <div>
         <BsGithub />
        </div></a>
    </div>
  )
}

export default SocialMedia