"use client"
import { ArrowUp, Bus, CheckCircleIcon, ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'

const AllLocation = () => {
    const [isToggle, setIsToggle] = React.useState(false)
  return (
    <section>
        <div className='px-7 py-6 '>
                        <div className='flex justify-between items-center pb-3'>
                            <h3 className='font-bold text-xl py-5'>All Shipment Details</h3>
                            <div className='cursor-pointer'>
                                {isToggle ? <ChevronDown onClick={() =>setIsToggle(!isToggle)}/> : <ChevronUp onClick={() =>{setIsToggle(!isToggle)}}/> }
                            </div>
                        </div>
                        {isToggle && 
                            <div className='space-y-1'>
                                <div className='flex flex-wrap md:flex-nowrap gap-y-2 items-center space-x-28 border-b-2 pb-2'> 
                                    <div className='space-y-1'>
                                        <h3 className='text-xs'>Thursday</h3>
                                        <p className='font-bold'>March, 30 2023</p>
                                        <p className='text-sm'>16:02 (UTC+13:00)</p>
                                    </div>
                                    <div>
                                        <CheckCircleIcon color='green' size={20}/>
                                    </div>
                                    <div className='text-sm font-medium'>
                                        <h3 className='text-green-500'>Shipment Delivered</h3>
                                        <p>Auckland</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap md:flex-nowrap gap-y-2 items-center space-x-28 border-b-2 pb-2'>
                                    <div className='space-y-1'>
                                        <h3 className='text-xs'>Tuesday</h3>
                                        <p className='font-bold'>March, 28 2023</p>
                                        <p className='text-sm'>22:00 (UTC+13:00)</p>
                                    </div>
                                    <div>
                                        <ArrowUp  size={15}/>
                                    </div>
                                    <div className='text-sm font-medium'>
                                        <h3>Estimated Vessel Arrival</h3>
                                        <p>Auckland</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap md:flex-nowrap gap-y-2 items-center space-x-28 border-b-2 pb-2'>
                                    <div className='space-y-1'>
                                        <h3 className='text-xs'>Monday</h3>
                                        <p className='font-bold'>January, 30 2023</p>
                                        <p className='text-sm'>15:01 (UTC-05:00)</p>
                                    </div>
                                    <div>
                                        <ArrowUp  size={15}/> <Bus size={20}/>
                                    </div>
                                    <div className='text-sm font-medium'>
                                        <h3 className='text-red-500'>Actual Pickup Date (customer)</h3>
                                        <p>Trenton</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
    </section>
  )
}

export default AllLocation