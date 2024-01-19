import React from 'react'
import Image from 'next/image'
import { BookmarkPlusIcon, Building2, HeartHandshakeIcon, HourglassIcon, PlaneIcon, PlaneLandingIcon, PlaneTakeoff, Ship, TrainTrack, Truck } from 'lucide-react'

const items =[
    {
        paragraph: "Next Possible Business Day",
        icon: PlaneTakeoff
    },
    {
        paragraph: "Tailored Business Solutions",
        icon: BookmarkPlusIcon
    },
    {
        paragraph: "Flexible Import/Export Options",
        icon: Building2
    },
    {
        paragraph: "Wide Variety of Optional Services",
        icon: HeartHandshakeIcon
    },
]
const nextItems =[
    {
        paragraph: "Air Freight",
        icon: PlaneLandingIcon
    },
    {
        paragraph: "Ocean Freight",
        icon: Ship
    },
    {
        paragraph: "Road Freight",
        icon: Truck
    },
    {
        paragraph: "Rail Freight",
        icon: TrainTrack
    },
]
const Document = () => {
  return (
    <section className='md:px-16 px-7 pt-32 pb-40 space-y-20'>
        <div className=' flex flex-wrap md:flex-nowrap  space-y-2 relative'>
            <div className='shadow-2xl rounded-md py-28 px-5 md:w-[600px] w-full md:absolute mt-10  bg-white'>
                <div className='space-y-4 pb-4'>
                    <h2 className='font-bold text-3xl'>Document and Parcel Shipping</h2>
                    <p className='text-2xl  pb-2 '>For All Shippers</p>
                    <hr className='w-[100px] border-2 border-amber-400'/>
                    <p className='text-base'>Learn about Travel – the undisputed global leader in international express shipping.</p>
                </div>
                <div className='bg-slate-200 py-10 px-5 space-y-5'>
                    <h2 className='font-bold text-xl'>Services Available</h2>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                        {items.map((item, index) => {
                            const Icon = item.icon 
                            return (
                                <div key={index} className='flex  gap-2 items-center'>
                                    <div className='bg-amber-400  py-2 px-4 flex items-center justify-center rounded-md'><Icon size={20}/></div>
                                    <div className='text-black/70 text-xs'>{item.paragraph}</div>       
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
            <div className='ml-auto'>
                <Image src="/final-mile-delivery-scaled.jpeg" width={700} height={1000} alt='delivery' className='md:h-[700px]'/>
            </div>
        </div>
        <div className=' flex flex-wrap md:flex-nowrap relative'>
            <div className=''>
                <Image src="/cargo.jpg" width={700} height={1000} alt='delivery' className='md:h-[700px]'/>
            </div>
            <div className='shadow-2xl rounded-md py-28 px-5 md:w-[600px] w-full md:absolute mt-10 right-0  bg-white'>
                <div className='space-y-4 pb-4'>
                    <h2 className='font-bold text-3xl'>Cargo Shipping</h2>
                    <p className='text-2xl  pb-2 '>Business Only</p>
                    <hr className='w-[100px] border-2 border-amber-400'/>
                    <p className='text-base'>Discover shipping and logistics service options from DHL Global Forwarding.</p>
                </div>
                <div className='bg-slate-200 py-10 px-5 space-y-5'>
                    <h2 className='font-bold text-xl'>Services Available</h2>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                        {nextItems.map((item, index) => {
                            const Icon = item.icon 
                            return (
                                <div key={index} className='flex  gap-2 items-center'>
                                    <div className='bg-amber-400  py-2 px-4 flex items-center justify-center rounded-md'><Icon size={20}/></div>
                                    <div className='text-black/70 text-xs'>{item.paragraph}</div>       
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Document
