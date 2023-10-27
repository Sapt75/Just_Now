import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Settings = lazy(() => import('./Settings'));

const settingsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/settings',
      element: <Settings/>
    },
  ],
};

export default settingsConfig;
