import useSWR from 'swr';
import fetcher from "@/app/libs/fetcher";
import { Application } from '../type';

const useApplicaionHistory = () => {

    const url=`${process.env.NEXT_PUBLIC_API_URL}/application/history`;
 
    const { data, error, isLoading, mutate } = useSWR<Application[]>(url, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
};
export default useApplicaionHistory;