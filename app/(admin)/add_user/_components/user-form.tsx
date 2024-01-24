"use client"
import axios from 'axios'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const UserForm = () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const router = useRouter()
    const onSubmit = async (e:any) => {
        e.preventDefault()

        try{
            const form = new FormData(e.currentTarget)
            const username = form.get("username")
            const password = form.get("password")
            setIsLoading(true)
            axios.post("/api/users", {username, password})
            .then((res)=> {
                toast.success("Created Succesfully")
                router.push("/users")
            })
            .catch((error)=>{
                toast.error(`${error.response.data.message}`)
            })


        }catch(error)
        {
            
        }finally{
            setIsLoading(false)
        }
    }
  return (
    <div>
        <form className='px-3 py-5' onSubmit={onSubmit}>
                <div className='space-y-4 pb-4'>      
                    <h3 className='font-bold text-2xl'>User Details</h3>
                    <hr className='w-[100px] h-1 border-2 border-amber-500'/>
                    <div className=' flex flex-wrap md:flex-nowrap justify-between w-full  md:space-x-7'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Username</label>
                            <input type='text' name='username' placeholder="Username" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md' />
                            <small className='text-xs font-medium'>This is the username</small>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='' className='font-bold'>Password</label>
                            <input type='text' name='password' placeholder="Password" className='border-2 py-2 px-3 w-full border-blue-500 focus:border-amber-500 outline-none rounded-md'/>
                            <small  className='text-xs font-medium'>This is the password</small>
                        </div>
                    </div>
                </div> 
                <div className='py-3'>
                    <button className={` py-2 px-6 rounded-md text-white font-bold ${isLoading ? "bg-blue-200": "bg-blue-500"}`}>{isLoading ? (<><span className='flex'><Loader className='animate-spin' />Adding...</span></> ) : "Add User"}</button>
                </div>
        </form>
    </div>
  )
}

export default UserForm