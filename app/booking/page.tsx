"use client"
import React, { useCallback,  useState } from 'react';
import Input from './components/ApplicationInput';
import ImageUpload from '../components/Imageupload';
import Button from '../components/Button';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import withAuth from '../hooks/WithAuth';
import { redis } from '../libs/redis';
interface FormData {
    name: string;
    email: string;
    studentId: string;
    mobileNumber: string;
    guardianName: string;
    guardianNID: string;
    guardianMobileNumber: string;
  }
  
  const initialState: FormData = {
    name: '',
    email: '',
    studentId: '',
    mobileNumber: '',
    guardianName: '',
    guardianNID: '',
    guardianMobileNumber: '',
  };

const page:React.FC = () => {
    const [formData, setFormData] = useState<FormData>(initialState);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    const [candidateImage,setImage]=useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const token = typeof window !== 'undefined' ? localStorage?.getItem('token') : null;
        const handleChange=(value:string)=>{
          setImage(value)
        
      }
      const getToken=async()=>{
       return await redis.get("token")
       }
      const onSubmit = useCallback(async()=>{
        setIsLoading(true)
        const token=await getToken()
       await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/application`,{ candidateImage,name:formData.name,
        email:formData.email,studentId:formData.studentId,mobileNumber:formData.mobileNumber,guardianName:formData.guardianName,guardianNID:formData.guardianNID,
         guardianMobileNumber:formData.guardianMobileNumber},{
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            }
        }).then(()=>{
            setIsLoading(false)
            toast.success("Application submitted successfully")
            setImage("")
            formData.name=""
            formData.email=""
            formData.studentId=""
            formData.mobileNumber=""
            formData.guardianName=""
            formData.guardianNID=""
            formData.guardianMobileNumber=""
            
        


        }).catch((err)=>{
            setIsLoading(false)
            toast.error("Something went wrong")
            console.log(err)
        })
        
      },[formData,candidateImage])
    
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
                name='name'
                onChange={handleInputChange}
                value={formData.name}
                placeholder='Name'
                disabled={isLoading}
                />
                   <Input
                label='Email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Email'
                disabled={isLoading}
                />
               
                   <Input
                label='Student ID'
                name='studentId'
                value={formData.studentId}
                onChange={handleInputChange}
                placeholder='Student ID'
                disabled={isLoading}
                />
                   <Input
                label='Mobile Number'
                name='mobileNumber'
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder='Mobile Number'
                disabled={isLoading}
                />
                    <Input
                label='Guardian Name'
                name='guardianName'
                value={formData.guardianName}
                onChange={handleInputChange}
                placeholder='Guardian Name'
                disabled={isLoading}
                />
                  <Input
                label='Guardian NID'
                name='guardianNID'
                value={formData.guardianNID}
                onChange={handleInputChange}
                placeholder='Guardian NID'
                disabled={isLoading}
                />
                  <Input
                label='Guardian Mobile Number'
                name='guardianMobileNumber'

                
                value={formData.guardianMobileNumber}
                onChange={handleInputChange}
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