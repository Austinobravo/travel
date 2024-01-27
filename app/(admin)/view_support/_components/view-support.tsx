"use client"
import { getUniqueSupport } from '@/lib/getDetails'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import {Clock, Loader2} from "lucide-react"

const ViewSupport = () => {
    const [support , setSupport] = React.useState<any[]>([])
    const router = useRouter()
    const pathname = usePathname()
    const path = +pathname.split("/").pop()!


    React.useEffect(()=> {
        const fetchData = async () => {
            
            const support = await getUniqueSupport(path)
            if(support.length > 0 && support !== null){
                setSupport(support)

            }else{
                    toast.error("This message does not exist")
                    router.push("/support")
                }
    

        }
        fetchData()

    }, [])
  return (
    <section>
        {support.length > 0 ? 
            <div>
                <div className='flex  justify-between items-center border-2 px-3 py-2 shadow-md'>
                    <h2 className='flex items-center '><Clock size={15} className='mr-2'/> {support[0].createdAt.toUTCString()}</h2>
                    {/* {shipmentDetails[0]?.shipment_id && (<p>Shipment Code: <span className='font-bold'>{shipmentDetails[0]?.shipment_id}</span></p>)} */}
                    <p >Tracking id: <span className='font-bold'>{support[0].tracking_id}</span></p>
                </div>
                <div className='flex flex-col justify-center items-center py-3'>
                    <p className=''>{support[0].firstname} sent a message </p>
                    <small className='font-bold text-xs'>{support[0].email}</small>
                </div>
                <div className='px-5'>
                    <p className='border-2 border-blue-500 py-2 px-3 rounded-md w-full mx-auto leading-loose text-2xl'>{support[0].message}</p>
                </div>
            </div>
        :
            <div className='flex flex-col items-center  space-y-2 py-5'>
                <p className='text-center text-2xl'><Loader2 className='animate-spin' size={60}/></p>
                
            </div> 
        }

    </section>
  )
}

export default ViewSupport