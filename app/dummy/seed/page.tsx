import stripe from "@/lib/stripe"

export default function Seed(){
    return(<div className="container flex items-center justify-center my-10">
        <h1 className="text-3xl text-green-600 font-extrabold">
            Dummy date created in your Stripe Inventory. If you don't see it on your Products Dashboard. Take a look at your console log.
        </h1>
    </div>)
}