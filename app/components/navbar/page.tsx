"use client"
import React from 'react';
import LeftPart from './Rightpart/RightPart';
import Image from 'next/image'
import Search from './Search';
import { FaUserAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import { User } from '@/app/type';

export default function NavigationBar() {
    const router=useRouter()
    const {data:user}=useCurrentUser()
   
  return (
    <>
      <div className='hidden lg:block'>
        <div className='flex  border-2 border-gray-400 mt-2 rounded items-center gap-5'>
    <Image src ='/logo.png' width={100} height={100} alt='logo' className='cursor-pointer'   onClick={()=>router.push('/')} />
    <Search/>
    <LeftPart user={user as User}/>
   {user?.role==="STUDENT" && 
   <div className='mx-5 cursor-pointer ' onClick={()=>router.push('/studentdeshboard')}>
   <FaUserAlt className='w-5 h-5 text-gray-500 ' size={100}/>
   
    </div>
   } 

        </div>

    </div>
  
    </>
  )
}