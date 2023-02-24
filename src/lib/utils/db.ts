import mongoose from "mongoose";

export default async function connectToDB() {  
    try {
        const { connection }  = await mongoose.connect(process.env.MONGODB_URI!)
    } catch (error) {
        return Promise.reject(error)
    }
 }

