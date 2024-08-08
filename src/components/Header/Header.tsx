import React from 'react'

// Components
import NavBar from '../Header/NavBar.tsx'

// Images
import Logo from '../../images/Logo.tsx'
import Ecommerce from '../../images/Ecommerce.tsx'

// Icons
import Search from '../icons/Search.tsx'
import Cart from '../icons/Cart.tsx'
import Profile from '../icons/Profile.tsx'

const Header: React.FC = () => {

  return (
    <header className='w-full py-5 px-3 flex justify-between'>
      {/* left side logo */}
      <div className='flex gap-2 items-center '>
        <Logo />
        <Ecommerce />
      </div>
      {/* navbar */}
      <NavBar />
      {/* right side input cart logout logos */}
      <div>
        <div className='flex items-center gap-8'>
          {/* input */}
          <div className='flex gap-2 border-solid border-2 border-[#E6E7E8] rounded-md px-4 py-3'>
            <Search />
            <input type="text" placeholder='Search products' className='border-none outline-none px-2' />
          </div>
          <div className='flex gap-8'>
            <Cart />
            <Profile />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
