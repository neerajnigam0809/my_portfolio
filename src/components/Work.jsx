import React from 'react'
import NOTE from '../assets/Notes-app.jpeg'
import CREDIT from '../assets/credit-card-generator.jpeg'
import PASSWORD from '../assets/password-generator.jpeg'
import STONE from '../assets/stone-paper-scissor.jpeg'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-[#ccd6f6]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ea5141]'>Work</p>
                <p className='py-6 text-[#8892b0]'>// Check out some of my recent Work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                style={{ backgroundImage: `url(${NOTE})` }}>
                    
                    {/**Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                        Notes App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://notes-app-neeraj.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/neerajnigam0809/notes_app" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                style={{ backgroundImage: `url(${CREDIT})` }}>
                    
                    {/**Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                        Credit Card Generator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://64b692f8587c6000bba7f87d--eclectic-mooncake-a4cd58.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/neerajnigam0809/credit_card_generator" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                style={{ backgroundImage: `url(${PASSWORD})` }}>
                    
                    {/**Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                        Password Generator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://neerajnigam0809.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/neerajnigam0809/Password-Generator" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                style={{ backgroundImage: `url(${STONE})` }}>
                    
                    {/**Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider '>
                        Stone, Paper, Scissor Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://neerajnigam0809.github.io/Stone-Paper-Scissor-Game/" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/neerajnigam0809/Stone-Paper-Scissor-Game" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 bg-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work