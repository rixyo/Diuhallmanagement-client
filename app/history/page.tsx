"use client"
import React from 'react';
import useApplicationHistory from '../hooks/useApplicationHistory';
import { Application } from '../type';
import HistoryFeed from './components/HistoryFeed';
import GridLoader from 'react-spinners/GridLoader';
import withAuth from '../hooks/WithAuth';



const page:React.FC = () => {
    const {data,isLoading}=useApplicationHistory()
    if (isLoading || !data) {
        return <div className="flex items-center justify-center h-full">
        <GridLoader color="#3B82F6" />
        </div>
    }

    return (
        <div>
     {data?.map((item:Application,index)=>(
        <HistoryFeed key={index} item={item} />
     ))}
        </div>
    )
}
export default withAuth( page);