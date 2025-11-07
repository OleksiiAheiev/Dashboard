import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import { PAGE_PATH } from './paths';
import { ErrorBoundary } from '../ErrorBoundary';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import AppLayout from '@layout/AppLayout';

const InitialRoute = () => {
  const isAuthenticated = false;
  return <Navigate to={isAuthenticated ? PAGE_PATH.dashboard : PAGE_PATH.main} replace />;
};

const router = createBrowserRouter([
  {
    path: PAGE_PATH.main,
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <InitialRoute /> },
      MainRoutes, LoginRoutes,
      { path: "*", element: <Navigate to={PAGE_PATH.main} replace /> }
    ]
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
