import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is a protected route. Only authenticated users can see this.</p>
    </div>
  );
};
