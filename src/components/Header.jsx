import React from 'react'
import SocialLinks from './SocialLinks'

function Header() {
  return (
    <div>
        <header className=" text-fuchsia-800 p-4 flex flex-row justify-between items-center bg-gray-100 shadow-md rounded-lg absolute w-full">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav className=" text-indigo-900 p-2">
                <ul className="flex space-x-4">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
        <div className='bg-gradient-to-r from-violet-500 to-blue-500 p-8 flex items-center justify-around  h-screen '>
            <div className='flex flex-col  text-4xl text-white pr-10'>
                <h1 className='text-6xl font-semibold mb-4'>
                    Hi,  I am <span className="font-bold">Hisham K H</span>
                </h1>
                <h3 className='font-semibold mb-4'>
                    I am a <span className="font-bold">Full Stack Developer</span>
                </h3>
                <div className='rounded-4xl bg-white p-4  shadow-lg  items-center justify-center w-max '>
                    <SocialLinks/>
                </div>
            </div>
            <div className='flex items-center justify-center '>
                <img src="https://avatars.githubusercontent.com/u/182793013?v=4" alt="Profile" className="rounded-full  ml-8 shadow-lg" />
            </div>
        </div>
    </div>

  )
}

export default Header