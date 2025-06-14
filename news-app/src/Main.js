import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import AuthForm from './components/AuthForm';

const Main = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/home" element={<App />} />
    <Route path="/login" element={<AuthForm mode="login" />} />
    <Route path="/register" element={<AuthForm mode="register" />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
);

export default Main;
