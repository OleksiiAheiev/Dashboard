import { PublicLayout } from "@layout/PublicLayout";
import { PAGE_PATH } from "./paths";
import { AuthLayout } from "@layout/AuthLayout";
import { lazy } from "react";

const Login = lazy(() => import('@pages/auth/Login'))
const Register = lazy(() => import('@pages/auth/Register'))

const LoginRoutes = {
  element: <PublicLayout />,
  children: [
    {
      element: <AuthLayout />,
      children: [
        {
          path: PAGE_PATH.login,
          element: <Login />
        },
        {
          path: PAGE_PATH.register,
          element: <Register />
        }
      ]
    }
  ]
}

export default LoginRoutes;
