"use client"
import React from 'react';
import useCurrentUser from '../hooks/useCurrentUser';
import withAuth from '../hooks/WithAuth';
import GridLoader from 'react-spinners/GridLoader';


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

    const {data:user,isLoading}=useCurrentUser()
  
    if (isLoading || !user) {
        return <div className="flex items-center justify-center h-full">
        <GridLoader color="#3B82F6" />
        </div>
      }
    
    return(
        <div className='w-full p-5 '>
            
            <h1 className='text-2xl font-bold text-center'>Student Deshboard</h1>
            <div className='border-2 border-gray-300 mt-5 p-2'>
            <h1 className='text-xl font-semibold text-center mt-5'>Basic Student Information</h1>
            <div className='flex flex-col items-center justify-center mt-5'>

                <p className='text-lg font-semibold text-center'>{user?.name}</p>
                <p className='text-lg font-semibold text-center'>{user?.email}</p>
            </div>
              
            </div>

        </div>
    
    )
}
export default withAuth( page);