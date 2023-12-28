import Grids from "@/components/Home/Grids"
import Hero from "@/components/Home/Hero"
import Safe from "@/components/Home/Safe"
import Service from "@/components/Home/Service"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Hero />
      <Grids />
      <Service />
      <Safe />
    </main>
  )
}
