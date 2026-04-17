import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AuthLayout } from './auth/layout/AuthLayout';
import { LoginPage } from './auth/pages/LoginPage';
import { RegisterPage } from './auth/pages/RegisterPage';

// import ChatLayout from './chat/layout/ChatLayout';
const ChatLayout = lazy(async () => {
  await sleep(1500);
  return import('./chat/layout/ChatLayout');
});
import ChatPage from './chat/pages/ChatPage';
import { sleep } from './lib/sleep';

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
            <Suspense
              fallback={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                  }}
                >
                  <div
                    style={{
                      border: '4px solid #f3f3f3',
                      borderTop: '4px solid #3498db',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      animation: 'spin 1s linear infinite',
                    }}
                  />
                  <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                </div>
              }
            >
              <ChatLayout />
            </Suspense>
          }
        >
          <Route index element={<ChatPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
