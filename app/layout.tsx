import MobileNav from './components/navbar/MobileNav'
import NavigationBar from './components/navbar/Navbar'
import ToasterContext from './context/ToasterContext'
import './globals.css'
import { redis } from './libs/redis'
export const metadata = {
  title: 'Diu Hall',
  description: 'Diu Hall Management System',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token=await redis.get('token') as string;
  return (
    <html lang="en">
      <body>
        <div className='mx-5 my-10 lg:my-5'>
          <MobileNav token={token} />
          <NavigationBar token={token} />
        </div>
      <ToasterContext/>

        {children }
     
      
        </body>
    </html>
  )
}
