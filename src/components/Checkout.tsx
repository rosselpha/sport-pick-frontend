import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {ImCheckmark, ImCross} from "react-icons/im"
import Link from 'next/link'



const url = process.env.NEXT_PUBLIC_API_URL as string;

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [sessionId, setSessionId] = useState('');
  let stripe: any;
    
  async function handleCheckout() {

    const response = await fetch('api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }});
      console.log(response)
    const { id } = await response.json();
   
    setSessionId(id);
    stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
    // console.log( sessionId );

    if(!sessionId){
        console.log('no session id');
        return
    };

    await stripe?.redirectToCheckout({ sessionId });
  }

  return (
    <>
      <div className="grid md:grid-cols-1 max-w-2xl mx-auto  gap-12 md:gap-8 py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="relative boder border-slate-200 p-8 shadow-lg bg-white rounded-2xl flex-col">
                <h3 className='text-lg font-semibold leading-5'>    One DayPicks </h3>
                {/* <p className="mt-4 text-slate-700 text-sm leading-6"> description</p> */}
                {/* <p className=" text-sm leading-6 bg-violet-700 -translate-y-1/2  absolute top-0 text-white px-3 py-0.5 rounded-full font-semibold tracking-wide shadow-md ">Most popular</p> */}
                
                <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
                    <p className=' flex items-center text-sm font-semibold text-slate-500 '>
                        <span >USD</span>
                        <span className='ml-3 text-4xl text-slate-600 line-through'>$200</span>
                        <span className='ml-3 text-4xl text-slate-900'>$ 19</span> 
                        <span className=' ml-1.5'>/ daily</span>
                    </p>
                </div>

                <ul className='mt-6 space-y-4 flex-1'>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>premier league </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>champions league </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>today's pick </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCross className='h-5 w-5 text-[#f14747] shrink-0'/><span className='ml-3'> parlay </span> </li>

                </ul>
                <button onClick={handleCheckout} className='block w-full mt-8 rounded-md bg-violet-700 p-2.5 text-sm text-white transition hover:bg-violet-800 hover:shadow-lg px-6 py-4'>Get Today's Picks </button>
            </div>
        
      </div>

    </>
  );
};

export default Checkout;

      // <button >Checkout</button>mt-8 px-6 py-4 text-center text-sm font-semibold leading-4 rounded-lg text-white bg-violet-700  hover:bg-violet-800 block