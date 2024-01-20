import React from 'react'
import AdminNavbar from "@/app/(admin)/_components/adminNavbar"
import Sidebar from './_components/sidebar'
const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <AdminNavbar/>
        <div className='md:block hidden'>
            <Sidebar/>
        </div>
        <main className='md:pl-[300px] py-2 px-7'>
            {children}

        </main>
    </div>
  )
}

export default AdminLayout