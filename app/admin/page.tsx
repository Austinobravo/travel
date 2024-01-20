import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col justify-center items-center mx-auto   h-screen'>
        <div className=''>
            <div className='bg-blue-700 py-3 px-40  font-bold rounded-t-md  shadow-lg text-white'>
                <h1>Admin Page</h1>
            </div>
            <form className='bg-white shadow-md  border-2 rounded-b-md py-7 px-6 space-y-4'>
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