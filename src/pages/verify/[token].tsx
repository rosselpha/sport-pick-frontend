import Link from "next/link"
import { useRef, useEffect } from "react"
import {signIn } from 'next-auth/react';
import { useRouter } from "next/router";

export default function resetPassword() {

    const router = useRouter()
    const { token } = router.query
    console.log(router.query)
    const newPasswordRef = useRef<HTMLInputElement>(null)
  

      // router.push('/login')
      useEffect(()=>{
              if (token) {
          const newPassword = newPasswordRef.current?.value;
          fetch('/api/verify_email', {
              method: 'POST',
              body: JSON.stringify({  token }),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          //console.log(response)
        
        }
      },[token])
  



  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
     
    <h2 className="items-center justify-center"> email verify thank you</h2> 
    <div className="p-2 ">
      <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link href='/signup'> Sign Up for best result</Link>

      </button>

    </div>

    {/* <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
  </div>
</div> */}
    </section>
  )
}
