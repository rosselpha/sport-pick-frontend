import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import PaymentForm from '../components/PaymentForm';
import AuthGuard from '@/components/AuthGuard';
import { useSession } from 'next-auth/react';

const url = process.env.NEXT_PUBLIC_API_URL as string;

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_TEST_KEY as string);

export default function Subsciption(){

    const { data: session, status } = useSession();

    return(
      <>
        {/* <AuthGuard> */}
          <Elements stripe={stripePromise} >
            <PaymentForm  session={session} status={status}/>
          </Elements>
        {/* </AuthGuard>       */}

      </>


    )
}

