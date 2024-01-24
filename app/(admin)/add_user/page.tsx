import React from 'react'
import UserForm from './_components/user-form'

const page = () => {
  return (
    <section className='border-2 shadow-md rounded-md pb-7'>
        <div className='bg-blue-800 rounded-t-md py-2 text-center text-white'>
            Edit Shipment
        </div>
       
        <div>
            <UserForm/>
        </div>
    </section>
  )
}

export default page