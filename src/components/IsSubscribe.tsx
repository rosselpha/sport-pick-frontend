// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY as string);

// // Get the Stripe customer ID from your server-side session
// const customerId = 'customer_id_from_session';

// const getCustomer = async () => {
//   const stripe = await stripePromise;
//   const customer = await stripe.customers.retrieve(customerId);

//   return customer;
// };

// const checkSubscriptionStatus = async () => {
//   const customer = await getCustomer();

//   if (customer.subscriptions.total_count > 0) {
//     // The customer has at least one subscription
//     const subscription = customer.subscriptions.data[0];

//     if (subscription.status === 'active') {
//       // The customer has an active subscription
//       console.log('The customer has an active subscription');
//     } else {
//       console.log('The customer does not have an active subscription');
//     }
//   } else {
//     console.log('The customer does not have any subscriptions');
//   }
// };

// checkSubscriptionStatus();

import React from 'react'

export default function IsSubscribe() {
  return (
    <div>IsSubscribe</div>
  )
}
