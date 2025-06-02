import React from 'react'
import SocialLinks from './SocialLinks'

function Footer() {
  return (
    <div>
        <footer id='contact' className="bg-gradient-to-r from-violet-700 to-blue-700 text-white py-4 text-center">
            <h2 className="text-3xl font-semibold mb-2">Connect with Me</h2>
            <div className='flex items-center justify-around space-y-4'>
                <div className=' text-md text-left'>
                    <span className='font-bold text-2xl' > Hisham K H </span>
                    <address className=' text-gray-200'>
                        Kannamkulam H,<br/>
                        Ala Gothuruth, PO Kothaparambu,<br/>
                        Thrissur, Kerala, India - 680683
                    </address>
                </div>
                <div className="flex justify-center space-x-6 mb-4 ">
                    <div className='rounded-4xl bg-white p-4  shadow-lg  items-center justify-center w-max '>
                        <SocialLinks/>
                    </div>
                </div>
            </div>
            <p className="text-sm">
            &copy; {new Date().getFullYear()} Hisham K H. All rights reserved.
            </p>
        </footer>
    </div>
  )
}

export default Footer