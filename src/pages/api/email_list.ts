import connectToDB from "@/lib/utils/db";
import EmailList from "@/lib/models/emailList";
import { transporter } from "@/lib/utils/nodemailer";
import crypto from "crypto"
import { emailLayout, verifyEmail } from "@/lib/services/emaillayout"


function getToken(res: any) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(32, (err, buffer) => {
      if (err) {
        res.json({ message: "err with link" });
        reject(err);
      } else {
        resolve(buffer.toString("hex"));
      }
    });
  });
}
async function handleEmailList(req:any, res:any) {

  connectToDB().catch(err => res.json({error: err.message}))
  const origin = req.headers.origin

  if (req.method === "POST") {
    if(!req.body)return res.status(404).json({error :"dont have form data "})
    const {email} = req.body
    const token = await getToken(res);
    
    // console.log(email)
    const existingEmail = await EmailList.findOne({ email })
    if(existingEmail) return res.status(422).json({message: "you already sign up!"})

    const sendingEmail:string = emailLayout(verifyEmail(origin,token,email))
    console.log(`token ${token} `)

    await new Promise((resolve, reject) => {
      transporter.sendMail({
        to:email,
        from: 'ross.team@blockplay.me',
        subject: `Verify you are the owner of ${email}`,
        html: sendingEmail
      }, (err, info) =>{
          if(err) {
            console.log(err)
            reject(err)
          } 
        console.log(`res= ${info.response}`)
        resolve(info)
      })                
    })
    const emailList = new EmailList({verifyToken:token, email:email})
    emailList.save()

    return res.json({message: "Please verify your email"})
  } else {
    return res.status(500).json({error: "  HTTP method not valid only POST Accepted!"})
  }
}

export default handleEmailList;