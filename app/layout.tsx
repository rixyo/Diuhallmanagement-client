import MobileNav from './components/navbar/MobileNav'
import NavigationBar from './components/navbar/page'
import ToasterContext from './context/ToasterContext'
import './globals.css'



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
       

     
        <div className='mx-5 my-10 lg:my-5'>
          <MobileNav />
          <NavigationBar />
        </div>
      <ToasterContext/>
        {children}
      
        </body>
    </html>
  )
}
