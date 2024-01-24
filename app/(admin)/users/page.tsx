import { Edit } from 'lucide-react'
import React from 'react'
import Users from './_components/users'
import Link from 'next/link'

const page = () => {
  return (
    <section className='border-2 shadow-md rounded-md pb-7'>
        <div className='bg-blue-800 rounded-t-md py-2 text-center text-white'>
            User
        </div>
        <div className='flex  justify-between items-center border-2 px-3 py-2 shadow-md'>
            <h2>Select User to Change</h2>
            <Link href={"/add_user"}>
                <div className='flex items-center space-x-3 text-xs md:text-base border-2 py-1 px-3'>
                    <Edit size={15} className=''/>
                    <button> Add User</button>

                </div>
            </Link>
        </div>
        <div>
            <Users/>
        </div>

    </section>
  )
}

export default page