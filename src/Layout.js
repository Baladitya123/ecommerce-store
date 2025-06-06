import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <div className='content'>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout