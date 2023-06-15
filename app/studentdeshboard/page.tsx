"use client"
import React from 'react';
import useCurrentUser from '../hooks/useCurrentUser';
import withAuth from '../hooks/WithAuth';
import GridLoader from 'react-spinners/GridLoader';


const page:React.FC = () => {
    const {data:user,isLoading} = useCurrentUser()
    if(isLoading){
        return(
            <div className='flex justify-center items-center w-full h-screen'>
                <GridLoader color='#0d6efd' size={20} />
            </div>
        )
    }
 
    return(
        <div className=' w-full p-5 '>
            <h1 className='text-2xl font-bold text-center'>Student Deshboard</h1>
            <div className=' mt-5 p-2 '>
            <h1 className='text-xl font-semibold text-center mt-5'>Basic Student Information</h1>
            <div className='flex flex-col items-center justify-center mt-5'>

                <p className='text-lg font-semibold text-center'>{user?.name}</p>
                <p className='text-lg font-semibold text-center'>{user?.email}</p>
            </div>

            </div>
        </div>
    
    )
}
export default withAuth(page);