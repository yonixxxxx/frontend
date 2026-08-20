
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();


  if (loading) {
    return <div style={{ color: '#a1a3a2', padding: '40px', textAlign: 'center' }}>Загрузка...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }


  return children;
};

export default ProtectedRoute;