import { AirVent, Bus, CalendarCheck, Music4Icon, QuoteIcon } from 'lucide-react'
import React from 'react'

const items = [
    {
        icon: CalendarCheck,
        heading: "Ship Now",
        paragraph: "Find the right service"
    },
    {
        icon: Bus,
        heading: "Get Reliable Service",
        paragraph: "Cargo shpment can't get any better."
    },
    {
        icon: AirVent,
        heading: "Travel",
        paragraph: "Shipping reguarly, request a discount"
    },
]
const HeroCard = () => {
  return (
    <div className=' rounded-md flex flex-col md:flex-row gap-y-2 justify-center'>
        {items.map((item, index) => {
            const Icon = item.icon
            return (
                <div key={index} className='flex space-y-3 md:w-[300px] w-full  rounded-sm bg-white px-2 py-5 hover:shadow-lg hover:bg-slate-100 shadow flex-col justify-center items-center'>
                    <div>
                        <Icon size={30} color='red'/>
                    </div>
                    <h2 className='font-bold text-lg'>
                        {item.heading}
                    </h2>
                    <p className='text-black/40 text-xs'>
                        {item.paragraph}
                    </p>


                </div>

            )
        })}


      
    </div>
  )
}

export default HeroCard
