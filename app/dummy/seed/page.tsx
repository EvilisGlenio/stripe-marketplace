// Esta página tem por Objetivo ir em uma API externa, pegar os dados de produto  convertê-lo num modelo que o Stripe aceita

import stripe from "@/lib/stripe"
import { DummyProduct } from "@/types"

async function getDummyProducts(){
    const response = await fetch("https://dummyjson.com/products?limit=9")
    const dummyData = await response.json()
    const products = dummyData.products.map((product: DummyProduct) => {
        return {
            id: product.id,
            description: product.description,
            name: product.title,
            images: product.images,
            default_price_data: {
                unit_amount_decimal: product.price,
                currency: "BRL",
            }
        }
    })
    return products
}

async function seedDummyData(){
    const products = await getDummyProducts()
    await products.map(async (product: any) => {
        try {
            const productCreated = await stripe.products.create(product)
            console.log(productCreated.name)
        } catch (error: any) {
            console.log("STRIPE_CREATE_ERROR: ", error.message)
        }
    })
}

export default async function Seed(){
    await seedDummyData()
    return(<div className="container flex items-center justify-center my-10">
        <h1 className="text-3xl text-green-600 font-extrabold">
            Dummy date created in your Stripe Inventory. If you don't see it on your Products Dashboard. Take a look at your console log.
        </h1>
    </div>)
}