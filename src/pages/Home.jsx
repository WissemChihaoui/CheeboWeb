import React from 'react'
import Stories from '../comps/Stories/Stories'
import Post from '../comps/Post/Post'
import AuthenticatedLayout from '../layouts/AuthenticatedLayout'
import PostsLayout from '../layouts/PostsLayout'

export const Home = () => {
  return (
    <AuthenticatedLayout>
        <div className="grid grid-cols-12 gap-2">
          <div className='col-span-3'>
            
          </div>
          <div className='col-span-6'>
            <Stories />
            <PostsLayout />
          </div>
          <div className='col-span-3'>

          </div>
        </div>
    </AuthenticatedLayout>
  )
}
