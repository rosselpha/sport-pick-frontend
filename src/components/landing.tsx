import Image from "next/image"
import React, { useEffect, useRef } from 'react'
import {useRouter} from 'next/router'
import Link from "next/link"
import Testimonial from "./testimonial"
import AboutPricing from "./about-pricing"

export default function Landing() {
  const router = useRouter()

  const emailRef  = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    //ranProPics()
  }, [])

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (emailRef.current) {

      const response = await fetch('/api/email_list', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: emailRef.current.value,
  
        }),
    })
    console.log(response);
      router.push(`/signup?email=${emailRef.current.value}`)
    }
  }
  
  return (
    <>
      <section className="h-full max-h-640px mb-8 x1:mb-24">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:ml-8 xl:ml-135px flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
            <h1 className="text-4xl lg:text-58px font-semibold leading-none mb-6">
              Accurate Soccer Predictions <span className="text-violet-700">AI</span>
            </h1>
            <p className="max-w-480px mb-8">
              Get ahead of the game with our AI-powered soccer prediction system. We analyze vast amounts of data to provide the most accurate predictions possible. Trust in data and AI technology to make more informed decisions and achieve better results.
            </p>
            <form onSubmit={handleSubmit}>
              <input className="border border-gray-300 focus:border-violet-700 outline-none rounded px-4 h-14 mx-2" type='email' placeholder="Enter your email..."  name="email" ref={emailRef}/>
              <button className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-5 rounded-lg transition">GET TODAY'S PICKS</button>
            </form>
          </div>
          <div className="hidden flex-1 lg:flex justify-end items-end">
            <Link href="/">
              <Image
                src="/ross_elpha_a_happy_ai_playing_soccer_illustration_b6375e5f-c5f7-4acc-9e5c-e75f34429494.png"
                alt="AI playing soccer illustration"
                width={900}
                height={900}
                priority
              />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <AboutPricing />
      </section>      
      <section>
        <Testimonial />
      </section>

    </>
  )
}

/** container mx-auto
 * #f69071 #fcc27f -- kaki colors for website
 * #4ca3b1 --blue
 * #922032 #ed1531 --red
 */