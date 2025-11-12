
import { PrivateLayout } from '@layout/PrivateLayout';
import { PAGE_PATH } from './paths';
import { Suspense } from 'react';

const MainRoutes = {
  element: <PrivateLayout />,
  children: [
    {
      path: PAGE_PATH.dashboard,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <>dashboard</>
        </Suspense>
      )
    }
  ]
}

export default MainRoutes;
