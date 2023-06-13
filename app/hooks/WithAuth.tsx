
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useCurrentUser from './useCurrentUser';
import GridLoader from 'react-spinners/GridLoader';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuthComponent: React.FC<P> = (props) => {
    const { data, isLoading } = useCurrentUser();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !data) {
        router.push('/auth');
      }
    }, [isLoading, data, router]);

    if (isLoading || !data) {
      return <div className="flex items-center justify-center h-full">
      <GridLoader color="#3B82F6" />
      </div>
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;