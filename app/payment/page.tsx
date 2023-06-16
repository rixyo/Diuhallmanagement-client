"use client"
import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js'
import useCurrentUser from '../hooks/useCurrentUser';
import withAuth from '../hooks/WithAuth';
import GridLoader from 'react-spinners/GridLoader';
import Image from 'next/image'
import { toast } from 'react-hot-toast';
import { redis } from '../libs/redis';
const page:React.FC = () => {
    const {data:user,isLoading}=useCurrentUser()
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)
 const getToken=async()=>{
  return await redis.get("token")

 }
    const submit = useCallback(async () => {
      try {
        if(!user) return
        const token=await getToken()
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/payment/create-payment-intent`,
          { line_items: getLineItems() },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
    
        const stripe = await stripePromise;
        await stripe?.redirectToCheckout({ sessionId: data.id });
      } catch (error) {
        toast.error('Something went wrong');
      
        console.error('Error:', error);
      }
    }, [user,getToken]);
    
    const getLineItems = () => { 
   
      return [
      {
        price_data: {
          currency: 'BDT',
          unit_amount: 2500 * 100,
          product_data: {
            name:user?.name,
            description: 'Hall Fee',
         
          },
        },
        quantity: 1,
      }
      ];
    };
    if(isLoading){
      return(
          <div className='flex justify-center items-center w-full h-screen'>
              <GridLoader color='#0d6efd' size={20} />
          </div>
      )
  }
    
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-center'>Payment</h1>
            <div className='flex gap-10 justify-center items-center mt-5'>
                <div className='w-auto cursor-pointer' onClick={submit}>
                  <Image src='/credit-card.png' width={100} height={100} alt='card' />
                  

                </div>
                <div className='w-auto cursor-pointer'>
                <Image src='/bank.png' width={100} height={100} alt='card' />
              
              </div>
          

            </div>
        </div>
    )
}
export default withAuth( page);