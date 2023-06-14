"use client"
import React, { useCallback } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js'
import useCurrentUser from '../hooks/useCurrentUser';
import withAuth from '../hooks/WithAuth';
import GridLoader from 'react-spinners/GridLoader';
import Image from 'next/image'
const page:React.FC = () => {
    const {data:user,isLoading}=useCurrentUser()
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)
    const token = typeof window !== 'undefined' ? localStorage?.getItem('token') : null;
    const submit = useCallback(async () => {
      try {
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
        // Handle the error, e.g., display an error message to the user
        console.error('Error:', error);
      }
    }, [token]);
    
    const getLineItems = () => { 
      return [
        {
          price_data: {
            currency: 'BDT',
            product_data: {
              name: user?.name,
            },
            unit_amount: 2500 * 100,
          },
          quantity: 1,
        },
      ];
    };
    if (isLoading || !user) {
        return <div className="flex items-center justify-center h-full">
        <GridLoader color="#3B82F6" />
        </div>
      }
    
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-center'>Payment</h1>
            <div className='flex gap-10 justify-center items-center mt-5'>
                <div className='w-auto cursor-pointer border-2 ' onClick={submit}>
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