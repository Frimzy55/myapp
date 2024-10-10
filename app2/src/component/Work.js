import React from 'react';
import w from '../assets/atten.png'; // Ensure this path is correct
import wx from '../assets/cl.jpeg';   // Ensure this path is correct
// Import other project images as needed
import project1Image from '../assets/project1.jpeg'; // Add your project image paths


const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project Card 1 */}
          <div
            style={{ backgroundImage: `url(${w})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Project Title 1
              </span>
              <div className='pt-8 text-center'>
                <a href='https://yourproject1demo.com'> {/* Live Demo Link */}
                  <button className='text-white border-2 border-white px-4 py-2'>Demo</button>
                </a>
                <a href='https://github.com/yourusername/project1'> {/* Code Link */}
                  <button className='text-white border-2 border-white px-4 py-2'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div
            style={{ backgroundImage: `url(${wx})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Project Title 2
              </span>
              <div className='pt-8 text-center'>
                <a href='https://yourproject2demo.com'>
                  <button className='text-white border-2 border-white px-4 py-2'>Demo</button>
                </a>
                <a href='https://github.com/yourusername/project2'>
                  <button className='text-white border-2 border-white px-4 py-2'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Add more project cards as needed */}
          

          
        </div>
      </div>
    </div>
  );
};

export default Work;
