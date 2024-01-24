"use client"
import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'

const ShipmentDetails = () => {
    const [isToggle, setIsToggle] = React.useState(true)
  return (
    <section>
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
                                            <td>16</td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td>2811 KGM</td>
                                        </tr>
                                        <tr>
                                            <td>Volume (MTQ)</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <td>Shipment ID</td>
                                            <td>ABC123</td>
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
                                            <td>SEATRADE ORANGE</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Departure Date</td>
                                            <td>February, 03 2023 18:00 (UTC-04:00)</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Arrival Date</td>
                                            <td>March, 28 2023 22:00 (UTC+13:00)</td>
                                        </tr>
                                        <tr>
                                            <td>Place of Acceptance</td>
                                            <td>Trenton</td>
                                        </tr>
                                        <tr>
                                            <td>Place of Delivery</td>
                                            <td>Auckland</td>
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
                                            <td>Clinton Harold</td>
                                        </tr>
                                        <tr>
                                            <td>Sender's Location</td>
                                            <td>Oil mill base, New York</td>
                                        </tr>
                                        <tr>
                                            <td>Receiver's Name</td>
                                            <td>Esther Harold</td>
                                        </tr>
                                        <tr>
                                            <td>Receiver's Location</td>
                                            <td>Trenton,New York</td>
                                        </tr>
                                        <tr>
                                            <td>Receiver's Email</td>
                                            <td>esther@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Receiver's Phone</td>
                                            <td>+1 303 2901 93</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                        }
        </div>
    </section>
  )
}

export default ShipmentDetails