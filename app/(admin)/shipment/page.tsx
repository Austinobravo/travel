import { Edit } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <section className='border-2 shadow-md rounded-md pb-7'>
        <div className='bg-blue-800 rounded-t-md py-2 text-center text-white'>
            Shipment
        </div>
        <div className='flex justify-between items-center border-2 px-3 py-2 shadow-md'>
            <h2>Select Shipment to Change</h2>
            <div className='flex items-center space-x-3 text-xs md:text-base border-2 py-1 px-3'>
                <Edit size={15} className=''/>
                <button> Add Shipment</button>

            </div>
        </div>
        <div>
            <div>
                <table >
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>YCNE578</td>
                            <td className='flex items-center'> <Edit className='pr-2 w-7 h-7'/> Edit</td>
                            <td><button className='bg-red-500 py-2 px-3 text-white rounded-md'>Delete</button></td>
                            <td>Wednesday 12th June 2023</td>
                        </tr>
                        <tr>
                        <td>YCNE578</td>
                            <td className='flex items-center'> <Edit className='pr-2 w-7 h-7'/> Edit</td>
                            <td><button className='bg-red-500 py-2 px-3 text-white rounded-md'>Delete</button></td>
                            <td>Wednesday 12th June 2023</td>
                        </tr>

                    
                        <tr>
                        <td>YCNE578</td>
                            <td className='flex items-center'> <Edit className='pr-2 w-7 h-7'/> Edit</td>
                            <td><button className='bg-red-500 py-2 px-3 text-white rounded-md'>Delete</button></td>
                            <td>Wednesday 12th June 2023</td>
                        </tr>

                        <tr>
                        <td>YCNE578</td>
                            <td className='flex items-center'> <Edit className='pr-2 w-7 h-7'/> Edit</td>
                            <td><button className='bg-red-500 py-2 px-3 text-white rounded-md'>Delete</button></td>
                            <td>Wednesday 12th June 2023</td>
                        </tr>

                        <tr>
                        <td>YCNE578</td>
                            <td className='flex items-center'> <Edit className='pr-2 w-7 h-7'/> Edit</td>
                            <td><button className='bg-red-500 py-2 px-3 text-white rounded-md'>Delete</button></td>
                            <td>Wednesday 12th June 2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </section>
  )
}

export default page