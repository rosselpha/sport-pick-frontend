import React from 'react'
import { useSession } from 'next-auth/react'
import AuthGuard from '@/components/AuthGuard'
import Link from 'next/link'

export default function Success() {

  const { data: session, status } = useSession()

  // console.log({session, status})

  return (
    <AuthGuard> 
      <div className=' px-4 text-center py-10 h-screen'>
        <h1 className="text-4xl lg:text-58px font-semibold leading-none mb-6">

            Thank you for your purchase! you are now subscibe to blockplay monthly plan. 
            read our terms and conditions <Link href="/terms" className="text-blue-500">here</Link> if you haven't already.
        </h1>
        <p className="text-lg lg:text-18px font-medium leading-relaxed mb-8">
            the pick will be sent to your email address.
            2-3 hours before the game day. the model is made in a way only the best games will be selected for maximum profit.

        </p>
      </div>
    </AuthGuard>
  )
}
