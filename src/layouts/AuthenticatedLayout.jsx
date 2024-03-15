import React, { Children } from 'react'
import { AuthenticatedNav } from '../comps/Nav/AuthenticatedNav'

const AuthenticatedLayout = ({ children }) => {
  return (
    <div className=' bg-blue-gray-200 dark:bg-dark-bg pt-0'>
        <AuthenticatedNav />
        <div className='pb-4 pt-24 mx-3 dark:text-white'>
          {children}
        </div>
    </div>
  )
}

export default AuthenticatedLayout