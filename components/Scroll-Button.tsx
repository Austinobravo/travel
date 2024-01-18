"use client"
import { ChevronUp } from 'lucide-react'
import React from 'react'

const ScrollButton = () => {
  return (
    <section>
        <div className='bg-red-500 rounded-md px-3 py-2 fixed bottom-10 right-10 cursor-pointer' 
        onClick={()=> 
        {window.scrollTo({
            top: 0,
            behavior:"smooth"
        })}}>
            <ChevronUp color='white'/>
        </div>
    </section>
  )
}

export default ScrollButton