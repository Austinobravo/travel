"use client"
import axios from 'axios'
import { Bookmark, Bus, Loader, LocateIcon, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const ShipmentForm = () => {
    const [isLocationForm, setIsLocationForm] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [trackingLocations, setTrackingLocations] = React.useState([])
    const router = useRouter()

    const onSubmit = async (e:any) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        let final_destination = form.get("final_destination") || false
        if(final_destination === "Yes"){
            final_destination = true         
        }else{
            final_destination = false         
        }

        const data = {
            sender_name: form.get("sender"),
            sender_location: form.get("sender_location"),
            receiver_name: form.get("receiver"),
            receiver_location: form.get("receiver_location"),
            receiver_email: form.get("receiver_email"),
            receiver_phone: form.get("receiver_phone"),
            shipment_id: form.get("shipment_id"),
            total_pieces: form.get("total_pieces"),
            weight: form.get("weight"),
            volume: form.get("volume"),
            vessel: form.get("vessel"),
            place_of_acceptance: form.get("place_of_acceptance"),
            estimated_departure_date: form.get("estimated_departure_date"),
            estimated_arrival_date: form.get("estimated_arrival_date"),
            place_of_delivery: form.get("place_of_delivery"),
            current_location: form.get("current_location"),
            info_on_shipment: form.get("shipment_info"),
            final_destination: final_destination
        }
        try {
            setIsLoading(true)
            console.log("data",Object.entries(data))
            await axios.post("/api/add_shipment", data)
            .then((response)=>{
                console.log("response", response);
                toast.success(`${response.data} was created sucessfully`)
                router.push("/shipment")

            })
            .catch((error:any)=>(
                toast.error(`${error}`)
            ))
            
        }catch(error){
            toast.error("An error ocurred")
        }finally{
            setIsLoading(false)
        }
    }

    // React.useEffect(()=> {
    //     const =
    // })
  return (
    <div>
        <form className='px-3 py-5' onSubmit={onSubmit}>
                <div className='space-y-4 pb-4'>      
                    <h3 className='font-bold text-2xl'>Contact Details</h3>
                    <hr className='w-[100px] h-1 border-2 border-amber-500'/>
                    <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Sender's Name</label>
                            <input type='text' name='sender' placeholder="Sender's Name" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                            <small className='text-xs font-medium'>This is the sender's full name</small>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Sender's Location</label>
                            <input type='text' name='sender_location' placeholder="Sender's Location" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                            <small  className='text-xs font-medium'>This is the sender's location</small>
                        </div>
                    </div>
                    <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Receiver's Name</label>
                            <input type='text' name='receiver' placeholder="Receiver's Name" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                            <small className='text-xs font-medium'>This is the receiver's full name</small>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Receiver's Location</label>
                            <input type='text' name='receiver_location' placeholder="Receiver's Location" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                            <small  className='text-xs font-medium'>This is the Receiver's location</small>
                        </div>
                    </div>
                    <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Receiver's Email</label>
                            <input type='email' name='receiver_email' placeholder="Receiver's Email" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                            <small className='text-xs font-medium'>This is the Receiver's Email</small>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Receiver's Phone</label>
                            <input type='number' name='receiver_phone' placeholder="Receiver's Phone" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
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
                            <input type='text' name='shipment_id' placeholder="What is the tracking Code?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                            <small  className='text-xs font-medium'>This is the tracking code</small>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Total Pieces</label>
                            <input type='number' name='total_pieces' placeholder="How many Shipmemts?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                            <small className='text-xs font-medium'>This is the total number of all the shipment.</small>
                        </div>
                    </div>
                    <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Weight</label>
                            <input type='number' name='weight' placeholder="What's the weight?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                            <small  className='text-xs font-medium'>This is the weight of the shipments</small>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Volume</label>
                            <input type='number' name='volume' placeholder="What's the volume?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
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
                            <input type='text' name='vessel' placeholder="What is the vessel name?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                            <small  className='text-xs font-medium'>This is the vessel name</small>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Place of Acceptance</label>
                            <input type='text' name='place_of_acceptance' placeholder="What's the port of acceptance?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                            <small className='text-xs font-medium'>This is the port of acceptance</small>
                        </div>
                    </div>
                    <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Estimated Departure Date</label>
                            <input type='date' name='estimated_departure_date' placeholder="When is the departure date?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                            <small className='text-xs font-medium'>This is the departure date.</small>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Estimated Arrival Date</label>
                            <input type='date' name='estimated_arrival_date' placeholder="What's the arrival date?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                            <small  className='text-xs font-medium'>This is the estimated date of arrival.</small>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='' className='font-bold'>Place of Delivery</label>
                        <input type='text' name='place_of_delivery' placeholder="What's the port of delivery?" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
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
                                <input type='text' name='current_location' placeholder="Current location" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                                <small className='text-xs font-medium'>This is the current Location.</small>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='' className='font-bold flex items-center'><Bookmark size={15} className='mr-2'/> Info on the shipment </label>
                                <input type='text' name='shipment_info' placeholder="Give info about the current location" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                                <small  className='text-xs font-medium'>This is the basic info about the shipment's current location.</small>
                            </div>
                        </div>
                        <div className='flex flex-col w-full pb-5'>
                            <label htmlFor='' className='font-bold flex items-center'><Bus size={15} className='mr-2'/>Is this the final destination?</label>
                            <select className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' name='final_destination'>
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
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <td>New York</td>
                                        <td className='flex items-center'> Shipment Delivered</td>
                                        <td>Wednesday 12th June 2023</td>
                                        <td className='text-green-500 font-bold'>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td>Preston</td>
                                        <td className='flex items-center'> Estimated Arrival Date</td>
                                        <td>Wednesday 12th June 2023</td>
                                        <td className='text-amber-500 font-bold'>Processing</td>
                                    </tr>
                                    <tr>
                                        <td>Trenton</td>
                                        <td className='flex items-center'> Actual Pickup Date (customer)</td>
                                        <td>Wednesday 12th June 2023</td>
                                        <td className='text-red-500 font-bold'>Pick Up</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                <div className='py-3'>
                    <button className={` py-2 px-6 rounded-md text-white font-bold ${isLoading ? "bg-blue-200": "bg-blue-500"}`}>{isLoading ? (<><span className='flex'><Loader className='animate-spin' />Adding...</span></> ) : "Add Shipment"}</button>
                </div>
        </form>
    </div>
  )
}

export default ShipmentForm