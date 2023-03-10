import Link from "next/link"
import { useRef } from "react"
import {signIn } from 'next-auth/react';
import { useRouter } from "next/router";

export default function resetPassword() {

    const router = useRouter()
    const { token } = router.query
    console.log(token)
    const newPasswordRef = useRef<HTMLInputElement>(null)
  
    async function handleSubmit(e: any) {
      e.preventDefault();
      if (newPasswordRef.current, token) {
        const newPassword = newPasswordRef.current?.value;
        const response = await fetch('/api/auth/reset-password', {
            method: 'POST',
            body: JSON.stringify({ newPassword, token }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //console.log(response)
      
      }
      router.push('/login')
    }
  



  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>

        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#5b21b6]">new Password</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="password" name="password" placeholder="password" ref={newPasswordRef}/>

            <button type="submit" className="bg-[#5b21b6] rounded-xl text-white py-2 hover:scale-105 duration-300" >Reset Password</button>
          </form>

          <div className="mt-5 text-xs border-b border-[#5b21b6] py-4 text-[#5b21b6]" />

          <div className="mt-3 text-xs flex justify-between items-center text-[#5b21b6]">
            <p>Don't have an account?</p>
            <Link href="/signup"><button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Signup</button>  </Link>

          </div>
        </div>

        <div className="w-1/2 md:block hidden" >
          <img src='../ross_elpha_a_friendly_ai_illustration_for_a_website_93251848-1eb9-4c59-87aa-6f412744970e.png' className='rounded-2xl' />
        </div>
      </div>


    </section>
  )
}
