import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {ImInstagram, ImTwitter} from "react-icons/im"
import {useRouter} from 'next/router'
import { useSession, signOut } from 'next-auth/react'


export default function Header() { 

    const { data: session, status } = useSession()
    const { pathname } = useRouter()

const email = session?.user.email
const username = email?.slice(0, email.indexOf('@'))

function logoutHandler(){
    console.log('logout')
    signOut()
}


    return(
        <nav className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col  items-center sm:flex-row sm:justify-between text-center py-3">
                <div className='md:flex-none w-96 order-1 sm:order-1 flex justify-center py-4 sm:py-0'>
                    <Link href='/' className='font-bold uppercase text-3xl'> 
                        <Image
                            src="/logo.png"
                            alt="Next.js Logo"
                            width={90}
                            height={100}
                            priority
                        />               
                    </Link>
                </div>
                <div className='w-96 order-3 flex justify-center'>
                    <div className='flex gap-6 items-center'>

                        {session && !(pathname=== '') &&(                       
                            <button onClick={logoutHandler} className='hover:text-violet-900 transition'>logout</button>
                        )}
                        {session && !(pathname=== '') &&(                       
                            <Link href='/' className=' px-4 py-3 hover:bg-violet-600 rounded-lg transition hover:text-white '>{username}</Link>
                        )}                                     
                        {session && !(pathname=== '/subscription') &&(                       
                            <Link href='/subscription' className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'>Picks</Link>
                        )}
                        {!session && !(pathname=== '/login') &&  (
                            <Link href='/login' className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'> Login  </Link>
                        )}
                        {!session && !status &&!(pathname=== '/signup') &&  (
                            <Link href='/signup' className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'>Sign up</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

{/* <a><ImInstagram color='#888888'/> </a>   className={`hover:text-violet-900 transition`} 
<a> <ImTwitter color='#888888'/></a>                + active === "/login" ? "active":" "         */}