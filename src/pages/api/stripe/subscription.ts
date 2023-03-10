import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",

})
export default async function handler(req:any, res:any){
    // const id = req.query.id;

    const email = req.body.email;
    const name = req.body.name;
    const paymentMethod = req.body.paymentMethod;

    try{

        const customer = await stripe.customers.create({
            email,
            name,
            payment_method:paymentMethod,
            invoice_settings: { default_payment_method: paymentMethod }
        })

        const subscription = stripe.subscriptions.create({
            customer:customer.id,
            items: [{ price: process.env.SUB_PRICE_KEY }],
            payment_settings: {
                payment_method_types: ["card"],
                save_default_payment_method: "on_subscription",
              },
            expand: ["latest_invoice.payment_intent"]
        })
        res.status(200).json(subscription)

    }catch(err:any) {
        res.status(500).json({statusCode:500, message:err.message})
    }
}