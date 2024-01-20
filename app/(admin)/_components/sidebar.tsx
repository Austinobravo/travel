
import React from 'react'
import SidebarLinks from './sidebarLinks'

const Sidebar = () => {
  return (
    <section className='w-[300px] py-2 px-7 fixed'>
        <div className='bg-blue-800 rounded-t-md py-2 text-center text-white'>
            Dashboard
        </div>
        <SidebarLinks/>
    </section>
  )
}

export default Sidebar