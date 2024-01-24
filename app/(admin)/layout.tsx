import React from 'react'
import AdminNavbar from "@/app/(admin)/_components/adminNavbar"
import Sidebar from './_components/sidebar'
const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <AdminNavbar/>
        <div className='md:pt-28 pt-32'>
          <div className='md:block hidden'>
              <Sidebar/>
          </div>
          <main className='md:pl-[300px] py-2 md:px-7 px-'>
              {children}

          </main>

        </div>
    </div>
  )
}

export default AdminLayout