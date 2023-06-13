"use client"
import React from 'react';
import Image from 'next/image';
import withAuth from '../hooks/WithAuth';
const page:React.FC= () => {
    
    return (
        <div className='flex flex-col justify-start items-center h-screen'>
            <Image src='/checked.png' width='100' height='100' alt='' />
   
      <div className='flex p-2  flex-col justify-center items-center'>
          <h1 className='text-3xl font-semibold text-sky-500'>Thanks  for your Payment.</h1>
      <h1 className='text-3xl  text-black p-2'>You successfully paid your hall's monthly bill. We send your receipt through your email.</h1>
      </div>

  </div>
    )
}
export default withAuth( page);