"use client"
import React from 'react';
import useApplicationHistory from '../hooks/useApplicationHistory';
import { Application } from '../type';
import HistoryFeed from './components/HistoryFeed';


type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    const {data}=useApplicationHistory()
    console.log(data)

    
    return (
        <div>
     {data?.map((item:Application,index)=>(
        <HistoryFeed key={index} item={item} />
     ))}
        </div>
    )
}
export default page;