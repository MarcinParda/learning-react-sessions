import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {isAuthenticated ? (
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <p>
          Please <Link to="/login">login</Link> to access protected routes.
        </p>
      )}
      <p>
        <Link to="/public">Public Page</Link>
      </p>
    </div>
  );
};
