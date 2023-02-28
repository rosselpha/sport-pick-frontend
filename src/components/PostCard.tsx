import React from 'react'
import Link from "next/link"
import moment from 'moment'

export default function PostCard({post}:any) {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pd-12 mb-8' >

        <h1 className='transaition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold '>
            <Link href={`/blog/${post.slug}`}> 
                {post.title}
            </Link>
        </h1>
        <p>{post.excerpt}</p>

    </div>
    )
}
