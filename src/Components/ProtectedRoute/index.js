import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const token = localStorage.getItem('auth-token');

  if (!token) {
    return <Navigate to="/login" replace />; // Use Navigate with replace
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
