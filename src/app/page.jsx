import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { LuTriangleRight } from "react-icons/lu"
import { FaCrown } from "react-icons/fa";

export default function page() {
  return (
    <section>
      <div>
        <Link href='/enter'>
        <Image src='/entertainment.jpg' alt='an art' width='1500' height='400' className='w-[80%] ml-[140px] mt-24 h-[700px]' />
        <div className='absolute top-0 left-0 p-48 text-black'>
          <p className='h-7 w-15 bg-red-300 font-bold'>Entertainment</p>
        </div>
        <div className='absolute top-0 right-0 p-48  text-4xl'>
        <CiBookmark className='rounded-full border-2 border-white bg-blue-400'/>
        </div>
        <div className='absolute bottom-0 left-0 text-black -mb-6'>
          <p className='font-bold text-6xl ml-44 h-32 w-15 bg-red-300'>Exploring the vibrant world <br /> of arts and entertainment</p>
        </div>
        </Link>
      </div>
      <div className='flex mt-10 justify-center items-center gap-6'>
            <p className='border-2 border-red-300'>Sport</p>
            <p className='border-2 border-yellow-400'>Fashion</p>
            <p className='border-2 border-blue-400'>Technology</p>
            <p className='border-2 border-orange-500'>Entertainment</p>
            <p className='border-2 border-purple-700'>Education</p>
        </div>

    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-rows-2 gap-9 mt-10'>
          <div>
            <Link href='/education'>
            <Image src='/education.jpg' alt='fun' width='800' height='100' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>Indie Game Development- From Concept to Release</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[460px] left-5 box-border unicode-isolate bg-red-300">Education</div>
              <div className='flex gap-4'>
              <p>By Emily Davis</p>
              <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/sports1'>
            <Image src='/sports1.jpg' alt='fun' width='800' height='400' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>Strength Training for Endurance Athletes</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[430px] left-5 box-border unicode-isolate bg-blue-400">Sport</div>
              <div className='flex gap-4'>
                <p>By Michael Johnsons</p>
                <p>June 15,2023</p>
              </div>

            </div>
            </Link>
          </div>
          <div>
            <Link href='/travel2'>
            <Image src='/travel2.jpg' alt='fun' width='800' height='400' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>The Art of Game Design</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[440px] left-5 box-border unicode-isolate bg-red-300">Travel</div>
              <div className='flex gap-4'>
                <p>By Robert Johnson</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/technology'>
            <Image src='/technology.jpg' alt='fun' width='800' height='400' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>Inclusive Education- Meeting the Needs of <br /> Every Student</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[460px] left-5 box-border unicode-isolate bg-fuchsia-400">Technology</div>
              <div className='flex gap-4'>
                <p>By Jennifer Adam</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>

   
          <div>
            <Link href='/education2'>
            <Image src='/education2.jpg' alt='fun' width='800' height='100' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>Personalized Learning- The Future of Education</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[480px] left-5 box-border unicode-isolate bg-fuchsia-400">Education</div>
              <div className='flex gap-4'>
                <p>By Jennifer Adams</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/technology2'>
            <Image src='/technology2.jpg' alt='fun' width='800' height='400' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>The Future of Transportation Technology</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[480px] left-5 box-border unicode-isolate bg-yellow-400">Technology</div>
              <div className='flex gap-4 mt-6'>
                <p>By Alex Rodriguez</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/sports2'>
            <Image src='/sports2.jpg' alt='fun' width='800' height='400' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>The Science of Sports Performance</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[460px] left-5 box-border unicode-isolate bg-blue-400">Sport</div>
              <div className='flex gap-4'>
                <p>By John Smith</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/fashion3'>
            <Image src='/fashion3.jpg' alt='fun' width='800' height='400' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>Fashion Trends- Past, Present, and Future</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[490px] left-5 box-border unicode-isolate bg-green-400">Fashion</div>
              <div className='flex gap-4'>
                <p>By Sophia Lee</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          </div>
          <div className='flex font-bold mt-16 mb-8 gap-4'>
          <LuTriangleRight/>
            <p>Latest blogs in Entertainment</p>
          </div>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-5'>
            <Link href='/fashion1'>
            <Image src='/fashion1.jpg' alt='art' width='800' height='400' className='h-[480px] w-[1000px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-40'>Haute Couture- The Evolution of High Fashion</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[460px] left-5 box-border unicode-isolate bg-green-400">Fashion</div>
              <div className='flex gap-4 justify-center items-center'>
                <p>By Elena Garcia</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          
          <div>
            <Link href='/travel'>
            <Image src='/travel.jpg' alt='technology' width='800' height='400'  className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-52' >The Quantum Computing Revolution</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[460px] left-5 box-border unicode-isolate bg-yellow-400">Travel</div>
              <div className='flex gap-4 justify-center items-center'>
                <p>David White</p>
                <p>June 15,2023</p>  
              </div>
            </div>
            </Link>
          </div>
          </div>
          <div className='bg-blue-300 mt-10 p-14 text-center'>
            <h2 className='font-bold text-3xl mt-6'>Stay in the loop with our latest blog updates</h2>
            <p>Subscribe to our newsletter and never miss an update! Join our community to receive the latest articles</p>
            <div className='justify-center items-center'>
            <Link href='/subscribe'>
              <div className='flex justify-center items-center gap-2 bg-black text-white h-20 w-28'>
                <span className='text-white'>Subscribe</span>
                <FaCrown className='text-white'/>
                </div>
              </Link>
              </div>
          </div>

          <div className='flex font-bold mt-16 mb-8 gap-4'>
          <LuTriangleRight/>
            <p>Latest blogs in Entertainment</p>
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-9 mt-10'>
          <div>
            <Link href='/enterta'>
            <Image src='/entertainment2.jpg' alt='fun' width='800' height='400' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-16'>Sports Nutrition: A Comprehensive Guide</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[460px] left-5 box-border unicode-isolate bg-blue-400">Entertainment</div>
              <div className='flex gap-4'>
                <p>Jessica Miller</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/entertain'>
            <Image src='/entertainment3.jpg' alt='fun' width='800' height='400' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-28 mt-10'>Exploring Virtual Reality Gaming</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[460px] left-5 box-border unicode-isolate bg-red-300">Entertainment</div>
              <div className='flex gap-4'>
                <p>Jesscia White</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/sport4'>
            <Image src='/id4.jpg' alt='fun' width='800' height='400' className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-red-400 mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-16'>The Psychology of Learning- Insights for Educators</span>
              <div className="text-black p-4 text-xs leading-4 inline-block absolute bottom-[460px] left-5 box-border unicode-isolate bg-fuchsia-400">Sport</div>
              <div className='flex gap-4'>
                <p>Sophie Roberts</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          </div>

          <div>
            <Link href='https://webflow.com/templates/designers/webestica'>
            <Image src='/back.jpg' alt='/' width='800' height='400' className='h-[200px] w-[80%] ml-[140px] mt-24 mb-24'/>
            </Link>
          </div>
    </section>
  )
}
