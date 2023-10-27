import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ChangePassword = lazy(() => import('./ChangePassword'));

const errorPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/change-password',
      element: <ChangePassword/>
    },
  ],
};

export default errorPagesConfig;
