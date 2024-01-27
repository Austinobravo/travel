import  prisma  from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request){
    const body = await req.json()
    console.log("body", body)
    const {firstname, lastname, email, tracking, company,country, message, file} = body

    try{
       
        const newMessage = await prisma.support.create({
            data:{
                firstname:firstname,
                lastname:lastname,
                email:email,
                tracking_id: tracking,
                company:company,
                country:country,
                message:message,
                file:file
            }
        })
        
        return NextResponse.json(newMessage, {status:201})
    }catch(error){
        console.error("error", error)
        return NextResponse.error()
    }
}