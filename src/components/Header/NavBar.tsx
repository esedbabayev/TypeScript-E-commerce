import React from 'react'

import { Link } from "react-router-dom"

const NavBar: React.FC = () => {
  return (
    <nav className='flex items-center justify-center gap-20'>
      <ul className='flex gap-8'>
        <Link to="/">
          <li className='text-sm font-medium text-[#5C5F6A]'>Home</li>
        </Link>
        <Link to="/products">
          <li className='text-sm font-medium text-[#5C5F6A]'>Products</li>
        </Link>
        <Link to="">
          <li className='text-sm font-medium text-[#5C5F6A]'>About</li>
        </Link>
        <Link to="">
          <li className='text-sm font-medium text-[#5C5F6A]'>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
