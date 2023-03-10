import * as bcrypt from 'bcrypt';

export async function hashPassword(password:any){

    const hashPassword =  await bcrypt.hash(password, 12)
    return hashPassword
}   

export async function verifyPassword(password:any, hashPassword:any) {
    const isvalid = await bcrypt.compare(password, hashPassword)
    return isvalid;
}
