import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
export async function POST(req:Request){
    const body = await req.json()
    const {username, password} = body

    const existingUser = await  prisma.admin.findUnique({
        where:{
            username: username
        }
    })
    if(existingUser) return  NextResponse.json({"message": "This user exists"}, {status:500})

    try{
        const newUser = await prisma.admin.create({
            data:{
                username,
                password
            }
        })
        return NextResponse.json(newUser, {status:201})
    }catch(error){
        return NextResponse.error()
    }
}