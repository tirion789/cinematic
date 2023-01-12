import { useAuth } from '../hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';

type PageProps = {
  children: JSX.Element;
};

const RequireRegister: React.FC<PageProps> = ({ children }) => {
  const { isAuth } = useAuth();
  const location = useLocation();
  if (isAuth) {
    return <Navigate to="/home" state={{ from: location }} />;
  }
  return children;
};

export default RequireRegister;
