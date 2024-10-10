import React from 'react';
import styled, { keyframes } from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

// Define the keyframes for color change animation
const colorChange = keyframes`
  0% { color: white; }
  5% { color: FAFOCA; }
  50% { color: pink; }
  5% { color: pink; }
  100% { color: white; }
`;

// Define keyframes for text rotation animation
const rotateText = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-15deg); }
  100% { transform: rotate(0deg); }
`;

// Create a styled component with the color change animation
const AnimatedH1 = styled.h1`
  animation: ${colorChange} 3s infinite; /* Infinite looping animation */
`;

// Create a styled component with the rotation animation
const RotatingText = styled.p`
  animation: ${rotateText} 5s infinite; /* Infinite looping rotation animation */
`;

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <AnimatedH1 className='text-4xl sm:text-7xl font-bold'>
          Joseph Frimpong
        </AnimatedH1>
        <h2 className='text-4xl sm:text-7xl font-bold text-blue-200'>I'm a Computer Science Student.</h2>
        
        {/* Apply the rotating text animation to this paragraph */}
        <RotatingText className='text-amber-50 py-4 max-w-[700px]'>
          I'm a software developer specializing in building both frontend
          and backend and designing exceptional digital experiences. Currently,
          I'm focused on building responsive full-stack web applications.
        </RotatingText>

        <div>
          <Link to="work" smooth={true} duration={500}> 
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600'>
              View work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
