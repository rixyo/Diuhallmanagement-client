
import axios, { AxiosRequestConfig } from 'axios';
import { redis } from './redis';

const fetcher = async (url: string) => {
  try {
    const token = await redis.get('token');
    if(!token) return Promise.reject('unauthorized');
  
   const config: AxiosRequestConfig = {
     headers: {
       Authorization: `Bearer ${token}` ,
       
     
     },
   };
 
   const res = await axios.get(url, config);
 
   return res.data;
    
  } catch (error) {
    console.log(error);
  
    
  }
 
};

export default fetcher;