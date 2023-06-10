import MobileNav from './components/navbar/MobileNav'
import NavigationBar from './components/navbar/page'
import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Diu Hall',
  description: 'Diu Hall Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       

     
        <div className='mx-5 my-5 border-2'>
          <MobileNav />
          <NavigationBar />
        
          <div className='fixed'>

          </div>
        </div>
        <div className=''>

        {children}
        </div>
        </body>
    </html>
  )
}
