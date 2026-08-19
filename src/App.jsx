import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/registration/registration';
import Login from './components/authorization/authorization';
import Home from './components/Home/Home'; // <--- 1. ДОБАВИЛИ ИМПОРТ

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Теперь главная страница "/" — это ваш новый Home */}
        <Route path="/" element={<Home />} />
        
        {/* Страница регистрации */}
        <Route path="/register" element={<Registration />} />
        
        {/* Страница входа */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;