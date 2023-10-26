import Link from "next/link";
import {ShoppingCart} from "lucide-react"

export default function CartButton() {
    return (
        <Link href={"/cart"} className="flex items-center justify-center gap-2">
            <ShoppingCart className="font-extrabold h-6 w-6 "/>
            (R$ 150,00) (3)
        </Link>
    )
}