"use client"
import React, { useState } from 'react';
import Item from './Item';
import { User } from '@/app/type';
export type Tab = {
    title: string;
    href?: string;

}
interface LeftPartProps {
    user:User
}

const AuthRightPart:React.FC<LeftPartProps> = ({user}) => {
   
    const AuthTabs:Tab[] = [{
        title: 'Home',
        href: '/',
       
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
  
{user && <div className="flex  w-full items-center justify-center" >
            {AuthTabs.map((tab, index) =>
            <Item key={index} tab={tab}  selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
             )}
        </div>
}
        </>

    )
}
export default AuthRightPart;