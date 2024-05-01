import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub , FaCrown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { GiBubbles } from "react-icons/gi";
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className='flex justify-between items-center h-20 p-4'>
        <GiBubbles   className='text-6xl'/>
        <p className='text-black ml-4 font-semibold text-2xl mr-auto'>BLAZE <span className='border-solid border-2 border-black bg-black text-white'>POP</span></p>
        <ul className='flex gap-6 list-none font-bold text-2xl justify-center items-center text-black'>
          <div className='flex items-center gap-x-5 justify-center'>
            <Link href='/' className='hover:text-blue-400 border-none'>Home</Link>
            <Link href='/Category' className='hover:text-blue-400 border-none'>Page</Link>
            <Link href='/about' className='hover:text-blue-400 border-none'>About</Link>
          </div>
              <div className='flex p-9 gap-5'>
                <Link href='https://www.instagram.com/'className='rounded-full border-2 border-black text-2xl p-2 hover:bg-blue-400'>
                <FaInstagram />
                </Link>

                <Link href=' https://twitter.com/home' className='rounded-full border-2 border-black text-2xl p-2 hover:bg-pink-400'>
                <FaXTwitter />
                </Link>

                <Link href='https://www.linkedin.com/login' className='rounded-full border-2 border-black text-2xl p-2 hover:bg-yellow-400'>
                <FaLinkedin />
                </Link>

                <Link href='https://github.com/' className='rounded-full border-2 border-black text-2xl p-2 hover:bg-red-600'>
                <FaGithub />
                </Link>

                <Link href='' className='flex items-center gap-2 text-white hover:bg-blue-400 bg-black'>
                <span>Subscribe</span>
                <FaCrown />
                
                </Link>
              </div>
        </ul>
    </nav>

  )
}