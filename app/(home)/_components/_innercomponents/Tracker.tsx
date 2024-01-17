import React from 'react'
import Image from "next/image"
const Tracker = () => {
  return (
    <div className='flex gap-5' >
        <div className='basis-1/2 space-y-3'>
            <h2 className='text-xl text-red-500 font-bold'>TRACK YOUR SHIPMENT</h2>
            <p className='text-sm '>Find the status of your in transit shipment</p>
            <form>
                <div className=' flex w-full border-2 p-1 rounded-md'>
                    <label htmlFor=''/>
                    <input type="text" name="" id="" className='w-full'/>
                    <button type='submit' className='bg-red-500 text-white py-3 px-8 '>Track</button>
                </div>
            </form>

        </div>
        <div className='basis-1/2'>
            <Image src="/tracker.jpg" height={500} width={1000} alt='Tracker image'/>

        </div>
      
    </div>
  )
}

export default Tracker
