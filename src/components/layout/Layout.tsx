// React
import React from 'react'

// Outlet
import { Outlet } from "react-router-dom"

// Components
import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'

const Layout: React.FC = () => {  
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default Layout
