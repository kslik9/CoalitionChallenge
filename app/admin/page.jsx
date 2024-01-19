"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import QRCode from "react-qr-code"
import { useEffect } from "react"
import { useState } from "react"

export default function admin() {
  const [state, setState] = useState(false)
  const [data, setData] = useState("testing")
  const [mail, setMail] = useState("")

  useEffect(() => {
    async function go() {
        if (mail != "")
        {
            try {
              const res = await fetch("/api/user", {
                method: "POST",
                body: JSON.stringify({
                  email: mail,
                }),
              })
              const data = await res.json()
              setData(data.users)
              
            } catch (error) {
              console.error("Error fetching data:", error)
            }
        }
    }

    go()
  }, [state])

  return (
    <div className="w-screen h-screen bg-white text-black">
    <div className="max-w-4xl m-auto grid p-5 lg:p-0 lg:grid-cols-2 gap-20 h-screen items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setState((prev) => !prev)
          }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
          <div className="text-3xl font-bold pb-2">Hello Redouan</div>
            <div className="text-white bg-black text-xs rounded-lg px-2 py-1">staff member</div>
          </div>
          <div className="font-semibold">Look up for a user in Educhain.</div>
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="Student's full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input onChange={(e) => setMail(e.target.value)} value={mail} id="email" placeholder="Student's email" type="email" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-date">Start Date</Label>
              <Input id="start-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date">End Date</Label>
              <Input id="end-date" type="date" />
            </div>
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
        <Card className="flex flex-col items-center justify-center h-96">
          <div>{data.length == 0 && <div className="font font-semibold pb-4 text-red-700">Sorry we could not to find a user under this email!</div> }</div>
          <div className="bg-white w-52 h-52 rounded-lg flex items-center justify-center">
            <QRCode value={data == "testing"  ||  data.length != 1 ? "https://educhain.io/user?firstName=firstName&lastName=lastName&emailAddress=emailAddress&createdAt=userJoined" :   `https://educhain.ma/user?firstName=${data[0].firstName}&lastName=${data[0].lastName}&emailAddress=${data[0].emailAddresses[0].emailAddress}&createdAt=${data[0].createdAt}`} bgColor="white" fgColor={data == "testing" || data.length != 1? "#EBEBE4" : "black"} size={200} />
          </div>
        </Card>
      </div>    
    </div>
  )
}
