import React from 'react'
import { Outlet } from 'react-router-dom'
import Spline from '@splinetool/react-spline';

const GuestLayout = () => {
  return (
    <div className='bg-dark-bg min-h-screen flex items-center grid-cols-2 justify-center'>
        <div className='grid grid-cols-2 gap-12'>

        <Outlet />
        <Spline scene="https://prod.spline.design/xFzIGbs7H3SQcibp/scene.splinecode" />
        </div>
    </div>
  )
}

export default GuestLayout


