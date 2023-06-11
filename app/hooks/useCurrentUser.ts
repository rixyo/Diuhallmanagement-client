import useSWR from 'swr';
import fetcher from "@/app/libs/fetcher";
import { User } from '../type';

const useCurrentUser = () => {

    const url=`http://localhost:5000/auth/me`;
 
    const { data, error, isLoading, mutate } = useSWR<User>(url, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
};
export default useCurrentUser;