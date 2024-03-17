import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthenticatedNav } from '../comps/Nav/AuthenticatedNav'

const AuthenticatedLayout = () => {
  return (
    <div className=' bg-blue-gray-200 dark:bg-dark-bg pt-0 min-h-screen'>
        <AuthenticatedNav />
        <div className='pb-4 pt-24 mx-3 dark:text-white'>
          <Outlet />
        </div>
    </div>
  )
}

export default AuthenticatedLayout