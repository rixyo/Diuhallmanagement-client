"use client"
import React,{useCallback, useState} from 'react';
import {useForm,FieldValues,SubmitHandler, set} from 'react-hook-form'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import Input from './Input';
import Button from './Button';
import Image from 'next/image';
import { redis } from '../libs/redis';
type Vairant="Login" | "Register"
const AuthForm:React.FC = () => {
    const [variant, setVariant] = useState<Vairant>("Login")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [passwordType, setPasswordType] = useState<string>("password")
    const [customError,setError]=useState<string>("")
    const router = useRouter()
   

  //toggle variant
    const toggleVariant = useCallback(() => {
        if(variant === "Login"){
            setVariant("Register")
        }else{
            setVariant("Login")
        }
    },[variant,setVariant])
    //form
    const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
        defaultValues:{
            email:"",
            name:"",
            password:""
        }
    })
    //register/login
    const onSubmit:SubmitHandler<FieldValues> = async (data) => {
       if(variant === "Login"){
        setIsLoading(true)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,data).then(async (res)=>{
            setIsLoading(false)
            toast.success("Login Successfull")
           router.refresh()
           router.push("/")
           
            const cashedToken = await redis.get("token")
            if(!cashedToken){

              await redis.set("token",res.data,{ex:60*60})
            }
           
        }).catch(()=>{
            setIsLoading(false)
            toast.error("Login Failed")
           
        })
       }
     
      
         else if(variant === "Register"){
          try {
          const isWhitespace = /^(?=.*\s)/;
          if (isWhitespace.test(data.password)) {
            setIsLoading(false)
            throw new Error( "Password must not contain Whitespaces.")
          }
      
      
          const isContainsUppercase = /^(?=.*[A-Z])/;
          if (!isContainsUppercase.test(data.password)) {
            setIsLoading(false)
            throw new Error( "Password must have at least one Uppercase Character.")
          }
      
      
          const isContainsLowercase = /^(?=.*[a-z])/;
          if (!isContainsLowercase.test(data.password)) {
            setIsLoading(false)
            throw new Error( "Password must have at least one Lowercase Character.")
          }
      
      
          const isContainsNumber = /^(?=.*[0-9])/;
          if (!isContainsNumber.test(data.password)) {
            setIsLoading(false)
            throw new Error( "Password must contain at least one Digit.")
          }
          const isContainsSymbol =
          /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
        if (!isContainsSymbol.test(data.password)) {
          setIsLoading(false)
          throw new Error( "Password must contain at least one Special Symbol.")
        }
    
    
        const isValidLength = /^.{6,}$/;
        if (!isValidLength.test(data.password)) {
          setIsLoading(false)
          throw new Error( "Password must be  minimam 6 Characters Long.")
        }
        else{
          setError("")
          setIsLoading(true)
          axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup/STUDENT`, data).then(()=>{
            setIsLoading(false)
            toast.success("Account Created Successfully")
            setVariant("Login")
          }).catch(()=>{
            setIsLoading(false)
            toast.error("Account Creation Failed")
          })
        
         
        }
            
          } catch (error:any) {
          console.log(error.message)
          setError(error.message)
            
          }
          
        
           
         }
    }
    //show password
    const showPassword=useCallback(()=>{
   
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      },[passwordType,setPasswordType])
   
 
    
    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'> 
            <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    
                  {variant==="Register" &&
                   <Input
                   id='name'
                   label='Name'
                    type='text'
                   register={register}
                   required
                   errors={errors}
                   />
                  } 
                    <Input
                    id='email'
                    label='Email'
                    type='email'
                    register={register}
                    required
                    disabled={isLoading}
                    errors={errors}
                    
                    />
                    <div className='relative '>
                    <Input
                    id='password'
                    label='Password'
                    type={passwordType}
                    register={register}
                    required
                    disabled={isLoading}
                    errors={errors}
                    
                    />
                       {customError && <p className='text-red-500 text-sm my-2' >{customError}</p>}
                       <div className='absolute hidden md:block md:-right-10 md:top-10 lg:mr-2 ' onClick={showPassword}>{passwordType==="password"?<Image src="/eye.png" width={20} height={20} className='text-2xl text-gray-400' alt={''}/>:
                       <Image src="/hidden.png" width={20} height={20} className='text-2xl text-gray-400' alt={'icon'}/>}</div>
                    </div>
                    <div>
          <Button
          onClick={()=>{}}
          label={variant}
          />
          </div>
                  
                </form>
                <div className="mt-6">
          <div className="relative">
            <div 
              className="
                absolute 
                inset-0 
                flex 
                items-center
              "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or
              </span>
            </div>
          </div>
        </div>
        <div 
          className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
        >
          <div>
          {variant === 'Login' ? 'Donot have account?' : 'Already have an account?'} 
          </div>
          <div 
            onClick={toggleVariant} 
            className="underline cursor-pointer"
          >
         {variant === 'Login' ? 'Create an account' : 'Login'}
          </div>
        </div>
                
              </div>
            </div>

    
    )
}
export default AuthForm;