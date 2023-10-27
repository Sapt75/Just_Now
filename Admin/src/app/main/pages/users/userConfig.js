import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const AddUser = lazy(() => import('./AddUser'));
const ManageUsers = lazy(() => import('./ManageUsers'));

const errorPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/user',
      children: [
        {
          path: '',
          element: <Navigate to="add" />,
        },
        {
          path: 'add',
          element: <AddUser />,
        },
        {
          path: 'manage',
          element: <ManageUsers />,
        },
      ],
    },
  ],
};

export default errorPagesConfig;
