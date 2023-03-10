import crypto from "crypto"
import connectToDB from "@/lib/utils/db";
import User from '@/lib/models/user';
import { emailLayout, resestEmail} from "@/lib/services/emaillayout";
import { transporter } from "@/lib/utils/nodemailer"

export default async function handleReset(req:any, res:any){

    const origin = req.headers.origin
    
    console.log(origin)
    try{
        if (req.method !== 'POST') {
            return;
        }
        connectToDB().catch(err => res.json({error: err.message}))
        const userEmail = req.body.enteredEmail

        const existingUser = await User.findOne({email: userEmail}).exec()
        if(!existingUser){
            return res.status(422).json({message: "email doesn't exsist signup now"})
        }
        crypto.randomBytes(32, (err, buffer)=> {
            if(err){
                console.log(err) 
                return res.json({message: "err with link"})
            }
            const token = buffer.toString('hex')
            existingUser.resetToken = token
            existingUser.resetTokenExpiration = Date.now()+ 3600000
            existingUser.save()

            const email:string = emailLayout(resestEmail(token, origin))
            transporter.sendMail({
                to:userEmail,
                from: 'ross.team@blockplay.me',
                subject: 'Reset Password Link',
                html: email
            }, (err, info) =>{
                if(err) console.log(err)
                console.log(`res= ${info.response}`)
            })
        })

        return res.json({message: "password reset link have been sent"})

    }catch(err:any){
        res.status(500).json({statusCode:500, message:err.message})
    }
}