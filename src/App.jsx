import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/registration/registration';
import Login from './components/authorization/authorization';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Главная страница - Регистрация */}
        <Route path="/" element={<Registration />} />
        
        {/* Страница входа */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;