"use client"
import { Inter, Leckerli_One } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
const inter = Inter({ subsets: ["latin"] })
import Image from "next/image"

export default function RootLayout({ children }) {
  const path = usePathname()
  return (
    <ClerkProvider appearance={dark}>
      <html lang="en" className="">
        <body className="bg-black text-white scroll-smooth scrollbar overflow-x-hidden">
          <div>{children}</div>
          {path == "/" && <Footer />}
        </body>
      </html>
    </ClerkProvider>
  )
}
