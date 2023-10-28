import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import Stripe from "stripe";
import {  validateCartItems  } from "use-shopping-cart/utilities"

export async function POST(req: NextRequest){

    const cartDetails = req.json()

    return NextResponse.json({}, {status: 200})
}