import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300' >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='md:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-[#ea5141]'>About</p>
          </div>
        
        </div>  
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#8892b0]'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I am Neeraj, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>As a full stack developer, I possess a diverse and robust skill set that spans the entire spectrum of web development. 
            My expertise includes front-end technologies like HTML, CSS, and JavaScript, where I craft responsive and dynamic user interfaces.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About