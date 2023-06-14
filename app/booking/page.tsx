"use client"
import React, { useCallback,  useState } from 'react';
import Input from './components/ApplicationInput';
import ImageUpload from '../components/Imageupload';
import Button from '../components/Button';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import withAuth from '../hooks/WithAuth';

const page:React.FC = () => {

    const [candidateImage,setImage]=useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const token = typeof window !== 'undefined' ? localStorage?.getItem('token') : null;
    const [name,setName]=useState<string>("")
    const [email,setEmail]=useState<string>("")
    const [studentId,setStudentId]=useState<string>("")
    const [mobileNumber,setMobileNumber]=useState<string>("")
    const [guardianName,setGuardianName]=useState<string>("")
    const [guardianNID,setGuardianNid]=useState<string>("")
    const [guardianMobileNumber ,setGuardianMobileNumber]=useState<string>("")


        const handleChange=(value:string)=>{
          setImage(value)
        
      }
      const onSubmit = useCallback(async()=>{
        setIsLoading(true)
        if(candidateImage==="" || name==="" || email==="" || studentId==="" || mobileNumber==="" || guardianName==="" || guardianNID===""|| guardianMobileNumber===""){
            console.log(name,email,studentId,mobileNumber,guardianName,guardianNID,guardianMobileNumber)
            setIsLoading(false)
            return toast.error("Please fill all the fields")
        }
       await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/application`,{ candidateImage,name,email,studentId,mobileNumber,guardianName,guardianNID, guardianMobileNumber},{
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            }
        }).then(()=>{
            setIsLoading(false)
            toast.success("Application submitted successfully")
            setName("")
            setEmail("")
            setStudentId("")
            setMobileNumber("")
            setGuardianName("")
            setGuardianNid("")
            setImage("")
            setGuardianMobileNumber("")


        }).catch((err)=>{
            setIsLoading(false)
            toast.error("Something went wrong")
            console.log(err)
        })
        
      },[name,email,studentId,mobileNumber,guardianName,guardianNID,candidateImage,guardianMobileNumber])
    
    return (
        <div className='w-full p-5 h-screen' >
            <h1 className='text-2xl font-bold text-center'>Booking Page</h1>
            <ImageUpload
            label='Applicant Image'
            value={candidateImage}
            onChange={handleChange}
            />
            <div className='flex flex-col mt-10'>
                <Input
                label='Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='Name'
                disabled={isLoading}
                />
                   <Input
                label='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Email'
                disabled={isLoading}
                />
               
                   <Input
                label='Student ID'
                value={studentId}
                onChange={(e)=>setStudentId(e.target.value)}
                placeholder='Student ID'
                disabled={isLoading}
                />
                   <Input
                label='Mobile Number'
                value={mobileNumber}
                onChange={(e)=>setMobileNumber(e.target.value)}
                placeholder='Mobile Number'
                disabled={isLoading}
                />
                    <Input
                label='Guardian Name'
                value={guardianName}
                onChange={(e)=>setGuardianName(e.target.value)}
                placeholder='Guardian Name'
                disabled={isLoading}
                />
                  <Input
                label='Guardian NID'
                value={guardianNID}
                onChange={(e)=>setGuardianNid(e.target.value)}
                placeholder='Guardian NID'
                disabled={isLoading}
                />
                  <Input
                label='Guardian Mobile Number'
                
                value={guardianMobileNumber}
                onChange={(e)=>setGuardianMobileNumber(e.target.value)}
                placeholder='Guardian Mobile Number'
                disabled={isLoading}
                />
            </div>
            <div className='mt-2'>
            <Button
            label='Submit'
           onClick={onSubmit}

            />
            </div>
        </div>
    )
}
export default withAuth(page);