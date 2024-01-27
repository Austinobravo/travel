"use client"
import axios from 'axios'
import { Loader } from 'lucide-react'
import React, { useRef } from 'react'
import toast from 'react-hot-toast'

const ContactForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [countries, setCountries] = React.useState<any[]>([])



    const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = new FormData(event.currentTarget)
        try{
            const data = {
                firstname : form.get("firstname"),
                lastname : form.get("lastname"),
                email : form.get("email"),
                tracking : form.get("tracking"),
                company: form.get("company"),
                country : form.get("country"),
                message : form.get("message"),
                file : (form.get("file") as any).name,
                
            }

            setIsLoading(true)
            await axios.post("/api/support", data)
            .then((res)=>{
                (event.target as HTMLFormElement).reset()
                toast.success("Your message have been received.")
                
            })
            .catch((error)=>{
                toast.error("An error occured.")
                console.log("api", error)
            })
            
        }catch(error){
            toast.error("An error occured")
            console.log("500", error)
        }
        finally{
            setIsLoading(false)
        }

    }
    React.useEffect(()=> {

        const fetchData = async () => {
            await axios.get('https://restcountries.com/v3.1/all')
            .then((response:any)=> {
                const countryOptions = response.data.map((country:any)=>({
                    label: country.name.common
                }))
                countryOptions.sort((a:any , b:any)=> a.label.localeCompare(b.label))
                setCountries(countryOptions)
            })
        }
        fetchData()
    },[])
  return (
    
        <form  className='border-2 w-full rounded-md px-5 py-10 space-y-3' onSubmit={onSubmit}>
                <div className='space-y-2'>
                    <h3 className='font-bold text-2xl'>Your Basic Information</h3>
                    <hr className='w-[100px] h-1 border-2 border-amber-500'/>
                </div>
                
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='firstname' className='font-bold text-base'>First Name</label>
                    <input type='text'  name='firstname' id='firstname' placeholder='Your First Name' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50' required/>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='lastname' className='font-bold text-base'>Last Name</label>
                    <input type='text' name='lastname' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50' id='lastname' placeholder='Your Last Name'/>
                </div>
                <div className='flex flex-col gap-y-2' >
                    <label htmlFor='email' className='font-bold text-base' >Email</label>
                    <input type='email' name='email' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50' id='email' placeholder='Your Email Address' required/>
                </div>
                <div className='pt-7 space-y-5'>
                    <div className='space-y-2'>
                        <h3 className='font-bold text-2xl'>Company Information</h3>
                        <hr className='w-[100px] h-1 border-2 border-amber-500'/>
                    </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='tracking' className='font-bold text-base'>Tracking ID</label>
                            <input type='text' name='tracking' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50' id='tracking' placeholder='Your Tracking ID' required/>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='company' className='font-bold text-base'>Company name</label>
                            <input type='text' name='company' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50' id='company' placeholder='Your Company'/>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor='country' className='font-bold text-base'>Country</label>
                            <select name='country' className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50'>
                                {countries.map((country, index)=> (
                                    <option key={index}>{country.label}</option>
                                ))}
                            </select>


                        </div>

                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='message' className='font-bold text-base'>Your Message</label>
                    <textarea name='message' rows={10} className=' w-full border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50' required/>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor='file' className='font-bold text-base'>Files- (if any)</label>
                    <input type='file' name='file' id='file'  className='border-2 outline-none py-2 px-3 rounded-md placeholder:text-black/50'/>
                </div>
                <div className={` ${isLoading ? "!bg-red-200": "bg-red-500"} py-1  text-white px-4 hover:border-red-500 hover:border hover:bg-transparent hover:text-red-500 w-fit rounded-md`}>
                    <button type='submit'>{isLoading ? (<><span className='flex'><Loader className='animate-spin' />Sending...</span></> ) : "Send your message"}</button>

                </div>
        </form>
   
  )
}

export default ContactForm