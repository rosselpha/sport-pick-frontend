import connectToDB from "@/lib/utils/db";
import EmailList from "@/lib/models/emailList";
import { transporter } from "@/lib/utils/nodemailer";
import crypto from "crypto"
import { emailLayout, verifyEmail } from "@/lib/services/emaillayout"


async function handleEmailList(req:any, res:any) {

    connectToDB().catch(err => res.json({error: err.message}))
    const origin = req.headers.origin

    if (req.method === "POST") {
        if(!req.body)return res.status(404).json({error :"dont have form data "})
        const {email} = req.body
        
        // console.log(email)
        const existingEmail = await EmailList.findOne({ email })
        if(existingEmail) return res.status(422).json({message: "you already sign up!"})

        crypto.randomBytes(32, (err, buffer) => {
            
            if(err) return res.json({message: "err with link"})

            const token = buffer.toString('hex')

            const emailList = new EmailList({verifyToken:token, email:email})
            emailList.save()

            const sendingEmail:string = emailLayout(verifyEmail(origin,token,email))
            transporter.sendMail({
                to:email,
                from: 'ross.team@blockplay.me',
                subject: `Verify you are the owner of ${email}`,
                html: sendingEmail
            }, (err, info) =>{
                if(err) console.log(err)
                console.log(`res= ${info.response}`)
            })

        })

        // const emailList = new EmailList({email})
        // await emailList.save()


        return res.json({message: "Please verify your email"})
    } else {
        return res.status(500).json({error: "  HTTP method not valid only POST Accepted!"})
    }
}

export default handleEmailList;