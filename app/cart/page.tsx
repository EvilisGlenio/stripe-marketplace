"use client"

import{ useShoppingCart } from 'use-shopping-cart'
import{useState} from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {Trash2, Loader} from "lucide-react"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
  

export default function Cart() {

    const {cartCount, cartDetails, redirectToCheckout, clearCart, decrementItem} = useShoppingCart()
    const [isCheckingOut, setIsCheckingOut] = useState(false)

    // Também é possível guardar as informações atravéz do Prisma
    async function checkout() {
        setIsCheckingOut(true)
      
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cartDetails),
        });

        const { id } = await response.json()

        const result = await redirectToCheckout(id)

        setIsCheckingOut(false)
    }

    return ( 
        <section className="flex flex-col items-center justify-center">
            {cartDetails &&
                 Object.keys(cartDetails).map((key) => (
                <Card key={key} className='container my-2 shadow'>
                    <CardHeader>
                        <CardTitle className='tracking-wider'>
                            {cartDetails[key].name} ({cartDetails[key].quantity})
                        </CardTitle>
                        <CardDescription className='text-md tracking-wide'>
                        {cartDetails[key].description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='grid gap-6'>
                        <div className='flex items-center justify-between space-x-4'>
                            <div className='flex items-center space-x-4'>
                                <div className='relative w-28 h-28'>
                                    <Image
                                        src={cartDetails[key].image || ""}
                                        fill
                                        alt={cartDetails[key].name}
                                        className='object-contain'
                                    />
                                </div>
                                <div>
                                    <p className='text-md font-medium leading-none'>Preço</p>
                                    <p className='text-md text-muted-foreground'>
                                        {cartDetails[key].formattedValue}
                                    </p>
                                </div>
                            </div>
                            <Trash2
                            onClick={() => decrementItem(key)}
                            className='text-red-400 hover:text-red-600' />
                        </div>
                    </CardContent>
                </Card>
            ))}
            <div 
                className={cn(
                    "flex items-center justify-around w-screen my-3",
                    cartCount === undefined || cartCount <= 0 ? "hidden" : ""
                )}>
                    <Button
                        variant={'destructive'}
                        size={'sm'}
                        onClick={clearCart}
                    >
                        Remove all
                    </Button>
                    <Button
                        variant={'default'}
                        size={'lg'}
                        onClick={checkout}
                        disabled={isCheckingOut}
                    >
                        {isCheckingOut ? (
                            <div className='flex items-center justify-between gap-2'>
                                <Loader className='animate-spin repeat-infinite'/> {""}
                                Finalizando...
                            </div>
                        ) : (
                            "Finalizar"
                        )}
                    </Button>
            </div>
        </section>
    )
}