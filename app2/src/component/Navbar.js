import React, { useState } from 'react'

import { FaBars, FaReact, FaTimes ,FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/rom.png'
import { HiOutlineMail } from 'react-icons/hi';
import{Link} from 'react-scroll'




function Navbar() {
  const[nav,setnav]=useState(false)
  const Handleclick=()=>setnav(!nav)
  return (
    <div className='fixed w-full h-[-800px] flex justify-between items-center px-4 bg-[#0a192f] text-yellow-50'>
      <div>
        
        <img src={logo} alt='logo image' style={{width:'150px'}}/>
        
      </div>
      {/*menu*/}
      <div>
        < ul className='hidden md:flex'> 
          <li><Link  to="home" smooth={true}  duration={500}>
          HOME
        </Link></li>
          <li><Link to="about" smooth={true}  duration={500}>ABOUT</Link></li>
          <li><Link to="skills" smooth={true}  duration={500}>SKILLS</Link></li>
          <li><Link to="Work" smooth={true}  duration={500}>WORK</Link></li>
          <li><Link to="contact" smooth={true}  duration={500}>CONTACT</Link></li>
          
        </ul>
        
      </div>
      {/*humbrg*/}
      <div onClick={Handleclick} className=' md:hidden z-10'>
      {!nav? <FaBars  />: <FaTimes/>}
      </div>
      {/*mobile menu*/}
      < ul className={!nav? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#090d15] flex flex-col justify-center items-center'}> 
          <li className=' py-6 text-4xl'><Link onClick={Handleclick} to="home" smooth={true}  duration={500}>Home</Link></li>
          <li className=' py-6 text-4xl'><Link onClick={Handleclick} to="about" smooth={true}  duration={500}>About</Link></li>
          <li className=' py-6 text-4xl'><Link onClick={Handleclick} to="skills" smooth={true}  duration={500}>Skill</Link></li>
          <li className=' py-6 text-4xl'><Link onClick={Handleclick} to="work" smooth={true}  duration={500}>Work</Link></li>
          <li className=' py-6 text-4xl'><Link onClick={Handleclick} to="contact" smooth={true}  duration={500}>Contact</Link></li>
          
        </ul>
      <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-blue-500'>
            <a className=' flex justify-between items-center w-full text-red-100' href='/'>
              Linkedin <FaLinkedin size={30}/>

            </a>
          </li>
          <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300  bg-neutral-800'>
            <a className=' flex justify-between items-center w-full text-red-100' href='/'>
              Github <FaGithub size={30}/>

            </a>
          </li>
          <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-green-400'>
            <a className=' flex justify-between items-center w-full text-red-100' href='/'>
              Gmail <HiOutlineMail size={30}/>

            </a>
          </li>
          <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-blue-900'>
            <a className=' flex justify-between items-center w-full text-red-100' href='/'>
              Resume <BsPersonLinesFill size={30}/>

            </a>
          </li>
        </ul>

      </div>
  
    </div>
  )
}

export default Navbar
