import { ArrowRight, Check, Info } from 'lucide-react'
import React from 'react'

const Review = () => {
  return (
    <div className='bg-white border-2 rounded-md border-black/50 shadow-md py-10 flex w-full'>
        <div className='px-3'>
            <Info/>
        </div>
        <div className='space-y-7  w-full px-3'>
            <h2 className='font-bold text-xl'>ABC123</h2>
            <p className='text-black/50 text-xs'>We found this shipment for your tracking code. </p>
            <div className='flex justify-between flex-wrap md:flex-nowrap gap-x-7 md:py-3 pt-2 px-3 border-y-2 pb-4 border-black/50 '>
                <Check size={30} color='green'/>
                <div className='flex flex-col space-y-5 pb-2  flex-wrap md:flex-nowrap w-full'>
                    <div className='flex items-center '>
                        <h3 className='text-xl font-bold'>ABC123 </h3>
                        <span className='text-xl font-bold'>:</span>
                        <span className='text-green-700 md:text-xl text-sm pl-1 font-bold'>Shipment Delivered</span>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap gap-x-2 items-center text-xs'>
                        <p>Toronto, Canada </p>
                        <ArrowRight size={10}/>
                        <p>Auckland, New Zealand</p>
                    </div>
                </div>
                <div className='flex justify-center items-center w-fit'>
                    <button className='border-red-500 border-2 py-1 w-fit  text-red-500 hover:bg-red-500 hover:text-white hover:border-0 px-4 rounded-md'>More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review