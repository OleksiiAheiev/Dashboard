import PublicLayout from "@layout/PublicLayout";
import { PAGE_PATH } from "./paths";


const LoginRoutes = {
  element: <PublicLayout />,
  children: [
    {
      // element: <AuthLayout />,
      children: [
        {
          path: PAGE_PATH.login,
          element: <>login</>
        },
        {
          path: PAGE_PATH.register,
          element: <>reg </>
        }
      ]
    }
  ]
}

export default LoginRoutes;
