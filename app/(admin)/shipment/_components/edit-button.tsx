import { Edit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const EditButton = () => {
  return (
    <div>
        <Link href="/add_shipment">
            <div className='flex items-center space-x-3 text-xs md:text-base border-2 py-1 px-3'>
                    <Edit size={15} className=''/>
                    <button> Add Shipment</button>

            </div>

        </Link>
    </div>
  )
}

export default EditButton