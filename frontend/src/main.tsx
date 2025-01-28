import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './features/home/pages/Home.tsx';
import AuthLayout from './features/auth/Layout.tsx';
import SignUpForm from './features/auth/pages/SignUp.tsx';
import SignIn from './features/auth/pages/SignIn.tsx';

// TODO: write tests with vitest and cypress

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
