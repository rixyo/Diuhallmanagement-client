"use client"
import React, { useEffect } from 'react';
import LeftPart from './Rightpart/RightPart';
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation';
import AuthRightPart from './Rightpart/AuthRightPart';
type NavbarProps = {
   token: string;
};
const Navbar:React.FC<NavbarProps> = ({token}) => {
   const router = useRouter();
   const path = usePathname();

   useEffect(() => {
      if (path !== '/auth' && !token) {
         router.refresh();
      }
   }, [path, router, token]);
   
 
      
   

   return (
      <>
    
    {path!='/auth' && <div className="hidden lg:block">
    <div className='flex  border-2 border-gray-400 mt-2 rounded items-center gap-5'>
<Image src ='/logo.png' width={100} height={100} alt='logo' className='cursor-pointer' priority={false}   onClick={()=>router.push('/')} />

{!token && <LeftPart/>}
{token &&<AuthRightPart/> }



    </div>

</div>
     
   } 
    </>
   )
}
export default Navbar;