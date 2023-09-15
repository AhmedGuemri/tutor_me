import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'

import Image from 'next/image'
import logo from '../public/logo.png'

const inter = Inter({ subsets: ['latin'] })
const dm_serif_display = DM_Serif_Display({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Tutor Me',
  description: 'Your go-to online tutoring platform.',
}


function NavBar () {
  return (
    <div className='p-8 fixed w-screen'>
      <div className='bg-yellow-400 rounded-xl p-2 flex justify-around items-center font-serif font-bold'>
        <div className=' pointer-events-none'>
          <Image src={logo} height={64} width={100} alt='logo'/>
        </div>
        {["HOMEPAGE", "HOW IT WORKS", "ABOUT US"].map(el => (
          <p className=' hidden md:block'>{el}</p>
        ))}
        <p className=' rounded-lg bg-yellow-500 p-3 shadow-md hover:shadow-xl'>SIGN UP</p>
      </div>
    </div>
  )
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dm_serif_display.className}>
        <div className=' h-screen w-screen'>
          {children}
          <NavBar/>

        </div>
        </body>
    </html>
  )
}
