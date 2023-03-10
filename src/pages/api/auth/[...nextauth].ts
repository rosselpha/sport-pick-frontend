import NextAuth from 'next-auth/next';
import GoogleProvider from "next-auth/providers/google";
import connectToDB from '@/lib/utils/db'
import { hashPassword, verifyPassword } from '@/lib/utils/auth'

import User  from '@/lib/models/user'

import CredentialsProvider from "next-auth/providers/credentials";
// import { User } from 'next-auth/core/types';

const url = process.env.NEXT_PUBLIC_API_URL as string;


export default NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                await connectToDB().catch(err => console.log({error: err.message}))

                if(credentials?.email && credentials.password){

                    const existingUser = await User.findOne({email:credentials.email}).exec();

                    // console.log(existingUser)
                    if(existingUser===null|| !existingUser ) throw new Error("user does not exsist")

                    const isValid = await verifyPassword(credentials.password, existingUser.password )
                    
                    if(!isValid) throw new Error("could not log you in");

                    return existingUser
                }
            } 
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async jwt({token, user, account, isNewUser}){
            return token
        },
        async session({session, token, user}) {

            return session
        }
    }
})

