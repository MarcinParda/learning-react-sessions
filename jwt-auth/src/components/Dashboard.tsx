import React, { useEffect, useState } from 'react';
import { fetchProtectedData, refreshAuthToken } from '../services/api';

export const Dashboard: React.FC = () => {
  const [secret, setSecret] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchProtectedData();
        const data = JSON.parse(response);
        setSecret(data.data);
      } catch (error) {
        console.error(error);
        await refreshAuthToken();
        await fetchData();
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is a protected route. Only authenticated users can see this.</p>
      <p>{secret}</p>
    </div>
  );
};
