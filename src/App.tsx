import { Link, Route, Routes } from 'react-router';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Landing from './pages/landing/Landing';
import { Container } from '@chakra-ui/react';
import AuthLayout from './pages/auth/AuthLayout';

function App() {
  return (
    <Container>
      <Routes>
        <Route index element={<Landing />} />

        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Container>
  );
}

export default App;
