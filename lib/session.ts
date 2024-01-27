import { options } from '@/app/api/auth/[...nextauth]/option';
import { getServerSession } from 'next-auth';


export function getSession(){
    return getServerSession(options)
}

export async function getCurrentUser(){
    const session = await getSession()
    return session?.user
}