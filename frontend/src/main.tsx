import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './features/home/pages/Home.tsx';
import AuthLayout from './features/auth/Layout.tsx';
import SignUpForm from './features/auth/pages/SignUp.tsx';
import SignIn from './features/auth/pages/SignIn.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Profile from './features/private/pages/Profile.tsx';

// TODO: write tests with vitest and cypress

const QC = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={QC}>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />

          {/* TODO: make a layout? */}
          <Route path="profile" element={<Profile />} />

          <Route element={<AuthLayout />}>
            <Route path="sign-up" element={<SignUpForm />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
