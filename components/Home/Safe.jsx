import Image from "next/image"
import Link from "next/link"
import { Texture2, Texture } from "../texture/Texture"

export default function Safe() {
  return (
    <div className="mx-auto max-w-3xl relative px-4 lg:px-0">
      <Texture place="safe" />
      <section className="flex flex-row-reverse items-center justify-between">
        <Image src="/icons.png" width={120} height={120} alt="service" />
        <div className="flex flex-col gap-8">
          <p className=" text-2xl lg:text-3xl font-semibold md:font-bold max-w-md">Take your first step into safe, secure profile verifications</p>
          <Link href="/auth" className="rounded-md w-fit bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Learn more
          </Link>
        </div>
      </section>
      <div></div>
    </div>
  )
}
