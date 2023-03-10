import nodemailer from 'nodemailer';

const password = process.env.NODEMAILER_PASSWORD
const email = process.env.NODEMAILER_EMAIL

export const transporter = nodemailer.createTransport({
    host: "smtp.privateemail.com",
    port: 587,
    auth: {
    user: email,
    pass: password,
    }
    
})