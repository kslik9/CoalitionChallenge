"use client"

import Side from "@/components/dashboard/side"
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import QRCode from "react-qr-code"
import CryptoJS from "crypto-js"

export default function Dashboard() {
  const { user, isLoaded } = useUser()

  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="hidden w-[25%] rounded-3xl bg-white/10 lg:block">
        <Side />
      </div>
      <div className="w-[35%] m-auto bg-white/10 rounded-xl p-8"> 
        <div className="w-full max-h-full  flex flex-col items-center gap-8">
              <div className="w-full bg-white/5 flex justify-between gap-10 p-4 rounded-lg ">
                {isLoaded ? <div>{user.fullName}</div> : <div></div>}
                <div>{isLoaded ? `${user.createdAt.getDate()} / ${user.createdAt.getFullYear()}` : ""} - Present</div>
              </div>
              <QRCode className="bg-white/5 p-4 rounded-2xl" value={isLoaded ? `https://educhain.ma/user?firstName=${user.firstName}&lastName=${user.lastName}&emailAddress=${user.emailAddresses}&createdAt=${user.createdAt.getFullYear()}` : "https://educhain.io/user?firstName=firstName&lastName=lastName&emailAddress=emailAddress&createdAt=userJoined"} bgColor="white" fgColor="#FFFFFF0D" size={200} />

              <input className="bg-white/5 w-[90%] p-3 rounded-lg disabled:text-gray-400" type="text" value={isLoaded ? CryptoJS.AES.encrypt("testing", `${user.id}`) : ""} disabled />
              <p className="text-xs">Your profile, 100% legitimate and secure</p>
              <Button className="mb-4 bg-white text-black hover:bg-white/60">Share your ID</Button>
        </div>
      </div>
    </div>
  )
}
{/* <div className="grid h-screen w-screen  overflow-hidden grid-cols-4"> */}