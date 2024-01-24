import React from 'react'
import Sidebar from '../_components/sidebar'
import { User } from 'lucide-react'

const page = () => {
  return (
    <section >
      <div className=' md:hidden block'>
        <Sidebar/>
      </div>
      <div className='flex pt-48 md:pt-0 justify-center flex-col items-center space-y-3'>
        <User className='rounded-full border-2' size={80} />
        <h2 className='text-2xl'>Welcome</h2>
        <p className='font-bold'>Admin</p>
      </div>
    </section>
  )
}

export default page