import { CardElement,   PaymentElement, PaymentRequestButtonElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import {ImCheckmark, ImCross} from "react-icons/im"


const url = process.env.NEXT_PUBLIC_API_URL as string;

export default function PaymentForm({session, status}:any) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const router = useRouter();

    const stripe = useStripe();
    const elements = useElements();

    const createSubscription = async () => {
        setIsDisabled(true)
    try{
        const cardElement = elements?.getElement(CardElement);
        if(cardElement){
            const paymentMethod = await stripe?.createPaymentMethod({
                card:cardElement,
                type: 'card',
            });

            // console.log(paymentMethod?.paymentMethod);
            const response = await fetch(url+'/stripe/create-subscription', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    paymentMethod: paymentMethod?.paymentMethod?.id,
                }),
            })
            console.log(response);
            if(!response.ok){
                
                
                throw new Error(await response.text());
            }
            const data = await response.json();
            console.log(data.plan.active);
            if(data.plan.active === true){
                console.log('success');
                router.push('/success');
                
            }else{
                router.push('/fail');
                console.log('fail');
                setIsDisabled(false)
            }
        }
    }
    catch (err){
        console.error(err);
    }
        
    }
    // console.log(session);

  return (
    <>
    <section className='h-screen'>

  <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
    <div className="bg-gray-50 py-12 md:py-24">
      <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
        {/* <div className="flex items-center gap-4">
          <span className="h-10 w-10 rounded-full bg-blue-700"></span>

          <h2 className="font-medium text-gray-900">BambooYou</h2>
        </div> */}

        <div>

          <p className="text-2xl font-medium tracking-tight text-gray-900">
            <span className='ml-3 text-4xl text-slate-600 line-through'>$1549</span>    
            <span className='ml-3 text-3xl text-slate-900 '>$ 257</span> 
            <span className=' ml-1.5'>/ monthly</span>

          </p>
          <p className="mt-1 text-sm text-gray-600">This is the package for exlusive plays VIP games and with our most powerful model plus data analize. SPOTS ARE Limited.</p>
          <p>                 <ul className='mt-6 space-y-6 flex-1'>
                    <li className='text-sm leading-6 text-slate-700 flex'><span className='ml-3'>NBA PICKS, </span> <span className='ml-3'>NHL PICKS, </span><span className='ml-3'>NFL PICKS</span>  </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><span className='ml-3'>SOCCER,</span><span className='ml-3'>Champions League </span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><span className='ml-3'>Daily Picks,</span><span className='ml-3'>At least ONE Moon Shot Parlay A Week </span>  </li>
                    {/* <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>game prediction </span> </li> */}
                    <li className='text-sm leading-6 text-slate-700 flex'></li>
                    {/* <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>bundesliga comming soon...</span> </li>
                    <li className='text-sm leading-6 text-slate-700 flex'><ImCheckmark className='h-5 w-5 text-violet-700 shrink-0'/><span className='ml-3'>la liga comming soon...</span> </li> */}

                </ul></p>
        </div>

 
      </div>
    </div>

    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
        <div className="grid grid-cols-6 gap-4">

        <div className="col-span-6">
            <label htmlFor="Name" className="block text-xs font-medium text-gray-700">
              Name 
            </label>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border-violet-700 shadow-sm sm:text-sm  px-4 h-14"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border-violet-700 shadow-sm sm:text-sm  px-4 h-14"
            />
          </div>
          <fieldset className="col-span-6">
          <CardElement />
          </fieldset>
          <div className="col-span-6">
            <button
              className="block w-full rounded-md bg-violet-700 p-2.5 text-sm text-white transition hover:bg-violet-800 hover:shadow-lg"  
              onClick={createSubscription}
            >
                Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>



  )
}
