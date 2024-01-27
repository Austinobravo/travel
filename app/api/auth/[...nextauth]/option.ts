import prisma from "@/lib/prisma";
import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";


export const options:NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "username",
                    type: "text",
                    placeholder: "Your username"
                },
                password: {
                    label: "password",
                    type: "text",
                    placeholder: "Your password"
                },
            },
            async authorize(credentials:any){
                if(!credentials.username || !credentials.password ) throw new Error("Invalid credentials")
                
                const user = await prisma.admin.findUnique({
                    where:{
                        username:credentials.username
                    }
                })
                
                if (!user ) throw new Error("User not found")

                if(user.password !== credentials.password) throw new Error("Wrong Password")

                const {password, ...userWithoutPass} = user
                return userWithoutPass

            }
        })
    ],
    pages:{
        signIn: "/admin",
        error: "/admin"
    },
    session:{
        strategy: "jwt",
        maxAge: 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",

    callbacks: {
        session: async ({session, token, user}) => {
            if(session.user){
                session.user.id = token.id as any
                session.user.username = token.username as string
            }
            return session
        },
        jwt: async  ({user, token}) => {
                const dbUser = await prisma.admin.findUnique({
                where: {
                    username: token.username ? token.username : (user as any).username ,
                },
            })
            if (!dbUser){
                token.id = user.id
                return token
            }

            return {
                id: dbUser.id,
                username: dbUser.username,
                password: dbUser.password
            }
        }
    }

}