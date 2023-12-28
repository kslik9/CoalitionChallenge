import Link from "next/link"
import Image from "next/image"
import { Texture, Texture2 } from "../texture/Texture"

export default function Service() {
  return (
    <div className="mx-auto max-w-3xl relative px-4 lg:px-0">
      <Texture2 place="service" />
      <section className="flex items-center justify-between py-24 text-right">
        <Image src="/img.png" width={200} height={200} alt="service" />
        <div className="flex flex-col gap-8">
          <p className="text-2xl lg:text-3xl font-semibold md:font-bold max-w-md">24/7 access to full service customer support</p>
          <Link href="/auth" className="self-end rounded-md w-fit bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Learn more
          </Link>
        </div>
      </section>
    </div>
  )
}
