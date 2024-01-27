"use client"
import { deleteUniqueSupport, getSupport } from '@/lib/getDetails'
import {Eye, Loader2} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const SupportTable = () => {
    const [support, setSupport] = React.useState<any[]>([])
    const [isLoading, setIsLoading] = React.useState(false)
    const router = useRouter()

    const onDelete = async (id:number) => {
        const verify = confirm("Do you want to delete this message?")

        if(verify){
            await deleteUniqueSupport(id)
            router.refresh()
            toast.success(`Deleted successfully. `)
        }
    }
    React.useEffect(()=> {
        const fetchData = async () =>{
            setIsLoading(true)
            const supportDetails = await getSupport()
            setSupport(supportDetails)
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
                {support.length > 0 ?
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
                                    {support.map((item, index)=> (
                                        <tr key={index}>
                                            <td>{item.tracking_id}</td>
                                            <td> <Link href={`/view_support/${item.id}`}  className='flex items-center'><Eye className='pr-2 w-5 h-5'/> View</Link> </td>
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
                                    <td>No Support messages </td>
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

export default SupportTable