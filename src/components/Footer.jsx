import React from 'react';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <div>
      <footer
        id='contact'
        className="bg-gradient-to-r from-violet-700 to-blue-700 text-white py-8 px-4 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Connect with Me</h2>

        <div className='flex flex-col md:flex-row md:items-start justify-around gap-6 md:gap-0 mb-6'>
          <div className='text-md text-center sm:text-center md:text-left'>
            <span className='font-bold text-xl md:text-2xl'>Hisham K H</span>
            <address className='text-gray-200 mt-2 not-italic'>
              Kannamkulam H,<br />
              Ala Gothuruth, PO Kothaparambu,<br />
              Thrissur, Kerala, India - 680683
            </address>
          </div>

          <div className="flex justify-center md:justify-center">
            <div className='rounded-3xl bg-white p-4 shadow-lg flex items-center justify-center w-max'>
              <SocialLinks />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Hisham K H. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
