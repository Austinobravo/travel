import React from 'react'
import TrackerInput from '../(home)/_components/_innercomponents/Tracker-Input'
import Review from './_components/Review'
import Navbar from '../(home)/_components/Navbar'
import Footer from '../(home)/_components/Footer'

const Track = () => {
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
            <div className='w-full md:px-52 px-7 mb-10'>
                <Review/>
            </div>
        </div>
        <div className='bg-white py-10 '>

        </div>

    </section>
    <Footer/>
    </>
  )
}

export default Track