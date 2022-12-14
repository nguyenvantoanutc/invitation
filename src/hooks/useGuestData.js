import {useEffect, useState} from 'react';
import offlineGuestData from '../../api/guest-data.json';

function useGuestData() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    setLoading(true);

    try {
      setData(offlineGuestData || []);
      setLoading(false);
    } catch {
      console.error('ERR_WHEN_HIT_DATA');
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return { data, loading, refetch: handleFetch };
}

export default useGuestData;
