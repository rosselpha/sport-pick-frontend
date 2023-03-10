import {Schema, models, model } from "mongoose"

const usersSchema = new Schema({
    email: String,
    password: String,
    resetToken: String,
    resetTokenExpiration:Date
})
const Users = models.Users || model("Users", usersSchema)

export default Users