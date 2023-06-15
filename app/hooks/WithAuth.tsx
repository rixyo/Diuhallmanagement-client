
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { redis } from '../libs/redis';
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const getToken=async()=>{
      return await redis.get("token")
    }

    useEffect(() => {
      async function isAuthenticate(){
        const token =await getToken()
      
        if (!token) {
          router.push('/auth');
        }
      }
      isAuthenticate()
    }, []);

   

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;