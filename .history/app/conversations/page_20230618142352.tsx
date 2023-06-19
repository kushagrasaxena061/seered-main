import { useSession,signOut } from 'next-auth/react'
import Link from 'next/link'
import React, { useCallback , useEffect } from 'react'

export default function page() {
    const session = useSession
    const logout = useCallback(() => {
        useEffect(() => {
            if (session?.status === 'authenticated') {
              router.push('/conversations')
            }
          }, [session?.status, router]);
    }

  return (
    <div>
        <button onClick={() => signOut()}
    </div>
  )
}
