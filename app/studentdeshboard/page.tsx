"use client"
import React, { useEffect} from 'react';
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/navigation';
import useCurrentUser from '../hooks/useCurrentUser';



export interface jwtRespone {
    id: string;
    name: string;
    role:Role;
    iat: number;
    exp: number;
}
enum Role {
    ADMIN = "ADMIN",
    STUDENT = "STUDENT"
}


const page:React.FC = () => {
    const router=useRouter()
    const {data:user}=useCurrentUser()
    const token = typeof window !== 'undefined' ? localStorage?.getItem('token') : null;
    useEffect(()=>{
        if(!token){
          return
        }
        else if(token) {
            const decoded = jwt.decode(token) as jwtRespone;
            if (decoded.exp * 1000 < Date.now()) {
                localStorage.removeItem('token')
          router.push("/auth")
        }
        else if(decoded.role==="STUDENT") {
            router.push("/studentdeshboard")
        }
    }
      },[])
    
    return(
        <div className='w-full p-5 '>
            
            <h1 className='text-2xl font-bold text-center'>Student Deshboard</h1>
            <div className=''>
            <h1 className='text-xl font-semibold text-center mt-5'>Basic Student Information</h1>
            <div className='flex flex-col items-center justify-center mt-5'>

                <p className='text-lg font-semibold text-center'>{user?.name}</p>
                <p className='text-lg font-semibold text-center'>{user?.email}</p>
            </div>
              
            </div>

        </div>
    
    )
}
export default page;