import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub , FaCrown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

export default function SocialIcons() {
  return (
    <div className='flex p-9 gap-5'>
                <Link href='https://www.instagram.com/' className='rounded-full border-2 border-black text-2xl p-2 hover:bg-blue-400'>
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

                <Link href='' className='flex items-center gap-2 hover:bg-blue-900 bg-slate-900'>
                <span>Subscribe</span>
                <FaCrown />
                
                </Link>
              </div>
  )
}