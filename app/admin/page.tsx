"use client"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const page = () => {
    const  router = useRouter()
    

    const onSubmit = async(e:any) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const username = form.get("username")
        const password = form.get("password")
        console.log("user",username,password)
        try {
            const data = await signIn("credentials", {
                username: username,
                password: password,
                redirect: false,
            })

            if(data?.error) return toast.error(`${data.error}`)
            if(data?.url) router.push(`/dashboard`)

            
        } catch (error) {
            toast.error(`${error}`)
        }

    }

  return (
    <section className='flex flex-col justify-center items-center mx-auto   h-screen'>
        <div className=''>
            <div className='bg-blue-700 py-3 px-40  font-bold rounded-t-md  shadow-lg text-white'>
                <h1>Admin Page</h1>
            </div>
            <form className='bg-white shadow-md  border-2 rounded-b-md py-7 px-6 space-y-4' onSubmit={onSubmit}>
                <div className='flex flex-col space-y-2 ' >
                    <label htmlFor='username' className='text-base font-bold'>Username</label>
                    <input type='text' name='username' id='username' placeholder='Your username' className='border-2 px-2 py-2 rounded-md '/>
                </div>
                <div className='flex flex-col space-y-2 '>
                    <label htmlFor='password' className='text-base font-bold'>Password</label>
                    <input type='password' name='password' id='password' placeholder='Your password' className='border-2 px-2 py-2 rounded-md '/>
                </div>
                <div className=''>
                    <button type='submit' className='bg-blue-700 rounded-md py-2 text-white text-center w-full'>Sign in</button>
                </div>

            </form>
        </div>
    </section>
  )
}

export default page