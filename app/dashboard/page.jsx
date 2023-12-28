"use client"

import Side from "@/components/dashboard/side"
import { Button } from "@/components/ui/button"
import { useAuth, useUser } from "@clerk/nextjs"

export default function Dashboard() {
  const { user, isLoaded } = useUser()

  return (
    <div className="grid h-screen w-full overflow-hidden lg:grid-cols-[30rem_1fr]">
      <div className="hidden border-r bg-white lg:block">
        <Side />
      </div>
      <div className="bg-green-50/10 rounded-lg w-[50%] h-[70%] m-auto">
        <div className="flex flex-col items-center justify-between h-full w-full py-14">
          <div className="bg-white/5 w-[90%] flex justify-between p-3 rounded-lg ">
            {isLoaded ? <div>{user.fullName}</div> : <div></div>}
            <div>{isLoaded ? `${user.createdAt.getDate()} / ${user.createdAt.getFullYear()}` : ""} - Present</div>
          </div>
          <div className="bg-white w-52 h-52 rounded-lg">qrcode</div>
          <input className="bg-white/5 w-[90%] p-3 rounded-lg disabled:text-gray-400" type="text" value="34uyb434uyb343uyb434uyb43buy34bub34ub4334ub4" disabled />
          <p className="text-xs">Your profile, 100% legitimate and secure</p>
          <Button>Share your ID</Button>
        </div>
      </div>
    </div>
  )
}
