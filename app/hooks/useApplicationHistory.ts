import useSWR from 'swr';
import fetcher from "@/app/libs/fetcher";
import { Application } from '../type';

const useApplicaionHistory = () => {

    const url=`http://localhost:5000/application/history`;
 
    const { data, error, isLoading, mutate } = useSWR<Application[]>(url, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
};
export default useApplicaionHistory;