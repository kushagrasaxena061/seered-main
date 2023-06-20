'use client'

import Hero from "./components/Hero/Hero";
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Page from "../main/page";

const Home = () => {
  const { data: session, status } = useSession()
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default Home;
