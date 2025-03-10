import React, {useState} from 'react';
import logo from '../assets/logo.png';
import{ FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import{HiOutlineMail} from 'react-icons/hi';
import{BsFillPersonLinesFill} from 'react-icons/bs';
import{Link} from 'react-scroll'

const NavBar = () => {
    const [nav, SetNav] = useState(false)
    const handleClick = () => SetNav(!nav)

  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt='Logo Image'  style={{width:'55px'}}/>
        </div>

        {/*menu */}
        <ul className='hidden md:flex '>
            <li><Link to='home' smooth={true} duration={300} >Home</Link></li>
            <li><Link to='about' smooth={true} duration={300}>About</Link> </li>
            <li><Link to='skills' smooth={true} duration={300}>Skills</Link></li>
            <li><Link to='work' smooth={true} duration={300}>Work</Link></li>
            <li><Link to='contact' smooth={true} duration={300}>Contact</Link></li>
        </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className=' cursor-pointer md:hidden z-10'>
           {!nav ? <FaBars /> : <FaTimes/>}      
         </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={300} >Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={300} >About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={300} >Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={300} >Work</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={300} >Contact</Link></li>
        </ul>
        {/* Social icons */}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300 '
                    href="https://www.linkedin.com/in/neerajnigam89/"
                    target="_blank" 
                    rel="noopener noreferrer">
                    Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ea5141]'>
                    <a className='flex justify-between items-center w-full text-gray-300 '
                    href="https://github.com/neerajnigam0809"
                    target="_blank" 
                    rel="noopener noreferrer" >
                    Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-900'>
                    <a className='flex justify-between items-center w-full text-gray-300 '
                    href="mailto:neerajnigam0809@gmail.com"
                    target="_blank" 
                    rel="noopener noreferrer">
                    Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300 '
                    href="https://drive.google.com/file/d/14EBUzKOdXiMeqOODztduu3--6YtI28Y2/view?usp=sharing"
                    target="_blank" 
                    rel="noopener noreferrer">
                    Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default NavBar
