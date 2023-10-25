import type { Metadata } from 'next'
import { Inter, Oxygen } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })
const oxygen = Oxygen({weight: ['300', '400', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(oxygen.className, "min-h-screen flex flex-col")}>
        <Header/>
        <main className="flex-grow">
        {children}
        </main>
        <footer>Meu Footer</footer>
      </body>
    </html>
  )
}
