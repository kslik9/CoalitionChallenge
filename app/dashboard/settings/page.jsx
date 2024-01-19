"use client"

import Side from "@/components/dashboard/side"
import { UserProfile, useUser } from "@clerk/nextjs"

export default function Settings() {
  const { user, isLoaded } = useUser()

  return (
    <div className="overflow-hidden h-screen w-screen flex flex-row">
      <div className="hidden w-[25%] rounded-3xl bg-white/10 lg:block">
        <Side />
      </div>
      <div className="m-auto p-8"> 
          <UserProfile />
      </div>
    </div>
  )
}