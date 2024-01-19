"use client"

import Side from "@/components/dashboard/side"
import { UserProfile, useUser } from "@clerk/nextjs"

export default function Settings() {
  const { user, isLoaded } = useUser()

  return (
    <div className="grid  h-screen w-full overflow-hidden lg:grid-cols-[30rem_1fr]">
      <div className="hidden rounded-3xl bg-white/10 lg:block">
        <Side />
      </div>
      <div className="place-self-center">
        <UserProfile />
      </div>
    </div>
  )
}
