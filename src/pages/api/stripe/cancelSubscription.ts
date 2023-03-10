import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",

})
export default async function cancelSub(req:any, res:any, subscriptionID:any) {

    try{
        const subscription = await stripe.subscriptions.del(subscriptionID);
        return subscription;

    } catch(err:any) {
        res.status(500).json({statusCode:500, message:err.message})

    }
    
}