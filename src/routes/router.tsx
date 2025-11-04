import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import { PAGE_PATH } from './paths';
import { ErrorBoundary } from 'ErrorBoundary';
import PrivateLayout from 'layout/PrivateLayout';
import { Suspense } from 'react';
import PublicLayout from 'layout/PublicLayout';

const InitialRoute = () => {
  const isAuthenticated = true;
  return <Navigate to={isAuthenticated ? PAGE_PATH.dashboard : PAGE_PATH.main} replace />;
};

const router = createBrowserRouter([
  {
    path: PAGE_PATH.main,
    // element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <InitialRoute /> },
      {
        element: <PrivateLayout />,
        children: [
          {
            path: PAGE_PATH.dashboard,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <></>
              </Suspense>
            )
          }
        ]
      },
      {
        element: <PublicLayout />,
        children: [
          // {
          //   element: <AuthLayout />,
          //   children: [
          //     {
          //       path: PAGE_PATH.login,
          //       element: <Login />
          //     },
          //     {
          //       path: PAGE_PATH.register,
          //       element: <Register />
          //     },
          //   ]
          // }
        ]
      },
      { path: "*", element: <Navigate to={PAGE_PATH.main} replace /> }
    ]
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}