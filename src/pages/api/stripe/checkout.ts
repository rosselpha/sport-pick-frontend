import Stripe from "stripe"


async function createCheckOutSession(req:any, res:any) {
    


    if(req.method === 'POST')  {

        const origin = req.headers.origin;
        try{

            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
                apiVersion: "2022-11-15",

            })  
            const session =  await stripe.checkout.sessions.create({
                mode: "payment",
                line_items: [
                    {
                        price: process.env.PRICE_KEY,
                        quantity: 1,
                    },
                ],
                success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${origin}?canceled=true`,
            })

            console.log(`this is ${ session }`)
            res.status(200).json(session)

        } catch(err:any){
            //console.log(err)
            res.status(500).json({statusCode:500, message: err})
        }
    }  
}
export default createCheckOutSession