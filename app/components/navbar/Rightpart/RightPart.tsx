"use client"
import React, { useState } from 'react';
import Item from './Item';
import { User } from '@/app/type';
import { IconType } from 'react-icons';



export type Tab = {
    title: string;
    href?: string;
    icon?:IconType
}
interface LeftPartProps {
    user:User
}

const LeftPart:React.FC<LeftPartProps> = ({user}) => {
    const Tabs:Tab[] = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title:"Hall Facilities",
         
            href: '/',
        },
        {
            title: 'Location',
     
            href: ''
        },
        {
            title: 'Contact Us',
        
            href: '/'
    
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
  
{!user && <div className="flex  w-full items-center justify-center" >
            {Tabs.map((tab, index) =>
            <Item key={index} tab={tab}  selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
             )}
        </div>
}
{user && <div className="flex  w-full items-center justify-center" >
            {AuthTabs.map((tab, index) =>
            <Item key={index} tab={tab}  selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
             )}
        </div>
}
        </>

    )
}
export default LeftPart;