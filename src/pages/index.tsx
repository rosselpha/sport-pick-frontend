import { Inter } from '@next/font/google'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import {useRouter} from 'next/router'

import { getPosts } from '../lib/services/query'

import Landing from '@/components/landing'
import Home from '@/components/home'


const inter = Inter({ subsets: ['latin'] })

function User({session, router, posts}:any){

  //console.log(session)
  function routerChanger(){
    router.push('/subscription')
  }

  // console.log(posts)
  return(
    <div className="h-screen">
      <div className=' px-4 text-center py-10'>
        <h2>{session.user.email}</h2>
        <h1 className="text-4xl lg:text-58px font-semibold leading-none mb-6">
          welcome to blockplay 
        </h1>
        {/* <div>{posts.map((post:any) =>{console.log(post)})}</div> */}
        
        <div className='mb-8'>
          <button onClick={routerChanger} className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-5 rounded-lg transition">GET TODAY'S PICKS</button>
        </div>
       <h2> Subscribe to get daily picks in your email</h2>
      </div>

    </div>
  )
}



export default function Main({posts}:any) {

  const { data: session, status } = useSession()
  const router = useRouter()
  
  // console.log(posts)

  useEffect(() =>{

  },[])

  return (
    <>
      <div >
        {session? User({session, router, posts}): <Landing props={posts} /> }
      </div>
    </>
  )
}
export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    }
  }

}

