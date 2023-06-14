import React from 'react';



import Image from 'next/image'




const Footer:React.FC = () => {
    
    return(
        <div className='bg-black mt-5 w-full h-auto '>
            <div className='flex justify-center flex-col items-center'>

            <div className='flex gap-5 items-center '>
            <div className='flex gap-6  items-center mt-10 cursor-pointer'>
                <div className='bg-white p-2'>

                <Image src="/twitter.png" width={50} height={50} alt="twitter"/>
                </div>
                <div className='bg-white p-2'>

                <Image src="/facebook-app-symbol.png" width={50} height={50} alt="facebook"/>
                </div>
                <div className='bg-white p-2'>

                <Image src="/whatsapp.png" width={50} height={50} alt="instagram"/>
                </div>

             

            </div>
            <div className='flex items-center mt-10 gap-5 cursor-pointer '>
                <Image src='/qs.jpg' width={100} height={100} alt="houselogic"/>
                <Image src='/times1.jpg' width={100} height={100} alt="houselogic"/>

            </div>
            </div>
            <div className='flex gap-5 mt-10 cursor-pointer'>
              
                    <p className='text-white text-lg font-bold'>About</p>
                    <p className='text-white text-lg font-bold'>Blog</p>
                    <p className='text-white text-lg font-bold'>Careers</p>
                    <p className='text-white text-lg font-bold'>Contact</p>
                    <p className='text-white text-lg font-bold'>Help</p>
                </div>
                <div className='  mt-10 cursor-pointer'>
                    <h1 className='text-white text-lg font-bold'>Contact Information</h1>
                    <div>
                    <p className='text-white text-lg font-bold'>Daffodil International University</p>
                    <p className='text-white text-lg font-bold'>Daffodil Smart City (DSC),</p>
                    <p className='text-white text-lg font-bold'>Birulia, Savar, Dhaka-1216</p>
                    <p className='text-white text-lg font-bold'>Tel: +8802224441833, +8802224441834</p>
                    <p className='text-white text-lg font-bold'>Help Line: 09617901212</p>
                    <p className='text-white text-lg font-bold'>E-mail: admission@daffodilvarsity.edu.bd</p>
                    
                    </div>
                  
                </div>
                <div className='mt-5 border-t-8 border-white border-dotted'>
                    <h1 className='text-white text-lg font-bold'>Copyright © 2023 Daffodil International University. All Rights Reserved.</h1>
                 
             
                </div>
            </div>
           

        </div>
    )
}
export default Footer;