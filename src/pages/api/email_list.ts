import connectToDB from "@/lib/utils/db";
import EmailList from "@/lib/models/emailList";

async function handleEmailList(req:any, res:any) {

    connectToDB().catch(err => res.json({error: err.message}))

    if (req.method === "POST") {
        if(!req.body)return res.status(404).json({error :"dont have form data "})
        const {email} = req.body
        const emailList = new EmailList({email})
        await emailList.save()
        return res.json({message: "Thank you for subscribing!"})
    } else {
        return res.status(500).json({error: "  HTTP method not valid only POST Accepted!"})
    }
}

export default handleEmailList;