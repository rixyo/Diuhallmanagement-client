import React from 'react';
import Image from 'next/image'
import AuthForm from '../components/Authform';


const page:React.FC = () => {
    const bgImageStyle = {
        backgroundImage: "url('/campus.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };
    
    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 h-screen" style={bgImageStyle}   >
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
          
           <Image
           alt='Threaded Logo'
           src='/logo.png'
           width="100"
           height="100"
           className="mx-auto  w-auto"
           loading="eager"
     
            /> 
           <h2 className="mt-2 text-center text-3xl font-extrabold text-white tracking-tighter">
             Signin to your account
           </h2>
     
         </div>
         <AuthForm/>
        </div>
       )
}
export default page;