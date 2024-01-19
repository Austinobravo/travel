"use client"
import { Printer } from 'lucide-react'
import React from 'react'

const PrintButton = () => {
  return (
    <div className='border-red-500 items-center border-2 px-5 py-2 text-sm text-red-500 rounded-md flex gap-1' onClick={()=> window.print()}>
        <button>Print</button>
        <Printer color="red" size={17}/>
    </div>
  )
}

export default PrintButton