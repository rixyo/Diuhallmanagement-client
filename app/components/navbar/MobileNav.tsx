"use client"
import React, { useEffect, useState } from 'react'
import { Disclosure } from "@headlessui/react";
import { Tab } from './Rightpart/RightPart';
import Image from 'next/image';
import Item from '@/app/components/navbar/Rightpart/Item';
import { useRouter,usePathname } from 'next/navigation';
interface Props {
  token: string;
}
const MobileNav:React.FC<Props> = ({token}) => {
    const [selectedTab,setSelectedTab]=useState<string>('')
    const router = useRouter();
    const path = usePathname();
    useEffect(() => {
      if (path !== '/auth' && !token) {
         router.refresh();
      }
    }, [path, router, token]);
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
     
 
    }
  ]
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
 
        href: '#section2',
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


  
  return (
    <div className="block md:hidden my-5 ">
 <Disclosure as="nav">
      <Disclosure.Button className="absolute top-4 left-2 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
      <Image src="/menu.png" alt='menu' width={20} height={20} />
      </Disclosure.Button>
      <div className="p-6 w-1/2 h-screen bg-gray-300 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200" key={Math.random()/2}>
        {token&& AuthTabs.map((tab, index) =>(
        
          <Item key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
         
        ))}
         {!token && Tabs.map((tab) =>(
      
          <Item key={Math.random()%10} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
     
        ))}
     
        </div>

    </Disclosure>
  </div>
  )
}

export default MobileNav