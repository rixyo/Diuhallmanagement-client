"use client"
import React, { useState } from 'react';
import Item from './Item';


export type Tab = {
    title: string;
    href?: string;
}

const LeftPart:React.FC = () => {
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
            href: '/Auth'
                        
        }

       
        
      
    ]
    const [selectedTab,setSelectedTab]=useState<string>('')
    
    return (
        <>
  
{ <div className="flex  w-full items-center justify-center" >
            {Tabs.map((tab, index) =>
            <Item key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
             )}
        </div>
}
        </>

    )
}
export default LeftPart;