import { ChevronRight } from 'lucide-react'
import React from 'react'
const  items =[
    
]
const AdminNavbar = () => {
  return (
    <section>
        <div className='bg-blue-700 w-full items-center py-5 flex justify-between px-6'>
            <div className='font-bold text-lg'>
                <p>Admin Dashboard</p>
            </div>
            <div>
                <ul className='flex space-x-3 items-center'>
                    <li>Welcome, <span className='text-white font-bold'>Admin</span></li>
                    <li className='bg-red-500 py-1 px-3 text-white  text-xs rounded-md cursor-pointer'>Logout</li>
                </ul>
            </div>
        </div>
        <div className='bg-blue-200 flex w-full py-2 items-center px-6'>
            <p>Home</p>
            <ChevronRight size={15}/>
            <p className='font-bold cursor-pointer'>Dashboard</p>
            <ChevronRight size={15}/>
            <p className='font-bold cursor-pointer'>User</p>
        </div>
        
    </section>
  )
}

export default AdminNavbar