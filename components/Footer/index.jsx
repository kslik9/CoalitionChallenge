import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Texture2 } from "../texture/Texture"

export default function Footer() {
  return (
    <footer className="mx-auto max-w-2xl pb-14 pt-36 relative">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
        <p className="text-white">Get the latest updates from our team</p>
        <form className="flex w-full md:max-w-md gap-4 px-5">
          <Input className="flex-1 bg-transparent placeholder:text-sm text-white placeholder:text-white/40" id="subscription-email" placeholder="example@insutition.com" type="email" />
          <Button className="bg-white text-black hover:bg-white hover:text-black hover:opacity-90 focus:opacity-90 font-semibold" type="submit">
            Subscribe
          </Button>
        </form>
        <div className="flex space-x-4 mt-6">
          <Link className="underline text-gray-400" href="#">
            Terms & Conditions
          </Link>
          <Link className="underline text-gray-400" href="#">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
