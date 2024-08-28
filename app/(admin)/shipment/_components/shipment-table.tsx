"use client"
import { deleteUniqueShipment, getAllShipment } from '@/lib/getDetails'
import { Edit, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const ShipmentTable = () => {
    const [shipment, setShipment] = React.useState<any[]>([])
    const [isLoading, setIsLoading] = React.useState(false)
    const router = useRouter()
    const onDelete = async (id:number) => {
        const verify = confirm("Do you want to delete this Shipment?")

        if(verify){
            await deleteUniqueShipment(id)
            router.refresh()
            toast.success(`Deleted successfully. `)
        }
    }
    React.useEffect(()=> {
        const fetchData = async () =>{
            setIsLoading(true)
            const shipmentDetails = await getAllShipment()
            console.log("ship", shipmentDetails)
            setShipment(shipmentDetails)
            setIsLoading(false)
        }
        fetchData()
    }, [])
  return (
    <div>
        {isLoading ? 
            <div className='flex flex-col items-center  space-y-2 py-5'>
                <p className='text-center text-2xl'><Loader2 className='animate-spin' size={60}/></p>
                    
            </div> 
            :
            <>
                {shipment.length > 0 ?
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
                                    {shipment.map((item, index)=> (
                                        <tr key={index}>
                                            <td>{item.shipment_id}</td>
                                            <td> <Link href={`/edit_shipment/${item.id}`}  className='flex items-center'><Edit className='pr-2 w-7 h-7'/> Edit</Link> </td>
                                            <td ><button className='bg-red-500 py-2 px-3 text-white rounded-md' onClick={()=>onDelete(item.id)}>Delete</button></td>
                                            <td>{item.createdAt.toUTCString()}</td>
                                        </tr>
        
                                    ))}
                                    
                                </tbody>
                    </table>
                :
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
                                    <td>No Shipment </td>
                                    <td></td>
                                    <td ></td>
                                    <td></td>
                                </tr>
                            </tbody>
                    </table>
                
                }
            </>
    }
    </div>
  )
}

export default ShipmentTable