"use client"

import Side from "@/components/dashboard/side"
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import QRCode from "react-qr-code"
import CryptoJS from "crypto-js"

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
          <div className="bg-white/5 w-64 h-64 rounded-2xl flex items-center justify-center">
            <QRCode value={isLoaded ? `https://educhain.ma/user?firstName=${user.firstName}&lastName=${user.lastName}&emailAddress=${user.emailAddresses}&createdAt=${user.createdAt.getFullYear()}` : "https://educhain.io/user?firstName=firstName&lastName=lastName&emailAddress=emailAddress&createdAt=userJoined"} bgColor="white" fgColor="#FFFFFF0D" size={200} />
          </div>

          <input className="bg-white/5 w-[90%] p-3 rounded-lg disabled:text-gray-400" type="text" value={isLoaded ? CryptoJS.AES.encrypt("testing", `${user.id}`) : ""} disabled />
          <p className="text-xs">Your profile, 100% legitimate and secure</p>
          <Button className="mb-4 bg-white text-black hover:bg-white.60">Share your ID</Button>
        </div>
      </div>
    </div>
  )
}
