import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const MyProfile = lazy(() => import('./MyProfile'));

const myprofileConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/my-profile',
      element: <MyProfile/>
    },
  ],
};

export default myprofileConfig;
