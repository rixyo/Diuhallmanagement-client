"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { FaUniversity } from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const MobileNav = () => {
    const router=useRouter()
  
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
        <div className='flex flex-col gap-5 '>
        <div className='flex items-center'>
            <AiOutlineHome className="inline-block w-6 h-6 mr-2" />
            Home
        </div>
        <div className='flex items-center'>
            <CgProfile className="inline-block w-6 h-6 mr-2" />
          Profile
            </div>
        <div className='flex items-center'>
          <FaUniversity className="inline-block w-6 h-6 mr-2" />
            Hall Facilities
        </div>
        <div className='flex items-center'>
            <HiOutlineLocationMarker className="inline-block w-6 h-6 mr-2" />
         Location
        </div>
            <div className='flex items-center' onClick={()=>router.push("/Auth")}>
            <MdOutlineLogin className="inline-block w-6 h-6 mr-2" />
          Login/Signup
            </div>
      </div>
        </div>

    </Disclosure>
  </div>
  )
}

export default MobileNav