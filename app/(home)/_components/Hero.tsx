import React from 'react'
import HeroBg from "@/public/shipment-tracking.png"
import TrackerInput from './_innercomponents/Tracker-Input'
import HeroCard from './_innercomponents/Hero-Card'
const Hero = () => {
    
  return (
    <section>
        <div className='bg-auto bg-center h-[430px] w-full' style={{backgroundImage: `url(/shipment-tracking.png)`}}>
            <div className='bg-black/30 h-[430px]'>
                <div className='md:mx-auto md:w-fit w-full px-7'>
                    <TrackerInput/>

                </div>
            </div>
            <div className='md:-mt-12 -mt-44 px-7 '>
                <HeroCard/>

            </div>
        </div>
      
    </section>
  )
}

export default Hero
