"use client"
import React, { useState } from 'react';
import Item from './Item';
import { User } from '@/app/type';



export type Tab = {
    title: string;
    href?: string;

}


const LeftPart:React.FC= () => {
    const Tabs:Tab[] = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title:"Hall Facilities",
         
            href: '#section1',
        },
        {
            title: 'Location',
     
            href: '#section2'
        },
        {
            title: 'Contact Us',
        
            href: '#section3',
    
        },
        {
            title: 'Login/Signup',
            href: '/auth'
                        
        }

       
      
    ]
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
  
{<div className="flex  w-full items-center justify-center" >
            {Tabs.map((tab, index) =>
            <Item key={index} tab={tab}  selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
             )}
        </div>
}

        </>

    )
}
export default LeftPart;