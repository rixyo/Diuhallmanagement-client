"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdLogout,  MdPayment } from "react-icons/md";
import { Tab } from './Rightpart/RightPart';
import { GoHistory } from 'react-icons/go';
import { TbBrandBooking } from 'react-icons/tb';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import Item from '@/app/components/navbar/Rightpart/Item';

const MobileNav = () => {
    const {data:user}=useCurrentUser()
    const [selectedTab,setSelectedTab]=useState<string>('')
    const AuthTabs:Tab[] = [{
      title: 'Home',
      href: '/',
      icon:AiOutlineHome
    },
    {
      title:"Profile",
      href: '/studentdeshboard',
      icon:CgProfile

    },
    {
      title:"History",
      href: '/',
      icon:GoHistory
    },
    {
      title:"Payment",
      href: '/',
      icon:MdPayment

    },
    {
      title:"Book Room",
      href: '/',
      icon:TbBrandBooking

    },
    {
      title: 'Logout',
      href: '/',
      icon:MdLogout
    }
  ]
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
  
  return (
    <div className="block md:hidden mb-5">
 <Disclosure as="nav">
      <Disclosure.Button className="absolute top-4 left-2 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
        <GiHamburgerMenu
          className="block md:hidden h-6 w-6"
          aria-hidden="true"
        />
      </Disclosure.Button>
      <div className="p-6 w-1/2 h-screen bg-gray-300 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        {user?.role==='STUDENT' && AuthTabs.map((tab, index) =>(
          <>
          <Item key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
          </>
        ))}
         {!user && Tabs.map((tab, index) =>(
          <>
          <Item key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
          </>
        ))}
     
        </div>

    </Disclosure>
  </div>
  )
}

export default MobileNav