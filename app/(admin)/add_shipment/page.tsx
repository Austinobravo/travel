
import React from 'react'
import ShipmentForm from './_components/shipment-form'

const page = () => {
  return (

    <section className='border-2 shadow-md w-full rounded-md pb-7'>
        <div className='bg-blue-800 rounded-t-md py-2 text-center text-white'>
            Add Shipment
        </div>
        <div className='flex  justify-between items-center border-2 px-3 py-2 shadow-md'>
            <h2>Add new shipment</h2>
            <p>Shipment Code: <span className='font-bold'>....</span></p>
        </div>
        <div>
            <ShipmentForm/>
        </div>
    </section>
  )
}

export default page