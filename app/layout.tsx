import './globals.css'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import Hero from './(site)/components/Hero/Hero'
import Footer from './(site)/components/Footer'

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
          <Footer/>
        </AuthContext>
      </body>
    </html>
  )
}
