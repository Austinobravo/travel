import React from 'react'
import TrackerInput from '../(home)/_components/_innercomponents/Tracker-Input'
import ShipmentDetails from './_components/ShipmentDetails'
import AllLocation from './_components/AllLocation'
import PrintButton from './_components/PrintButton'
import Footer from '../(home)/_components/Footer'
import Navbar from '../(home)/_components/Navbar'

const page = () => {
  return (
    <>
    <Navbar/>
    <section className='pt-20'>
        <div className='text-center md:text-4xl text-2xl font-medium py-10'>
            <h2>TRACK: AIR & OCEAN FREIGHT</h2>
        </div>
        <div className='bg-slate-200  flex flex-col justify-center items-center'>
            <div className='w-full md:w-fit px-7 md:px-0'>
                <TrackerInput/>
                
            </div>
            <div className='w-full md:px-52 px-7 py-5 mb-10 '>
                <div className='bg-white border-2 rounded-md border-black/50  py-10  w-full divide-y-2'>
                    <div className='px-7 pb-6 flex justify-between gap-y-2 flex-wrap md:flex-nowrap'>
                        <div className='text-base space-y-2'>
                            <h2>Tracking Code: <span className="font-bold">YYZA12081</span></h2>
                            <p className='text-xs'>This shipment is handled by: <span className="font-bold">Travel Cargo</span></p>
                        </div>
                        <div >
                            <PrintButton/>
                        </div>
                        
                    </div>
                    <div className='px-7 py-6 space-y-4'>
                        <div>
                            <h3 className='text-xl text-green-500 font-bold pb-2'>Shipment Delivered</h3>
                            <p className='text-xs'>March, 30 2023 16:02 (UTC+13:00), Auckland</p>
                        </div>
                        <div className='text-xs font-bold w-full space-y-2  py-2 px-1'>
                            <p><span className='text-red-500'>Origin</span> : Toronto, Canada</p>
                            <hr/>
                            <p className='w-fit ml-auto'><span className='font-bold text-green-500'>Destination</span> : Auckland, New Zealand</p>
                        </div>
                    </div>
                    <div>
                        <ShipmentDetails/>

                    </div>
                    <div>
                        <AllLocation/>
                    </div>
                    

                </div>
                
            </div>
        </div>
        <div className='bg-white py-10 '>

        </div>
      
    </section>
    <Footer/>
    </>
  )
}

export default page
