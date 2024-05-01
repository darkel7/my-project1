import React from 'react'
import Catlinks from './Catlinks'
import SocialIcons from './Socialicons'
import Subscribelinks from './Subscribelinks'
import Pagelinks from './Pagelinks'

export default function Footer() {
  return (
    <footer className='flex gap-x-5 items-start h-[60vh] bg-slate-900 text-white p-5 mt-8'>
      <div className='flex flex-col gap-y-6'>
        <div className='flex gap-x-2 items-center capitalize'>
        <p>Coming Soon </p>
        </div>
        
        <SocialIcons/>
      </div>
      <div className=''>
        <h2>Category</h2>
        <div className='m-5'>
          < Catlinks title='sport' bg='bg-red-700'/>
          < Catlinks title='fashion'  bg='bg-yellow-700'/><br/>
          < Catlinks title='technology'  bg='bg-green-700'/>
          < Catlinks title='game'  bg='bg-orange-700'/><br/>
          < Catlinks title='education' bg='bg-fuchsia-700'/>
        </div>
      </div>
      <div className='capitalize'>
        <h2>Pages</h2>
        <div className='flex justify-start items-start gap-4 m-5'>
          <ol>
          <Pagelinks title='home' link='/'/>
          <Pagelinks title='Author'  link='/'/>
          <Pagelinks title='Pricing' link='/pricing'/>
          <Pagelinks title='About Us' link='/about'/>
          <Pagelinks title='Subscribe' link='/subscribe'/>
          <Pagelinks title='Privacy Policy' link='/privacy'/> 
          </ol>
          <ol>
            <Pagelinks title='Style Guide' link='/style'/>
            <Pagelinks title='Instructions' link='/instruction'/>
            <Pagelinks title='Licenses' link='/licenses'/>
            <Pagelinks title='Changelog' link='/change'/>
            <Pagelinks title='Coming soon' link='/coming'/>
          </ol>
        </div>
      </div>
      <div>
        <h2>Subscribe for more</h2>
        <div className=''>
        <Subscribelinks/>
        </div>
        <p className='p-5'>Designed by Adeyemi Powered by Kehinde</p>
      </div>
    </footer>
  )
}