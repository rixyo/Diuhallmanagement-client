import { Application } from '@/app/type';
import React from 'react';
import Image from 'next/image'

type HistoryFeedProps = {
    item:Application
};
const HistoryFeed:React.FC<HistoryFeedProps> = ({item}) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full '>
            <div className='flex flex-col items-center border-2 border-gray-300 rounded p-10 mt-5'>
            <Image src={item.candidateImage} width={100} height={100} className='boreder-2 rounded' alt='candidateImage'/>
                <h1 className='text-xl font-semibold'>Applicant Name: { item.name}</h1>
                <h1 className='text-xl font-bold'>Student Id: { item.studentId}</h1>
                <p className='text-xl hover:underline text-sky-400'>Eamil: { item.email}</p>
                <p className='text-xl font-medium underline'>Mobile Number: {item.mobileNumber}</p>
                <p className='text-xl font-bold'>Guardian Name: {item.guardianName}</p>
                <p className='text-xl font-bold'>Guardian National Id: {item.guardianNID}</p>
                <p className='text-xl font-bo'>Application Date: {item.created_at.split('T')[0]}</p>
           
            </div>

        </div>
    )
}
export default HistoryFeed;