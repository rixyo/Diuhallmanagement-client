"use client"
import React, { useCallback } from 'react';
import { BsBank } from 'react-icons/bs';
import { FaCreditCard } from 'react-icons/fa';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js'
import useCurrentUser from '../hooks/useCurrentUser';
const page:React.FC = () => {
    const {data:user}=useCurrentUser()
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)
    const token = typeof window !== 'undefined' ? localStorage?.getItem('token') : null;
    const  line_items = [
        {
            price_data: {
                currency: 'BDT',
                product_data: {
                  name: user?.name,

               
                },
                unit_amount: 2500 * 100 
              },
              quantity: 1
            },

    ]
    
    const submit=useCallback(async()=>{
        const {data} = await axios.post('http://localhost:5000/payment/create-payment-intent', {line_items}, {
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}` ,
            }
        }
      
        )
        const stripe = await stripePromise;
        await stripe?.redirectToCheckout({sessionId: data.id})

    },[user?.name])
    
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-center'>Payment</h1>
            <div className='flex gap-5 justify-center mt-5'>
                <div className='w-auto cursor-pointer border-2 border-gray-300 p-5' onClick={submit}>
                  
                    <FaCreditCard className='text-6xl text-center text-gray-900' title='card'/>

                </div>
                <div className='w-auto cursor-pointer border-2 border-gray-300 p-5'>
                  
                  <BsBank className='text-6xl text-center text-gray-900' title="bank"/>

              </div>
          

            </div>
        </div>
    )
}
export default page;