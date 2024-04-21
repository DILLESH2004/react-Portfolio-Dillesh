import React from 'react'
import logo from '../NavBar/Logo1.png'
import {FaLinkedin} from "react-icons/fa" 
import {FaGithub} from "react-icons/fa" 
import {FaSquareXTwitter} from "react-icons/fa6" 
import {FaInstagram} from "react-icons/fa" 
import { FaEnvelope } from 'react-icons/fa'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} className='mx-2 w-20 logos' alt=''/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/bhagya-dillesh-99155b229/'><FaLinkedin/></a>
            <a  href='https://github.com/DILLESH2004'><FaGithub/></a>
            <a href='https://x.com/BhagyaDillesh_1?t=S24L1US8pygGR8yLihrIWw&s=08'><FaSquareXTwitter /></a>
            <a href='https://www.instagram.com/dillesh_bhagya/'><FaInstagram /> </a>
            <a href='https://drive.google.com/file/d/1AT5nVH4jZ8vCpAV93_qTJV8NfIw7KxTO/view?usp=drive_link'><FaEnvelope /> </a>
        </div>
    </nav>
  )
}

export default NavBar
