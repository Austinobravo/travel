import React from 'react'

const ContactForm = () => {
  return (
    
        <form className='border-2 w-full rounded-md px-5 py-10 space-y-3'>
                <div className='space-y-2'>
                    <h3 className='font-bold text-2xl'>Your Basic Information</h3>
                    <hr className='w-[100px] h-1 border-2 border-amber-500'/>
                </div>
                
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='firstname' className='font-bold text-base'>First Name</label>
                    <input type='text' name='firstname' id='firstname' placeholder='Your First Name' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50'/>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='lastname' className='font-bold text-base'>Last Name</label>
                    <input type='text' name='lastname' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50' id='lastname' placeholder='Your Last Name'/>
                </div>
                <div className='flex flex-col gap-y-2' >
                    <label htmlFor=''className='font-bold text-base' >Email</label>
                    <input type='email' name='email' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50' id='email' placeholder='Your Email Address'/>
                </div>
                <div className='pt-7 space-y-5'>
                    <div className='space-y-2'>
                        <h3 className='font-bold text-2xl'>Company Information</h3>
                        <hr className='w-[100px] h-1 border-2 border-amber-500'/>
                    </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='' className='font-bold text-base'>Tracking ID</label>
                            <input type='text' name='tracking' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50' id='tracking' placeholder='Your Tracking ID'/>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='' className='font-bold text-base'>Company name</label>
                            <input type='text' name='company' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50' id='company' placeholder='Your Email Address'/>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='' className='font-bold text-base'>Country</label>
                            <select className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50'>
                                <option>Nigeria</option>
                            </select>


                        </div>

                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='message' className='font-bold text-base'>Your Message</label>
                    <textarea rows={10} className=' w-full border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50'/>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='file' className='font-bold text-base'>Files- (if any)</label>
                    <input type='file' name='file' id='file' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50'/>
                </div>
                <div className='py-1 bg-red-500 text-white px-4 hover:border-red-500 hover:border hover:bg-transparent hover:text-red-500 w-fit rounded-md'>
                    <button type='submit'>Send your message</button>
                </div>
        </form>
   
  )
}

export default ContactForm