import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f]  text-[#ccd6f6] flex justify-center items-center p-4'>
        <form method="POST"action="https://getform.io/f/amdpjzkb" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-[#ea5141] '>Contact</p>
            <p className='text-[#8892b0] py-6'>// Submit the form below or shoot me an email - neerajnigam0809@gmail.com</p>
          </div>
          <input className='p-2 bg-[#8892b0] rounded-md placeholder-[#4a4586]' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#8892b0] rounded-md placeholder-[#4a4586]'type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#8892b0] p-2 rounded-md placeholder-[#4a4586]' type="text" placeholder='Message ' name='message' rows="10"></textarea>
          <button className='text-white border-2 hover:bg-[#ea5141] hover:border-[#ea5141] px-4 py-3 my-8 mx-auto flex items-center'>Lets's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact