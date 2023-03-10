import { NextApiRequest, NextApiResponse } from "next";
import connectToDB from "@/lib/utils/db";
import User from '@/lib/models/user';
import { hashPassword } from '@/lib/utils/auth'


export default async function handleNewPassword(req:NextApiRequest, res:NextApiResponse){

    const  {token, newPassword} = req.body
    try{
        if (req.method !== 'POST') {
            return;
        }
        connectToDB().catch(err => res.json({error: err.message}))

        const updateUserPassword = await User.findOne({resetToken:token, resetTokenExpiration:{$gt:Date.now()}})

        const HashPW = await hashPassword(newPassword)

        updateUserPassword.password = HashPW
        updateUserPassword.resetToken = undefined
        updateUserPassword.resetTokenExpiration = undefined
        updateUserPassword.save()
        res.json({message:"password updated successfully"})

    } catch (err:any){
        console.log(err)
        res.status(500).json({statusCode:500, message:err.message})
    }

}