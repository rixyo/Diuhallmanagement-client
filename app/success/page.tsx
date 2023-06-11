import React from 'react';
import { GoVerified } from 'react-icons/go';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return (
        <div className='flex flex-col justify-start items-center h-screen'>
      <GoVerified size={200} className="text-sky-500 mb-2"/>
      <div className='flex p-2  flex-col justify-center items-center'>
          <h1 className='text-3xl font-semibold text-sky-500'>Thanks  for your Payment.</h1>
      <h1 className='text-3xl  text-black p-2'>You successfully paid your hall's monthly bill. We send your receipt through your email.</h1>
      </div>

  </div>
    )
}
export default page;