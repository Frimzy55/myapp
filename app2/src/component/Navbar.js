import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import logo from '../assets/rom.png';
import cv from '../assets/joe_cv.pdf';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      {/* Internal CSS */}
      <style>{`
        .nav-item {
          position: relative;
          padding-bottom: 5px;
          display: inline-block;
          cursor: pointer;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: yellow;
          bottom: 0;
          left: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-in-out;
        }

        .nav-item:hover::after {
          transform: scaleX(1);
        }

        .social-link {
          display: flex;
          justify-center: center;
          align-items: center;
          cursor: pointer;
          text-decoration: none;
        }

        .social-link:hover {
          color: yellow;
          transition: 0.3s;
        }
      `}</style>

      <div className='fixed w-full h-[-800px] flex justify-between items-center px-4 bg-[#0a192f] text-yellow-50'>
        <div>
          <img src={logo} alt='logo' style={{ width: '150px' }} />
        </div>

        {/* Menu */}
        <div>
          <ul className='hidden md:flex'>
            <li className='nav-item'><Link to="home" smooth={true} duration={500}>HOME</Link></li>
            <li className='nav-item'><Link to="about" smooth={true} duration={500}>ABOUT</Link></li>
            <li className='nav-item'><Link to="skills" smooth={true} duration={500}>SKILLS</Link></li>
            <li className='nav-item'><Link to="work" smooth={true} duration={500}>WORK</Link></li>
            <li className='nav-item'><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>
          </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0e2249] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>

          {/* Social Links for Mobile */}
          <li className='py-6 text-4xl'>
            <a href='https://www.linkedin.com/in/yourprofile/' className='social-link'>
              <FaLinkedin size={30} className='mr-2' /> LinkedIn
            </a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='https://github.com/Frimzy55/' className='social-link'>
              <FaGithub size={30} className='mr-2' /> GitHub
            </a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='mailto:frimpongj190@gmail.com/' className='social-link'>
              <HiOutlineMail size={30} className='mr-2' /> Gmail
            </a>
          </li>
          <li className='py-6 text-4xl'>
            <a href={cv} target="_blank" className='social-link'>
              <BsPersonLinesFill size={30} className='mr-2' /> Resume
            </a>
          </li>
        </ul>

        {/* Social icons (Desktop) */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
              <a href='https://www.linkedin.com/in/yourprofile/' className='flex justify-between items-center w-full text-red-100'>
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-neutral-800'>
              <a href='https://github.com/Frimzy55/' className='flex justify-between items-center w-full text-red-100'>
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-400'>
              <a href='mailto:frimpongj190@gmail.com/' className='flex justify-between items-center w-full text-red-100'>
                Gmail <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
              <a href={cv} target="_blank" className='flex justify-between items-center w-full text-red-100'>
                Resume <BsPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
