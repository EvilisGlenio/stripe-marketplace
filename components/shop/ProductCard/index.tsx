"use client"

import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Image from "next/image";


interface ProductCardProps {
    id: string;
    name: string;
    description?: string;
    sku?: string;
    price: string | number;
    currency: string;
    image: string;
    images?: string[];
}
  

export default function ProductCard({
    id,
    name,
    description,
    sku,
    price,
    currency,
    image,
    images,
}: ProductCardProps) {

    const {addItem} = useShoppingCart()

    const formattedPrice = formatCurrencyString({
      value: Number(price),
      currency,
      language: "pt-BR"
    })

  async function addToCart(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault()
      addItem({
        id,
        name,
        description,
        price: Number(price),
        currency,
        image,
      })
    }

    return (<Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-center min-h-[4rem]">{name}</CardTitle>
          <CardDescription className="relative w-full h-60">
            <Image src={image} fill sizes="100%" alt={name} className="object-contain" />
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <p className="min-h-[6rem]">{description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
            <div>
                <p>Preço</p>
                <p>{formattedPrice}</p>
            </div>
            <Button size={"lg"} variant={"default"} onClick={addToCart} >Comprar</Button>
        </CardFooter>
      </Card>
      )
}