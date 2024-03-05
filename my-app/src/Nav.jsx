import React from 'react'
import koinx from "./koinx.svg"


const Nav = () => {
  return (
    <nav className='bg-white text-black flex flex-row justify-between h-20 box-shadow-md'>
    <img src={koinx} className='w-24 h-20 ml-4 px-2'/>
      <ul className='hidden md:flex flex-row text-lg font-bold justify-end space-x-8'>
        <li className='my-auto'>
            Crypto Taxes
        </li>

        <li className='my-auto'>
            Free Tools
        </li>

        <li className='my-auto'>
            Resource Centers
        </li>

        <li className='my-auto'>
            <button className='bg-blue-600 px-6 rounded-xl text-white text-md font-semibold py-2 mr-4'>
                Get Started
            </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
