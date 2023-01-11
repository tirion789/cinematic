import { useAuth } from '../hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import React from 'react';

type PageProps = {
  children: JSX.Element;
};

const RequireRegister: React.FC<PageProps> = ({ children }) => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  if (isAuth) {
    navigate(-1);
    return <Navigate to="/home" />;
  }
  return children;
};

export default RequireRegister;
