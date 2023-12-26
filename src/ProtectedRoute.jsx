import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/authContext';
import { useEffect } from 'react';

const ProtectedRoute = () => {

    const { isAutenticated, loading} = useAuth();

    if( !isAutenticated && !loading) return <Navigate to='/' replace/>

  return (
    <Outlet/>
  )
}

export default ProtectedRoute