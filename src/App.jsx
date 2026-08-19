import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/registration/registration';
import Login from './components/authorization/authorization';
import Home from './components/Home/Home';
import CreateProduct from './components/createProduct/CreateProduct'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
        
      
        <Route path="/register" element={<Registration />} />
        
      
        <Route path="/login" element={<Login />} />
        
      
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;