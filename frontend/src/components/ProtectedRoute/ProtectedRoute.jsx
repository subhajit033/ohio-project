import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
