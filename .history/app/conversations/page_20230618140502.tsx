import { useSession,signOut } from 'next-auth/react'
import Link from 'next/link'
import React, { useCallback } from 'react'

export default function page() {
    const session = useSession
    const logout = useCallback(() => {
        if (session?.status === "authenticated") {
            console.log('logout')
    })
  return (
    <div>
        <button onClick={() => signOut()}
    </div>
  )
}
