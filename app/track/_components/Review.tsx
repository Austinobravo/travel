"use client"
import { getSearch } from '@/lib/getDetails'
import { ArrowRight, Check, Info, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Review =  () => {
    const [searchItem, setSearchItem] = React.useState<any[]>([])
    const [searchValue, setSearchValue] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const search = useSearchParams()

    
    React.useEffect(()=>{
        if(typeof window !== "undefined"){
            const fetchData = async () => {
                const searchQuery = search?.get("q") || ""
                setSearchValue(searchQuery)
                if(!searchQuery) return
                setIsLoading(true)
                const searchResult = await getSearch(searchQuery)
                
                if(searchResult.length <= 0){
                    setIsLoading(false)
                    return
                }else{
                    setSearchItem(searchResult)
                    setIsLoading(false)
                }
            }
            fetchData()
        }
    }, [])
    

  return (
    <section>
        {isLoading ?
            (
                <div className='flex flex-col items-center  space-y-2 py-5'>
                    <p className='text-center text-2xl'><Loader2 className='animate-spin' size={60}/></p>
                        
                </div> 

            )
            :
            (<>
            {searchItem.length > 0 &&
                <>
                {searchItem.map((item, index)=> (
                    <div key={index} className={`bg-white mb-5 border-2 rounded-md border-black/50 shadow-md py-10 flex w-full`}>
                        <div>
                            <div className='px-3'>
                                <Info/>
                            </div>
                            <div className='space-y-7  w-full px-3'>
                                <h2 className='font-bold text-xl'>{item.shipment_id}</h2>
                                <p className='text-black/50 text-xs'>We found this shipment for your tracking code. </p>
                                    <div className='flex justify-between flex-wrap md:flex-nowrap gap-x-7 md:py-3 pt-2 px-3 border-y-2 pb-4 border-black/50 '>
                                        <Check size={30} color='green'/>
                                        <div className='flex flex-col space-y-5 pb-2  flex-wrap md:flex-nowrap w-full'>
                                            <div className='flex items-center '>
                                                <h3 className='text-xl font-bold'>{item.shipment_id} </h3>
                                                <span className='text-xl font-bold'>:</span>
                                            <span className={` md:text-xl text-sm pl-1 font-bold ${item.locations[item.locations.length -1]?.final_destination === true ? "text-green-700" : "text-amber-500"}`}>{item.locations[item.locations.length -1]?.final_destination === true ? "Shipment Delivered" : "Shipment Processing"}</span>
                                            </div>
                                            <div className='flex flex-wrap md:flex-nowrap gap-x-2 items-center text-xs'>
                                                <p>{item.locations[0]?.current_location}</p>
                                                <ArrowRight size={10}/>
                                                <p>{item.locations[item.locations.length -1]?.current_location}</p>
                                            </div>
                                        </div>
                                        <Link href={`/result/${item.id}`}>
                                            <div className='flex justify-center items-center w-fit'>
                                                <button className='border-red-500 border-2 py-1 w-fit  text-red-500 hover:bg-red-500 hover:text-white hover:border-0 px-4 rounded-md' >More </button>
                                            </div>
                                        </Link>
                                    </div>
            
                            </div>
                        </div>
                    </div>
                    ))}
                </>
            }
            {searchItem.length <= 0 &&
                <div className='bg-white border-2 rounded-md border-black/50 shadow-md py-10 flex w-full'>
                    <div className='px-3'>
                        <Info/>
                    </div>
                    <div className='space-y-7  w-full px-3'>
                        <h2 className='font-bold text-xl'>No Shipment titled - {searchValue}</h2>
                        <p className='text-black/50 text-xs flex items-center'>Please put the correct code - 
                        <Link href={`/`}>
                            <button className='border-red-500 border-2 py-1 w-fit  text-red-500 hover:bg-red-500 hover:text-white hover:border-0 px-4 rounded-md ml-2' >Here </button>    
                        </Link>
                        </p>
    
                    </div>
    
                </div>
            }
            </>)
        }
        

    </section>
  )
}

export default Review