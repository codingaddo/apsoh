import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TopNavbar from './components/TopNavbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home|APSOH',
  description: 'The official school website',
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavbar/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
