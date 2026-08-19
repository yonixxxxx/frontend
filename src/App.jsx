import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/registration/registration';
import Login from './components/authorization/authorization';
import Home from './components/Home/Home';
import CreateProduct from './components/createProduct/CreateProduct'; // <--- ИМПОРТ НОВОЙ СТРАНИЦЫ

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Главная страница (лендинг) */}
        <Route path="/" element={<Home />} />
        
        {/* Страница регистрации */}
        <Route path="/register" element={<Registration />} />
        
        {/* Страница входа */}
        <Route path="/login" element={<Login />} />
        
        {/* Страница создания товара */}
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;