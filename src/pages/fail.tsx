import React from 'react'
import { useSession } from 'next-auth/react'
import AuthGuard from '@/components/AuthGuard'
import Link from 'next/link'

export default function Success() {

  const { data: session, status } = useSession()

  // console.log({session, status})

  return (

      <div className=' px-4 text-center py-10 h-screen'>
        <h1 className="text-4xl lg:text-58px font-semibold leading-none mb-6">

            Your card is not working try again <Link href="/subscription" className="text-blue-500">here</Link>  or email support@blockplay.me <Link href="mailto:support@blockplay.me" className="text-blue-500">here</Link> 
        </h1>
        <p className="text-lg lg:text-18px font-medium leading-relaxed mb-8">


        </p>
      </div>
  )
}
