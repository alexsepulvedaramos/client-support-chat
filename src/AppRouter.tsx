import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AuthLayout } from './auth/layout/AuthLayout';
import { LoginPage } from './auth/pages/LoginPage';
import { RegisterPage } from './auth/pages/RegisterPage';
import { sleep } from './lib/sleep';
import Spinner from './components/ui/spinner';

// import ChatLayout from './chat/layout/ChatLayout';
const ChatLayout = lazy(async () => {
  await sleep(1500);
  return import('./chat/layout/ChatLayout');
});
const ChatPage = lazy(() => import('./chat/pages/ChatPage'));
const NoChatSelectedPage = lazy(
  async () => import('./chat/pages/NoChatSelectedPage'),
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="/auth" element={<Navigate to="/auth/login" />} /> */}
        </Route>

        <Route
          path="/chat"
          element={
            <Suspense fallback={<Spinner />}>
              <ChatLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <NoChatSelectedPage />
              </Suspense>
            }
          />
          <Route
            path=":clientId"
            element={
              <Suspense fallback={<Spinner />}>
                <ChatPage />
              </Suspense>
            }
          />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
