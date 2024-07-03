import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <div>
          <p>User ID: {user.id}</p>
          <p>Username: {user.username}</p>
        </div>
      )}
    </div>
  );
};
