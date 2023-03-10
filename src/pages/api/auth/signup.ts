import connectToDB from "@/lib/utils/db";
import User from '@/lib/models/user';
import { hashPassword } from '@/lib/utils/auth'

export default async function handler(req:any, res:any){

    try {
        if (req.method !== 'POST') {
            return;
        }
        connectToDB().catch(err => res.json({error: err.message}))

        const data = req.body;
        const { email, password } = data
    
        if (
            !email ||
            !email.includes('@') ||
            !password ||
            password.trim().length < 4
        ) {
            res.status(422).json({
              message:
                'Invalid input - password should also be at least 7 characters long.',
            });
            return;
        }
        const existingUser = await User.findOne({email: email}).exec()
        
        if(existingUser){
            return res.status(422).json({message: "user exist already!"})
        }

        const HPW = await hashPassword(password)
        const newUser = await new User({
            email:email,
            password: HPW
        })

        await newUser.save()
        res.status(201).json({ message: 'Created user!' });

            } catch(err:any){
                console.log(err)
        res.status(500).json({statusCode:500, message:err.message})
    }
}