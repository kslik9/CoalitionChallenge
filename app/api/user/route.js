import { NextResponse } from "next/server"
import { clerkClient, currentUser } from "@clerk/nextjs"

export async function POST(request) {
  const curr = await currentUser();
  const body = await request.json()
  const users = await clerkClient.users.getUserList({ emailAddress: body.email })

  return NextResponse.json({ users, curr })
}
