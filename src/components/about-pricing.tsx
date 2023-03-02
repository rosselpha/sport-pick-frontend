import React from 'react'
import {ImCheckmark, ImCross} from "react-icons/im"
import Link from 'next/link'



export default function PricingPage() {
    return (
    <>
        <div className='mx-auto max-w-7xl bg-white px-4 pt-24 sm:px-6 lg:px-8 text-center '>
            <h2 className='text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight'> Pricing plans for daily or monthly.</h2>
            <p className='mt-4 text-lg text-slate-500 '>
                If you are looking for a one time puchase, you can get our one time purchase for $57. If you are looking for a monthly subscription, you can get our monthly subscription for $197 per month.
                comming soon is the next teir  with a yearly plan with the ultimate trainde AI model base on all seasons and our current model. Our ai model comes up with amazing parlay picks for maximum profit. 
            </p>
        </div>

        <div className="grid md:grid-cols-2 max-w-7xl mx-auto  gap-12 md:gap-8 py-24 px-4 sm:px-6 lg:px-8 ">


            <div className="relative boder border-slate-200 p-8 shadow-lg bg-white rounded-2xl flex-col">

                <h3 className='text-lg font-semibold leading-5'>    One DayPicks </h3>
                <p className="mt-4 text-slate-700 text-sm leading-6"> In this pacage you get the pick the model came up with as the most likely team to win</p>
                {/* <p className=" text-sm leading-6 bg-violet-700 -translate-y-1/2  absolute top-0 text-white px-3 py-0.5 rounded-full font-semibold tracking-wide shadow-md ">Most popular</p> */}
                
                <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
                    <p className=' flex items-center text-sm font-semibold text-slate-500 '>
                        <span >USD</span>
                        <span className='ml-3 text-3xl text-slate-600 line-through'>$200</span>
                        <span className='ml-3 text-4xl text-slate-900'>$ 57</span> 
                        <span className=' ml-1.5'>/ daily</span>
                    </p>
                </div>

                <ul className='mt-6 space-y-4 flex-1'>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>NBA </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>NFL </span> </li>
                
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>SOCCER </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>champions league </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>today's pick </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCross className='h-5 w-5 text-[#f14747] shrink-0'/><span className='ml-3'> parlay </span> </li>
                </ul>
                <Link href='/checkout' className='mt-8 px-6 py-4 text-center text-sm font-semibold leading-4 rounded-lg text-white bg-violet-400  hover:bg-violet-500 block  '>GET TODAY'S PICK </Link>
            </div>





            <div className="relative boder border-slate-200 p-8 shadow-lg bg-white rounded-2xl flex-col">
                <h3 className='text-lg font-semibold leading-5'> Pick's for the Month </h3>
                <p className="mt-4 text-slate-700 text-sm leading-6"> This is the package for exlusive plays VIP game and with our most powerful model plus data analize. when the AI favor 3 team they will be sent as a special parley.</p>
                <p className=" text-sm leading-6 bg-violet-700 -translate-y-1/2  absolute top-0 text-white px-3 py-0.5 rounded-full font-semibold tracking-wide shadow-md ">Most popular</p>

                <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
                    <p className=' flex items-center text-sm font-semibold text-slate-500 '>
                        <span >USD</span>
                        <span className='ml-3 text-3xl text-slate-600 line-through'>$549</span>                         
                        <span className='ml-3 text-4xl text-slate-900 '>$ 257</span> 
                        <span className=' ml-1.5'>/ monthly</span>
                    </p>
                </div>

                <ul className='mt-6 space-y-6 flex-1'>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>NBA </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>NFL </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>SOCCER</span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>champions league </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>daily picks</span> </li>
                    {/* <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>game prediction </span> </li> */}
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'> </span>moon shot parlay </li>
                    {/* <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>bundesliga comming soon...</span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>la liga comming soon...</span> </li> */}

                </ul>
                <Link href='/subscription' className='mt-8 px-6 py-4 text-center text-sm font-semibold leading-4 rounded-lg text-white bg-violet-700  hover:bg-violet-800 block'>START WINING NOW!! </Link>
            </div>



        </div>


    </>
    )
}
