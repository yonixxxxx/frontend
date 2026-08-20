import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/registration/registration';
import Login from './components/authorization/authorization';
import Home from './components/Home/Home';
import CreateProduct from './components/createProduct/CreateProduct';
import Account from './components/account/my-account';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './routes/ProtectedRoute'; 

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Navigate to="/login" replace />} />
          
        
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />

      
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/create-product" 
            element={
              <ProtectedRoute>
                <CreateProduct />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/my-account" 
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;