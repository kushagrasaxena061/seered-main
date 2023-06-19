import { useSession,signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function page() {
    const session = useSession
  return (
    <div>
        <button onClick={() => signOut()}
    </div>
  )
}
