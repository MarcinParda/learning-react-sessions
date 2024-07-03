import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Profile } from './components/Profile';
import { PublicPage } from './components/PublicPage';

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav>
        <ul>
          <PublicNavigationItems />
          {isAuthenticated ? (
            <AuthenticatedNavigationItems />
          ) : (
            <UnauthenticatedNavigationItems />
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
          }
        />
        <Route path="/public" element={<PublicPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

const AuthenticatedNavigationItems: React.FC = () => {
  const { logout } = useAuth();
  return (
    <>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <button onClick={logout}>Logout</button>
      </li>
    </>
  );
};

const UnauthenticatedNavigationItems: React.FC = () => (
  <li>
    <Link to="/login">Login</Link>
  </li>
);

const PublicNavigationItems: React.FC = () => (
  <>
    <li>
      <Link to="/public">Public Page</Link>
    </li>

    <li>
      <Link to="/">Home</Link>
    </li>
  </>
);

const App: React.FC = () => (
  <AuthProvider>
    <Router>
      <AppContent />
    </Router>
  </AuthProvider>
);

export default App;
