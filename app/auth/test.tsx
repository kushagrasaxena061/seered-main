'use client'

import React  from 'react'
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Test = () => {
    const { data: session, status } = useSession()
    const router = useRouter()
    if (status === "authenticated") {
        return (
            <div className='text-3xl text-white p-6 bg-red-600 font-bold'>
                Signed in as {session?.user?.email}
                <br/><br/> {session?.user?.name}
                <br/><br/>
                <button onClick={() => signOut()} >Sign Out</button>
            </div>
       
        )
    }
    if(status==="unauthenticated"){
        return router.push('/auth')
    }

}

export default Test
