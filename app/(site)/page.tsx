'use client'

import Test from "../auth/test";
import Hero from "./components/Hero/Hero";
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Home = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  if (status === "authenticated") {
    return (
      <div>
        <Test/>
        <button onClick={() => signOut()}>sign out</button>
      </div>
    )
  }
  if (status === "unauthenticated"){
    return (
      <Hero/>
    )
  }
  if (status === "loading"){
    return (
      <div className="items-center text-white text-3xl font-bold">Loading..</div>
    )
  }
  return (
    <div>
      
      <Hero/>
    </div>
  )
}

export default Home;
