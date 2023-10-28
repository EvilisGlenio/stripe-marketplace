import { MonitorSmartphone } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (<Link href={"/"} className="flex items-center justify-center gap-2 text-xl font-extrabold text-sky-500">
        <MonitorSmartphone className="w-10 h-10 text-sky-600"/>
        <span className=" hidden sm:inline-block">Stripe Store</span>
    </Link>)
}