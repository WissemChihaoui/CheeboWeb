import React from 'react'
import { Outlet } from 'react-router-dom'

import AuthenticatedLayout from '../layouts/AuthenticatedLayout'
import PostsLayout from '../layouts/PostsLayout'
import StorieWrapper from '../layouts/StorieWrapper'

const Home = () => {
  return (
    
        <div className="grid grid-cols-4 gap-4 ">
          <div className='relative'>
           <div className="fixed">leftSide</div>
          </div>
          <div className='col-span-2'>
            <StorieWrapper />
            <Outlet />
          </div>
          <div className='relative'>
            <div className="fixed">
              rightSide
            </div>
          </div>
        </div>
    
  )
}
 export default Home;