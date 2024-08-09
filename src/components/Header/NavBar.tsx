import React from 'react'

import { Link } from "react-router-dom"

const NavBar: React.FC = () => {
  return (
    <nav className='flex items-center justify-center gap-20'>
      <ul className='flex gap-8'>
        <Link to="/">
          <li className='text-sm font-medium text-[#5C5F6A] hover:text-gray-900'>Home</li>
        </Link>
        <Link to="/products">
          <li className='text-sm font-medium text-[#5C5F6A] hover:text-gray-900'>Products</li>
        </Link>
        <Link to="">
          <li className='text-sm font-medium text-[#5C5F6A] hover:text-gray-900'>About</li>
        </Link>
        <Link to="">
          <li className='text-sm font-medium text-[#5C5F6A] hover:text-gray-900'>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
