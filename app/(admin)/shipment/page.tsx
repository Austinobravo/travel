import React from 'react'
import ShipmentTable from './_components/shipment-table'
import EditButton from './_components/edit-button'

const page = () => {
    
  return (
    <section className='border-2 shadow-md rounded-md pb-7'>
        <div className='bg-blue-800 rounded-t-md py-2 text-center text-white'>
            Shipment
        </div>
        <div className='flex justify-between items-center border-2 px-3 py-2 shadow-md'>
            <h2>Select Shipment to Change</h2>
            <EditButton/>
        </div>
        <div>
            <div>
                <ShipmentTable/>
            </div>
        </div>

    </section>
  )
}

export default page