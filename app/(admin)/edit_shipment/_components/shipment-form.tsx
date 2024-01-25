"use client"
import { deleteUniqueLocation, getUniqueShipment, getUniqueShipmentLocations } from '@/lib/getDetails'
import axios from 'axios'
import { Bookmark, Bus, Edit, Loader, Loader2, LocateIcon, Plus } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const ShipmentForm = () => {
    const [isLocationForm, setIsLocationForm] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [trackingLocations, setTrackingLocations] = React.useState<any[]>([])
    const [shipmentDetails, setShipmentDetails] = React.useState<any[]>([])
    const router = useRouter()
    const pathname = usePathname()
    const path = +pathname.split("/").pop()!
   
    const [formData, setFormData] = React.useState({
        id: shipmentDetails[0]?.id,
        sender_name: "",
        sender_location: "",
        receiver_name: "",
        receiver_location: "",
        receiver_email: "",
        receiver_phone: 0,
        shipment_id: "",
        total_pieces: "",
        weight: "",
        volume: "",
        vessel: "",
        place_of_acceptance: "",
        estimated_departure_date: "",
        estimated_arrival_date: "",
        place_of_delivery: "",
        current_location: "",
        info_on_shipment: "",
        final_destination: false
    })

    const [locationData, setLocationData] = React.useState({
        id:null,
        current_location:"",
        shipment_info:"",
    })

    const onChange = (event:any) => {
        event.preventDefault()
        const {name, value} = event.target
        setFormData({...formData, [name]:value})
    }
    const onLocationChange = (event:any) => {
        event.preventDefault()
        const {name, value} = event.target
        setLocationData({...locationData, [name]:value})
    }

    const onDelete = async (id:number) => {
        const verify = confirm("Do you want to delete this Location?")

        if(verify){
            try{
                await deleteUniqueLocation(id)
                toast.success(`Deleted successfully. `)
                router.refresh()
            }catch(error:any){
                toast.error(`${error}`)
            }

            }
    }
    const onSubmit = async(e:any) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        let final;
        const final_destination = form.get("final_destination") 
        if(final_destination === "Yes"){
            final = true         
        }else{
            final = false         
        }
        setFormData({...formData, final_destination:final})


        const data = {
            id: shipmentDetails[0]?.id,
            locationId: locationData.id,
            sender_name: formData.sender_name,
            sender_location: formData.sender_location,
            receiver_name: formData.receiver_name,
            receiver_location: formData.receiver_location,
            receiver_email: formData.receiver_email,
            receiver_phone: formData.receiver_phone,
            shipment_id: formData.shipment_id,
            total_pieces: formData.total_pieces,
            weight: formData.weight,
            volume: formData.volume,
            vessel: formData.vessel,
            place_of_acceptance: formData.place_of_acceptance,
            estimated_departure_date: formData.estimated_departure_date,
            estimated_arrival_date: formData.estimated_arrival_date,
            place_of_delivery: formData.place_of_delivery,
            current_location: locationData.current_location ,
            info_on_shipment: locationData.shipment_info ,
            final_destination: final
        }
        try{
            setIsLoading(true)
            await axios.patch("/api/edit_shipment", data)
            .then(()=>{
                toast.success("Updated successfully")
                router.push("/shipment")
            })
            .catch((error)=>{
                console.error("error",error.response.data.message)
                toast.error(error.response.data.message)
            })

        }catch(error){
            toast.error("An error occured")
        }finally{
            setIsLoading(false)
        }
    }
    
    React.useEffect(()=> {
        const fetchData = async () => {
            
            const shipment = await getUniqueShipment(path)
            if(shipment.length > 0 && shipment !== null){
                setShipmentDetails(shipment)
                setFormData({...formData,
                    sender_name:shipment[0]?.sender_name,
                    sender_location: shipment[0]?.sender_location,
                    receiver_name: shipment[0]?.receiver_email,
                    receiver_location: shipment[0]?.receiver_location,
                    receiver_email: shipment[0]?.receiver_email,
                    receiver_phone: shipment[0]?.receiver_phone,
                    shipment_id: shipment[0]?.shipment_id,
                    total_pieces: shipment[0]?.total_pieces || "",
                    weight: shipment[0]?.weight || "",
                    volume: shipment[0]?.volume || "",
                    vessel: shipment[0]?.vessel_name,
                    place_of_acceptance: shipment[0]?.place_of_acceptance || "",
                    estimated_departure_date: shipment[0]?.estimated_departure_date.toJSON().split("T")[0],
                    estimated_arrival_date: shipment[0]?.estimated_arrival_date.toJSON().split("T")[0],
                    place_of_delivery: shipment[0]?.place_of_delivery,
                })
            }else{
                    toast.error("This shipment does not exist")
                    router.push("/shipment")
                }
    
            const locations = await getUniqueShipmentLocations(shipment[0]?.id!)
            setTrackingLocations(locations)

        }
        fetchData()

    }, [])

  return (
    <div>
        <div className='flex  justify-between items-center border-2 px-3 py-2 shadow-md'>
            <h2>Edit shipment</h2>
            {shipmentDetails[0]?.shipment_id && (<p>Shipment Code: <span className='font-bold'>{shipmentDetails[0]?.shipment_id}</span></p>)}
            
        </div>
        {shipmentDetails.length > 0 ? 
            <form className='px-3 py-5' onSubmit={onSubmit}>
                    <div className='space-y-4 pb-4'>      
                        <h3 className='font-bold text-2xl'>Contact Details</h3>
                        <hr className='w-[100px] h-1 border-2 border-amber-500'/>
                        <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:md:space-x-7'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Sender's Name</label>
                                <input type='text' name='sender_name' value={formData.sender_name} onChange={onChange} placeholder="Sender's Name" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                                <small className='text-xs font-medium'>This is the sender's full name</small>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Sender's Location</label>
                                <input type='text' name='sender_location' value={formData.sender_location} onChange={onChange} placeholder="Sender's Location" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                                <small  className='text-xs font-medium'>This is the sender's location</small>
                            </div>
                        </div>
                        <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Receiver's Name</label>
                                <input type='text' name='receiver_name' value={formData.receiver_name}  onChange={onChange} placeholder="Receiver's Name" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                                <small className='text-xs font-medium'>This is the receiver's full name</small>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Receiver's Location</label>
                                <input type='text' name='receiver_location' value={formData.receiver_location} onChange={onChange} placeholder="Receiver's Location" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                                <small  className='text-xs font-medium'>This is the Receiver's location</small>
                            </div>
                        </div>
                        <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Receiver's Email</label>
                                <input type='email' name='receiver_email' value={formData.receiver_email} onChange={onChange} placeholder="Receiver's Email" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                                <small className='text-xs font-medium'>This is the Receiver's Email</small>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Receiver's Phone</label>
                                <input type='number' name='receiver_phone' value={formData.receiver_phone} onChange={onChange} placeholder="Receiver's Phone" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                                <small  className='text-xs font-medium'>This is the Receiver's Phone</small>
                            </div>
                        </div>

                    </div>
                    <div className='space-y-4 pb-4'>      
                        <h3 className='font-bold text-2xl'>Shipment Details</h3>
                        <hr className='w-[100px] h-1 border-2 border-amber-500'/>
                        <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Shipment ID</label>
                                <input type='text' name='shipment_id' value={formData.shipment_id} onChange={onChange} placeholder="What is the tracking Code?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                                <small  className='text-xs font-medium'>This is the tracking code</small>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Total Pieces</label>
                                <input type='number' name='total_pieces' value={formData.total_pieces} onChange={onChange} placeholder="How many Shipmemts?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                                <small className='text-xs font-medium'>This is the total number of all the shipment.</small>
                            </div>
                        </div>
                        <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Weight</label>
                                <input type='number' name='weight' value={formData.weight} onChange={onChange} placeholder="What's the weight?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                                <small  className='text-xs font-medium'>This is the weight of the shipments</small>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Volume</label>
                                <input type='number' name='volume' value={formData.volume} onChange={onChange} placeholder="What's the volume?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                                <small className='text-xs font-medium'>This is the volume of the shipments</small>
                            </div>
                        </div>
                        
                    </div>
                    <div className='space-y-4 pb-4'>      
                        <h3 className='font-bold text-2xl'>Master Details</h3>
                        <hr className='w-[100px] h-1 border-2 border-amber-500'/>
                        <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Vessel Name</label>
                                <input type='text' name='vessel' value={formData.vessel} onChange={onChange} placeholder="What is the vessel name?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                                <small  className='text-xs font-medium'>This is the vessel name</small>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Place of Acceptance</label>
                                <input type='text' name='place_of_acceptance' value={formData.place_of_acceptance} onChange={onChange} placeholder="What's the port of acceptance?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                                <small className='text-xs font-medium'>This is the port of acceptance</small>
                            </div>
                        </div>
                        <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Estimated Departure Date</label>
                                <input type='date' name='estimated_departure_date' value={formData.estimated_departure_date} onChange={onChange} placeholder="When is the departure date?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                                <small className='text-xs font-medium'>This is the departure date.</small>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold'>Estimated Arrival Date</label>
                                <input type='date' name='estimated_arrival_date' value={formData.estimated_arrival_date} onChange={onChange} placeholder="What's the arrival date?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                                <small  className='text-xs font-medium'>This is the estimated date of arrival.</small>
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Place of Delivery</label>
                            <input type='text' name='place_of_delivery' value={formData.place_of_delivery} onChange={onChange} placeholder="What's the port of delivery?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                            <small className='text-xs font-medium'>This is the port of delivery</small>
                        </div>

                        
                    </div>
                    <hr className='w-full h-1 border-2 border-amber-500'/>
                    <div className='flex justify-between items-center  px-3 py-2 '>
                        <h2></h2>
                        <div className='flex items-center cursor-pointer space-x-1 text-xs bg-amber-500 rounded-md py-1 px-3' onClick={()=>setIsLocationForm(!isLocationForm)}>
                            <Plus size={15} />
                            <button type='button'> Add Location</button>
                        </div>
                    </div>
                    {isLocationForm && 
                        <div>
                            <div className=' flex flex-wrap md:flex-nowrap justify-between w-full pb-2 md:space-x-7'>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor='' className='font-bold flex items-center '><LocateIcon size={15} className='mr-2'/> Location/ Region</label>
                                    <input type='text' name='current_location' value={locationData.current_location} onChange={onLocationChange} placeholder="Current location" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                                    <small className='text-xs font-medium'>This is the current Location.</small>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor='' className='font-bold flex items-center'><Bookmark size={15} className='mr-2'/> Info on the shipment </label>
                                    <input type='text' name='shipment_info' value={locationData.shipment_info} onChange={onLocationChange} placeholder="Give info about the current location" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                                    <small  className='text-xs font-medium'>This is the basic info about the shipment's current location.</small>
                                </div>
                            </div>
                            <div className='flex flex-col w-full pb-5'>
                                <label htmlFor='' className='font-bold flex items-center'><Bus size={15} className='mr-2'/>Is this the final destination?</label>
                                <select className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' name='final_destination' >
                                    <option>--select--</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <small  className='text-xs font-medium'>This is the final date of arrival.</small>
                            </div>

                        </div>
                    }
                    {trackingLocations.length > 0 &&
                        <div>
                            <div>
                                <table >
                                    <thead>
                                        <tr>
                                            <th>Current Location</th>
                                            <th>Info</th>
                                            <th>Date</th>
                                            <th>Shipment Validity</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {trackingLocations.slice(trackingLocations.length -1).map((location, index)=> 
                                        <>
                                            {location.final_destination === true &&
                                                <tr key={index}>
                                                    <td>{location.current_location}</td>
                                                    <td className='flex items-center'> Shipment Delivered </td>
                                                    <td>{location.createdAt.toUTCString()}</td>
                                                    <td className='text-green-500 font-bold'>Delivered</td>
                                                </tr>
                                            }
                                        </>
                                        )}
                                            {trackingLocations.slice(1).reverse().map((locations, index)=> (
                                                <tr key={index}>
                                                    <td>{locations.current_location}</td>
                                                    <td className='flex items-center'> {locations.info_on_current_location}</td>
                                                    <td>{locations.createdAt.toUTCString()}</td>
                                                    <td className='text-amber-500 font-bold'>Processing</td>
                                                    <td className=' items-center md:flex hidden'> <Edit className='pr-2 w-7 h-7' onClick={()=> {setLocationData(locations), setIsLocationForm(true)}}/> Edit</td>
                                                    <td ><button type='button' className='bg-red-500 md:block hidden py-2 px-3 text-white rounded-md' onClick={()=>onDelete(locations.id)}>Delete</button></td>

                                                </tr>

                                            ))}
                                            {trackingLocations.slice(0,1).map((locations:any, index:any) =>(
                                                <tr key={index}>
                                                    <td>{locations.current_location}</td>
                                                    <td className='flex items-center'> {locations.info_on_current_location}</td>
                                                    <td>{locations.createdAt.toUTCString()}</td>
                                                    <td className='text-red-500 font-bold'>Pick Up</td>
                                                    <td className=' items-center md:flex hidden '> <Edit className='pr-2 w-7 h-7 cursor-pointer'/> Edit </td>
                                                    <td ><button type='button' className='bg-red-500 md:block hidden py-2 px-3 text-white rounded-md' onClick={()=>onDelete(locations.id)}>Delete</button></td>
                                                </tr>
                                            ))}
                                            
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                    <div className='py-3'>
                        <button className={` py-2 px-6 rounded-md text-white font-bold ${isLoading ? "!bg-blue-200": "bg-blue-500"}`}>{isLoading ? (<><span className='flex'><Loader className='animate-spin' />Updating...</span></> ) : "Edit Shipment"}</button>
                    </div>
            </form>
        :
        <div className='flex flex-col items-center  space-y-2 py-5'>
            <p className='text-center text-2xl'><Loader2 className='animate-spin' size={60}/></p>
                   
        </div> 
        }
    </div>
  )
}

export default ShipmentForm