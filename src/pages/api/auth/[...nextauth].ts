import NextAuth from 'next-auth/next';
import GoogleProvider from "next-auth/providers/google";
import axios from 'axios';

import CredentialsProvider from "next-auth/providers/credentials";
// import { User } from 'next-auth/core/types';

const url = process.env.NEXT_PUBLIC_API_URL as string;


export default NextAuth({
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID!,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        // })
        CredentialsProvider({
            name: 'Custom Provider',
            credentials: {
                email: { label: "Email", type: "email" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials) {

            const res = await fetch(url+'/auth/login' , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
              }); 
                const data = await res.json();
                if (data) {

                    //console.log(data)
                    return data
                  } else {
                    return null
                }
            } 
        })
    ],
    secret: process.env.JWT_SECRET,
    
    callbacks: { 

        async jwt({token, user, account, profile, isNewUser}) { 

            if (user) {
                const newToken = {
                accessToken: user.token,
                id: user.user.id,
                useremail: user.user.email,
                username: user.user.username,

                };
                //console.log(user)
                return newToken;
            }     
            //console.log(token)   
            return token;
        },
        async session({session, token, user}){

            //session = token.accessToken;
            session.accessToken = token.accessToken as string;
            session.id = token.id as string;
            session.user.email = token.useremail as string;
            session.user.username = token.username as string;

            
            //user = await axios.get(url+'/auth/me', {}).then(res => res.data);


            return session
        },
    },
   
})

