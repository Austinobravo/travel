import React from 'react'
import Navbar from '../(home)/_components/Navbar'
import Footer from '../(home)/_components/Footer'
import ContactForm from './_components/contact-form'

const page = () => {
  return (
    <>
    <Navbar/>
    <section className='px-10 py-20 pt-28'>
        <div className='px-7 space-y-4 pb-5'>
            <h3 className='md:text-4xl text-xl font-bold'>Contact Kiwk Courier for your Shipment</h3>
            <p className='text-sm font-medium'>Do you have an inquiry with your shipment?</p>
            <p className='text-xs text-red-500'>Please fill in the form</p>
        </div>
        <div  className='flex w-full md:px-52 sm:px-20 px-2 flex-col justify-center items-center  '>
            <ContactForm/>
            
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default page