import React from 'react'
import styled, { keyframes } from 'styled-components';


const rotateText = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-15deg); }
  100% { transform: rotate(0deg); }
`;

const RotatingText = styled.p`
  animation: ${rotateText} 5s infinite; /* Infinite looping rotation animation */
`;

const wordAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Create a styled component for each animated word
const AnimatedWord = styled.span`
  display: inline-block;
  animation: ${wordAnimation} 0.5s ease forwards;
  opacity: 0; /* Start hidden */
  margin-right: 0.5rem; /* Add space between words */

  /* Delay the animation based on the index of the word */
  ${({ index }) => `animation-delay: ${index * 0.9}s;`}
`;

const AnimatedParagraph = ({ text }) => {
  return (
    <div className='text-amber-50 py-4 max-w-[700px]'>
      {text.split(' ').map((word, index) => (
        <AnimatedWord key={index} index={index}>
          {word}
        </AnimatedWord>
      ))}
    </div>
  );
};

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className=' flex flex-col justify-center items-center w-full h-full'>  
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className=' sm:text-right pb-8 pl-4'>
              <p className=' text-4xl font-bold inline border-b-4 border-pink-600'>
                 About
              </p>
            </div>
            <div></div>
          </div>
          <div className=' max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className=' sm:text-right text-4xl font-bold'>
              
                <AnimatedParagraph text="Hi,I'm Joseph nice,to meet you Please take a look around."/>
                
            </div>
            <div>
              <p> <RotatingText className='text-amber-50 py-4 max-w-[700px]'>

              I am passionate about building excellent software that improves
                the lives of those around me.I specialize in creating software
                for clients ranging from individuals and small business all the 
                way to large enterprise corporations.What would you do if you 
                had a software expert available at your fingertips.
                </RotatingText>

              </p>

            </div>
          </div>
        </div>
    </div>

  )

    
}

export default About