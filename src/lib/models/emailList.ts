import {Schema, models, model } from "mongoose"

const emailListSchema = new Schema({
    email: String,
    verifyToken: String,
    isVerified: Boolean
})

const EmailList = models.EmailList || model("EmailList", emailListSchema)


export default EmailList;