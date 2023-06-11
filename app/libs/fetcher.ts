
import axios, { AxiosRequestConfig } from 'axios';

const fetcher = async (url: string) => {
   const token = localStorage.getItem('token');
   if(!token) return Promise.reject('unauthorized');
 
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}` ,
      
    
    },
  };

  const res = await axios.get(url, config);
  return res.data;
};

export default fetcher;