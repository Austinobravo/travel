"use client"
import { ArrowUp, Bus, CheckCircleIcon, ChevronDown, ChevronUp ,Loader2} from 'lucide-react'
import React from 'react'
import { getUniqueShipment, getUniqueShipmentLocations } from '@/lib/getDetails'
import { usePathname, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import PrintButton from './PrintButton'

const ShipmentDetails = () => {
    const [isToggle, setIsToggle] = React.useState(true)
    const [isLocationToggle, setIsLocationToggle] = React.useState(false)
    const [shipmentDetails, setShipmentDetails] = React.useState<any[]>([])
    const [urlDetails, setURlDetails] = React.useState("")
    const [trackingLocations, setTrackingLocations] = React.useState<any[]>([])
    const router = useRouter()
    const pathname = usePathname()
    
    const path = +pathname.split("/").pop()!
    
    const getDay = (date:any) => {
        const list = date.split(" ")
        return list[0]
    }
    const getMonth = (date:any) => {
        const list = date.split(" ")
        let month = ""
        // for(let i = 1; i<list.length -2; i++){
        //     console.log("i", i)
        // }
        month += list[2] + ", " + list[1] + " " + list[3]
        return month
    }
    const getTime = (date:any) => {
        const list = date.split(" ")
        let time = ""
        time += list[4] + " " + "(" + list[5] + ")"
        return time
    }

    React.useEffect(()=> {
        if(typeof window !== "undefined"){
            const url =  location.host
            setURlDetails(url)
            const fetchData = async () => {
                
                const shipment = await getUniqueShipment(path)
                
                if(shipment.length > 0 && shipment !== null){
                    setShipmentDetails(shipment)
                }else{
                    toast.error("This shipment does not exist")
                    return router.push("/track")
                }
 
        
                const locations = await getUniqueShipmentLocations(shipment[0]?.id!)
                setTrackingLocations(locations)
    
            }
            fetchData()
            
        }

   
    }, [])
  return (
    <section>
        {shipmentDetails.length > 0 ?
            <div>
                <div className='px-7 pb-6 flex justify-between gap-y-2 flex-wrap md:flex-nowrap'>
                        <div className='text-base space-y-2'>
                            <h2>Tracking Code: <span className="font-bold">{shipmentDetails[0]?.shipment_id}</span></h2>
                            <p className='text-xs'>This shipment is handled by: <span className="font-bold">{urlDetails}</span></p>
                        </div>
                        <div >
                            <PrintButton/>
                        </div>
                        
                </div>
                <div className='px-7 py-6 space-y-4'>
                {shipmentDetails[0].locations.slice(shipmentDetails[0].locations.length -1).map((location:any, index:any) => (
                    <div key={index}>
                        <h3 className={`text-xl font-bold pb-2 ${location.final_destination === true ?  "text-green-500" : "text-amber-500"}`}>{location.final_destination === true ?  "Shipment Delivered" : "Shipment Processing"}</h3>
                        <p className='text-xs'>{location.createdAt.toUTCString()}, {location.current_location}</p>
                    </div>

                ))}
                    <div className='text-xs font-bold w-full space-y-2  py-2 px-1'>
                        <p><span className='text-red-500'>Origin </span> : {shipmentDetails[0]?.sender_location}</p>
                        <hr/>
                        <p className='w-fit ml-auto'><span className='font-bold text-green-500'>Destination</span> : {shipmentDetails[0]?.receiver_location}</p>
                    </div>
                </div>
                <div className='px-7 py-6 '>
                                <div className='flex justify-between items-center pb-3'>
                                    <h3 className='font-bold text-xl'>More Shipment Details</h3>
                                    <div className='cursor-pointer'>
                                        {isToggle ? <ChevronDown onClick={() =>setIsToggle(!isToggle)}/> : <ChevronUp onClick={() =>{setIsToggle(!isToggle)}}/> }
                                    </div>
                                </div>
                                {isToggle && 
                                <>
                                    <div>
                                        <table >
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr>
                                                    <td>Total Pieces</td>
                                                    <td>{shipmentDetails[0]?.total_pieces}</td>
                                                </tr>
                                                <tr>
                                                    <td>Weight</td>
                                                    <td>{shipmentDetails[0]?.weight} KGM</td>
                                                </tr>
                                                <tr>
                                                    <td>Volume (MTQ)</td>
                                                    <td>{shipmentDetails[0]?.volume}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipment ID</td>
                                                    <td>{shipmentDetails[0]?.shipment_id}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <h3 className='font-bold text-xl py-5'>Masterdetails</h3>     
                                    </div>
                                    <div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Vessel Name</td>
                                                    <td>{shipmentDetails[0]?.vessel_name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Departure Date</td>
                                                    <td>{shipmentDetails[0]?.estimated_departure_date.toDateString()}</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Arrival Date</td>
                                                    <td>{shipmentDetails[0]?.estimated_arrival_date.toDateString()}</td>
                                                </tr>
                                                <tr>
                                                    <td>Place of Acceptance</td>
                                                    <td>{shipmentDetails[0]?.place_of_acceptance}</td>
                                                </tr>
                                                <tr>
                                                    <td>Place of Delivery</td>
                                                    <td>{shipmentDetails[0]?.place_of_delivery}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <h3 className='font-bold text-xl py-5'>Contact details</h3>     
                                    </div>
                                    <div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Sender's Name</td>
                                                    <td>{shipmentDetails[0]?.sender_name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender's Location</td>
                                                    <td>{shipmentDetails[0]?.sender_location}</td>
                                                </tr>
                                                <tr>
                                                    <td>Receiver's Name</td>
                                                    <td>{shipmentDetails[0]?.receiver_name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Receiver's Location</td>
                                                    <td>{shipmentDetails[0]?.receiver_location}</td>
                                                </tr>
                                                <tr>
                                                    <td>Receiver's Email</td>
                                                    <td>{shipmentDetails[0]?.receiver_email}</td>
                                                </tr>
                                                <tr>
                                                    <td>Receiver's Phone</td>
                                                    <td>{shipmentDetails[0]?.receiver_phone}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                                }
                </div>
                <div className='px-7 py-6 '>
                                <div className='flex justify-between items-center pb-3'>
                                    <h3 className='font-bold text-xl py-5'>All Shipment Details</h3>
                                    <div className='cursor-pointer'>
                                        {isLocationToggle ? <ChevronDown onClick={() =>setIsLocationToggle(!isLocationToggle)}/> : <ChevronUp onClick={() =>{setIsLocationToggle(!isLocationToggle)}}/> }
                                    </div>
                                </div>
                                {isLocationToggle && 
                                    <div className='space-y-1'>
                                        
                                        {shipmentDetails[0].locations.slice(shipmentDetails[0].locations.length -1).map((location:any, index:any)=> (
                                            <div key={index}>
                                                {location.final_destination === true && 
                                                    <div  className='flex flex-wrap md:flex-nowrap gap-y-2 items-center space-x-28 border-b-2 pb-2'> 
                                                        <div className='space-y-1'>
                                                            <h3 className='text-xs'>{getDay(location.createdAt.toUTCString())}</h3>
                                                            <p className='font-bold'>{getMonth(location.createdAt.toUTCString())}</p>
                                                            <p className='text-sm'>{getTime(location.createdAt.toUTCString())}</p>
                                                        </div>
                                                        <div>
                                                            <CheckCircleIcon color='green' size={20}/>
                                                        </div>
                                                        <div className='text-sm font-medium'>
                                                            <h3 className='text-green-500'>Shipment Delivered</h3>
                                                            <p>{location.current_location}</p>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        ))}
                                        {shipmentDetails[0].locations.slice(1).reverse().map((location:any, index:any)=> (
                                            <div key={index} className='flex flex-wrap md:flex-nowrap gap-y-2 items-center space-x-28 border-b-2 pb-2'>
                                                <div className='space-y-1'>
                                                    <h3 className='text-xs'>{getDay(location.createdAt.toUTCString())}</h3>
                                                    <p className='font-bold'>{getMonth(location.createdAt.toUTCString())}</p>
                                                    <p className='text-sm'>{getTime(location.createdAt.toUTCString())}</p>
                                                </div>
                                                <div>
                                                    <ArrowUp  size={15}/>
                                                </div>
                                                <div className='text-sm font-medium'>
                                                    <h3 className='text-amber-500'>{location.info_on_current_location}</h3>
                                                    <p>{location.current_location}</p>
                                                </div>
                                            </div>

                                        ))}
                                        {trackingLocations.slice(0,1).map((location, index)=> (
                                            <div key={index} className='flex flex-wrap md:flex-nowrap gap-y-2 items-center space-x-28 border-b-2 pb-2'>
                                                <div className='space-y-1'>
                                                    <h3 className='text-xs'>{getDay(location.createdAt.toUTCString())}</h3>
                                                    <p className='font-bold'>{getMonth(location.createdAt.toUTCString())}</p>
                                                    <p className='text-sm'>{getTime(location.createdAt.toUTCString())}</p>
                                                </div>
                                                <div>
                                                    <ArrowUp  size={15}/> <Bus size={20}/>
                                                </div>
                                                <div className='text-sm font-medium'>
                                                    <h3 className='text-red-500'>Actual Pickup Date - {location.info_on_current_location}</h3>
                                                    <p>{location.current_location}</p>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                }
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

export default ShipmentDetails