'use client'

import './globals.css'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import Sidebar from './main/components/Sidebar'




export const metadata = {
  title: 'Seered',
  description: 'Seered : Stream Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
