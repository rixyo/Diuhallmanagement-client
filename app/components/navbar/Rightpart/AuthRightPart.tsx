"use client"
import React, { useState } from 'react';
import Item from './Item';
import { User } from '@/app/type';
export type Tab = {
    title: string;
    href: string;

}


const AuthRightPart:React.FC = () => {
   
    const AuthTabs:Tab[] = [{
        title: 'Home',
        href: '/',
       
      },
      {
        title:"Profile",
        href: '/studentdeshboard',
      },
      {
        title:"History",
        href: '/history',
    
      },
      {
        title:"Payment",
        href: '/payment',
  

      },
      {
        title:"Book Room",
        href: '/booking',
       

      },
      {
        title: 'Logout',
        href: '/',
    
      }
    ]
    const [selectedTab,setSelectedTab]=useState<string>('')
    
    return (
        <>
  
 <div className="flex  w-full items-center justify-center" >
            {AuthTabs.map((tab, index) =>
            <Item key={index} tab={tab}  selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
             )}
        </div>

        </>

    )
}
export default AuthRightPart;