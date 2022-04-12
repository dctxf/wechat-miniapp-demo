import { RequestTask } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';

export const useRequest = <T = any, P = {}>(service: (params?: P) => RequestTask<T>, options?: { manual?: boolean; params?: P }) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const run = useCallback(
    async (paramsData?: P) => {
      setLoading(true);
      return service(paramsData)
        .then((res) => {
          setData(res as any);
          return res;
        })
        .catch((err) => {
          setError(err);
          return Promise.reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [service],
  );

  useEffect(() => {
    if (!options || !options.manual) {
      run();
    }
    return () => {};
  }, [options, run]);

  return { data, loading, error, run };
};
