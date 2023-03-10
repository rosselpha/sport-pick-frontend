import connectToDB from "@/lib/utils/db";
import EmailList from "@/lib/models/emailList";
import { NextApiRequest, NextApiResponse } from "next";

export default async function verifyEmailHandler(req:NextApiRequest, res:NextApiResponse){
    
    const{token} = req.body
    try{
        if (req.method !== 'POST') {
            return;
        }
        connectToDB().catch(err => res.json({error: err.message}))
        const verifyEmail = await EmailList.findOne({verifyToken:token})
        
        verifyEmail.verifyToken = undefined
        verifyEmail.isVerified = true
        verifyEmail.save()
        res.json({message:"email is verify"})

    }catch(err:any) {

        console.log(err)
        res.status(500).json({statusCode:500, message:err.message})
    }
}