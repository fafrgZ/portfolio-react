import React from 'react'
import logo from "../assets/raviKumarLogo.webp"
import {FaLinkedin,
        FaGithub,
        FaInstagram,
        FaTwitter,
} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-8'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label="Home">
          <img src={logo} className='mx-2' width={50} height={33} alt='Logo'/>
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/farid-fragozo-sturba-489b45248/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="LinkedIn">
           <FaLinkedin />
        </a>

        <a href="https://github.com/fafrgZ?tab=repositories"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Github">
           <FaGithub />
        </a>

        <a href="https://www.instagram.com/faridfragozo/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Instagram">
           <FaInstagram />
        </a>

        <a href="https://x.com/faridfragozo_16"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Twitter">
           <FaTwitter />
        </a>
      </div>
    </nav>
  )
}

export default Navbar