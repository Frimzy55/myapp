import React from 'react'

import h from '../assets/database.jpeg'
import c from '../assets/com.jpeg'
import f from '../assets/Figma.png'
import g from '../assets/git.png'
import j from '../assets/Js.png'
import m from '../assets/jav.png'
import p from '../assets/Python.png'
import r from '../assets/React.png'

const Skills = () => {
  return (
    <div Name='skills' className=' w-full h-50 bg-[#0a192f] text-gray-300' >
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'> //These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap text-center py-8'> 
          <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={h} alt=''/>
            <p className='my-4'>DATABASE</p>
          </div>
          <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={c} alt=''/>
            <p className='my-4'>COMPUTER VISION</p>
          </div>
          <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={f} alt=''/>
            <p className='my-4'>FIGMA</p>
          </div>
          <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={g} alt=''/>
            <p className='my-4'>GIT</p>
          </div>
          <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={j} alt=''/>
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={m} alt=''/>
            <p className='my-4'>JAVA</p>
          </div>
          <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={p} alt=''/>
            <p className='my-4'>PYTHON</p>
          </div>
          <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={r} alt=''/>
            <p className='my-4'>REACT</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
