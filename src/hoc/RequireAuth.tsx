import { useAuth } from '../hooks/auth';
import { Navigate } from 'react-router-dom';
import React from 'react';

type PageProps = {
  children: JSX.Element;
};

const RequireAuth: React.FC<PageProps> = ({ children }) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RequireAuth;
