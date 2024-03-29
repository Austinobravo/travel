"use client"
import { getUsers } from '@/lib/getDetails'
import { Edit, Loader2 } from 'lucide-react'
import React from 'react'

const Users = () => {
    const [users, setUsers] = React.useState<any[]>([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(()=>{
        const fetchData = async () => {
            const user = await getUsers()
            setUsers(user)

        }
        fetchData()
    }, [])
  return (
    <div>
        {isLoading ? 
            <div className='flex flex-col items-center  space-y-2 py-5'>
                <p className='text-center text-2xl'><Loader2 className='animate-spin' size={60}/></p>
                        
            </div> 
            :
            <>
                {users.length > 0 ?
                    <table >
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            {users.map((user, index)=> (
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td className='flex items-center text-[#eee] '> <Edit color='#eee' className='pr-2 w-7 h-7'/> Edit</td>
                                    <td><button className='bg-red-200 py-2 px-3 text-white rounded-md'>Delete</button></td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                :
                    <table >
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr >
                                <td>No user</td>
                                <td ></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                }
            </>
        
    }
    </div>
  )
}

export default Users