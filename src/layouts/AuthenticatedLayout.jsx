import React, { Children } from 'react'
import { AuthenticatedNav } from '../comps/Nav/AuthenticatedNav'

const AuthenticatedLayout = ({ children }) => {
  return (
    <div className='h-screen bg-blue-gray-200 dark:bg-dark-bg pt-4'>
        <AuthenticatedNav />
        {children}
    </div>
  )
}

export default AuthenticatedLayout