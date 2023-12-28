"use client"
import Link from "next/link"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs"

const navigation = [
  { name: "Verify", href: "/dashboard" },
  { name: "Insitutions", href: "#" },
  { name: "Buisness", href: "#" },
  { name: "Support", href: "#" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, isLoaded, isSignedIn } = useUser()

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1" />
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <SignedOut>
            <Link href="/auth" className="text-sm font-semibold leading-6">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard" className="text-sm font-semibold leading-6">
              {isLoaded && isSignedIn ? (
                <div className="flex gap-4 items-center">
                  <UserButton />
                  <div>{user.firstName}</div>
                </div>
              ) : (
                ""
              )}{" "}
            </Link>
          </SignedIn>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5" />
            <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <SignedOut>
                  <Link href="/auth" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black">
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard" className="text-sm font-semibold leading-6">
                    {isLoaded && isSignedIn ? (
                      <div className="flex gap-4 items-center">
                        <UserButton />
                        <div className="font-semibold text-base">{user.firstName}</div>
                      </div>
                    ) : (
                      ""
                    )}{" "}
                  </Link>
                </SignedIn>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
