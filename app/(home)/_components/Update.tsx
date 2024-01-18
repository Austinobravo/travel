import { ChevronRight, ExternalLinkIcon, Globe2Icon, PhoneCallIcon } from 'lucide-react'
import React from 'react'
const items =  [
    {
        headIcon: Globe2Icon,
        heading: "New Deal.",
        description: "Delivering and securing goods of our customers",
        rightIcon: ChevronRight
    },
    {
        headIcon: PhoneCallIcon,
        heading: "SMS Delivery.",
        description: "We optimize our delivery proces to accept the process of notification via SMS.",
        rightIcon: ExternalLinkIcon
    },
]
const Update = () => {
  return (
    <section className='bg-slate-200 md:mt-40 mt-72 px-20 py-5 space-y-10'>
        <h2 className='font-bold text-lg'>Important Updates</h2>
        <div className='flex flex-wrap md:flex-nowrap gap-5'>
            {items.map((item, index) => {
                const HeadIcon = item.headIcon
                const RightIcon = item.rightIcon

                return (
                    <div key={index} className='shadow-md hover:shadow-sm w-full rounded-md items-center space-x-2 bg-white md:w-[300px] flex px-2 py-3 '>
                        <div className='basis-1/4'>
                            <HeadIcon size={40} color='red'/>
                        </div>
                        <div className='basis-1/2 border-l-2 space-y-3 pl-2'>
                            <h3 className='font-bold text-lg'>{item.heading}</h3>
                            <p className='text-black/40 text-xs'>{item.description}</p>
                        </div>
                        <div className='basis-1/4 pl-7'>
                            <RightIcon size={15}/>
                        </div>

                    </div>
                )
            })}
            

        </div>
    </section>
  )
}

export default Update