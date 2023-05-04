import { useEffect, useState } from 'react';

import { IBird } from 'context/BirdsContext';
import { getBirds } from '../service/config';

const useFetching = () => {
  const [data, setData] = useState<IBird[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res: IBird[] = await getBirds();
        setData(res);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    }
    getData();
  }, []);

  return [data, loading, error];
};

export default useFetching;
