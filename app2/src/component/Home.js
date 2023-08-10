import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi'


function Home() {
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
        <p className=' text-pink-600'>Hi,my name is </p>
        <h1 className=' text-4xl sm:text-7xl font-bold text-white'>Joseph Frimpong</h1>
        <h2 className=' text-4xl m:text-7xl font-bold text-blue-200'>I'm a Computer Science Student.</h2>
        <p className=' text-amber-50 py-4 max-w-[700px]'>I'm a software developer specializing in building both frontend
          and backend and designing exeptional digital experience.Curently
          I'm focused on building responsive fullstack web appications
          <div>
            <button className=' text-white  group border-2 px-6 py-3 my-2 flex items-center  hover:bg-pink-600'>View work
            <span className='group-hover:rotate-90 duration-300 '>
            <HiArrowNarrowRight className='ml-3'/>

            </span>
            </button>
          </div>

        </p>

      </div>

    </div>
  )
}

export default Home 