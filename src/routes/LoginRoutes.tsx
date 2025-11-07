import PublicLayout from "@layout/PublicLayout";
import { PAGE_PATH } from "./paths";
import AuthLayout from "@layout/AuthLayout";
import Login from "@pages/auth/Login";
import Register from "@pages/auth/Register";


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
