import React from 'react'
import ShipmentForm from '../_components/shipment-form'

const page = () => {
  return (

    <section className='border-2 shadow-md rounded-md pb-7'>
        <div className='bg-blue-800 rounded-t-md py-2 text-center text-white'>
            Edit Shipment
        </div>
       
        <div>
            <ShipmentForm/>
        </div>
    </section>
  )
}

export default page