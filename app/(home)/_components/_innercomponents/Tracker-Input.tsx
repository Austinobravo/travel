"use client"
import { getSearch } from '@/lib/getDetails'
import React from 'react'
import toast from 'react-hot-toast'

const TrackerInput = () => {
  
  const onSubmit = async (e:any)=>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const search = form.get("search")
    try{
      const searchResult = await getSearch(search)

    }catch(error){
      toast.error("An error occured.")
    }
  }
  return (
    <div>
        <div className='py-20 space-y-7'>
            <h2 className='md:text-2xl  text-white drop-shadow-lg font-bold'>TRACK YOUR SHIPMENT</h2>
            <form onSubmit={onSubmit}>
                <div className=' flex  md:w-[550px] flex-wrap md:flex-nowrap   bg-white p-1 rounded-md'>
                    <label htmlFor=''/>
                    <input type="text"  id="search" name="search"  className="outline-none border-0 w-full py-2 md:py-0 text-sm" placeholder='Enter your tracking number'/>
                    <button type='submit' className='bg-red-500 md:w-fit w-full text-white md:py-2 py-1 px-6 rounded-sm font-bold'>Track</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default TrackerInput
