import React from 'react'
import ViewSupport from '../_components/view-support'

const page = () => {
  return (
        <section className='border-2 shadow-md rounded-md pb-7'>
            <div className='bg-blue-800 rounded-t-md py-2 text-center text-white'>
                View Message
            </div>
        
            <div>
                <ViewSupport/>
            </div>
        </section>
  

  )
}

export default page