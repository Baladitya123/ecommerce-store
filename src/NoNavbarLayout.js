import React from 'react'
import { Outlet } from 'react-router-dom'

const NoNavbarLayout = () => {
  return (
    <div className='content'>
        <Outlet/>
    </div>
  )
}

export default NoNavbarLayout