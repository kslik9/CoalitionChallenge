import { Texture2, Texture } from "@/components/texture/Texture"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs"
import Link from "next/link"

export default function Auth() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-5xl">
        <div className="flex h-screen bg-black">
          <div className="flex w-1/2 bg-cover">
            <div className="m-auto text-white p-12">
              <h1 className="text-4xl mb-4 font-semibold leading-10">
                {" "}
                <span className="font-bold">Empowering trust, Securing data..</span> your gateway to decentralized institutions.
              </h1>
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-center p-12">
            <div className="max-w-md w-full">
              <div className="text-left text-white font-bold text-2xl mb-2">Join us.</div>
              <p className="mb-8 text-sm text-gray-400">Accessed with your google account.</p>
              <div className="flex justify-center mb-6">
                <SignInButton mode="modal">
                  <Button className="w-full mb-4 bg-white text-black hover:bg-white.60">
                    <ChromeIcon className="w-4 h-4 mr-2" />
                    Sign up / login with Google
                  </Button>
                </SignInButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}

// ;<div className="bg-hero-pattern bg-no-repeat bg-cover bg-center md:bg-right-bottom ">
//   <Header />
//   <div className="relative isolate px-6 pt-14 lg:px-8">
//     <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold tracking-tight sm:text-6xl ">Securing your credentials, Ensuring legetimacy</h1>
//         <p className="mt-6 text-lg leading-8 font-semibold">Empowering Trust, Securing Data: Your Gateway to Decentralized Institutions, Blockchain Innovation, and File Encryption Excellence.</p>
//         <div className="mt-10 flex items-center justify-center gap-x-6">
//           <Link href="/auth" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//             Get started
//           </Link>
//           <Link href="#" className="text-sm font-semibold leading-6">
//             Learn more <span aria-hidden="true">→</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
