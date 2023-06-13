"use client"
import React from 'react';
import LeftPart from './Rightpart/RightPart';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { User } from '@/app/type';
import useSWR from 'swr';
import fetcher from '@/app/libs/fetcher';
import GridLoader from 'react-spinners/GridLoader';
import AuthRightPart from './Rightpart/AuthRightPart';

export default function NavigationBar() {
    const router=useRouter()
    const url=`${process.env.NEXT_PUBLIC_API_URL}/auth/me`;
 
    const { data:user, isLoading } = useSWR<User>(url, fetcher);
 
 
   
  return (
    <>
      <div className='hidden lg:block'>
        <div className='flex  border-2 border-gray-400 mt-2 rounded items-center gap-5'>
    <Image src ='/logo.png' width={100} height={100} alt='logo' className='cursor-pointer' priority={false}   onClick={()=>router.push('/')} />

   {!user && <LeftPart/>}
   {user &&<AuthRightPart user={user as User}/>}



   {user?.role==="STUDENT" && 
   <div className='mx-5 cursor-pointer ' onClick={()=>router.push('/studentdeshboard')}>
    <Image src ='/graduated.png' width={50} height={100} alt='logo' className='cursor-pointer' priority={false}   />

   
    </div>
   } 

        </div>

    </div>
  
    </>
  )
}