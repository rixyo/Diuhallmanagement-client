import useSWR from 'swr';
import fetcher from "../libs/fetcher";
import { User } from '../type';

const useCurrentUser = () => {

    const url=`${process.env.NEXT_PUBLIC_API_URL}/auth/me`;
 
    const { data, error, isLoading, mutate } = useSWR<User>(url, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
};
export default useCurrentUser;