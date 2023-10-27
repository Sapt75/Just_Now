import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Inquiries = lazy(() => import('./Inquiries'));
// const ManageUsers = lazy(() => import('./ManageUsers'));

const errorPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/inquiries',
      element: <Inquiries/>
    //   children: [
    //     {
    //       path: '',
    //       element: <Navigate to="" />,
    //     },
    //     {
    //       path: '/',
    //       element: <Inquiries />,
    //     },
        // {
        //   path: 'manage',
        //   element: <ManageUsers />,
        // },
    //   ],
    },
  ],
};

export default errorPagesConfig;
