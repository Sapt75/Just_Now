import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import userInterfaceConfigs from '../main/user-interface/UserInterfaceConfigs';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';
import appsConfigs from '../main/apps/appsConfigs';
import pagesConfigs from '../main/pages/pagesConfigs';
import authRoleExamplesConfigs from '../main/auth/authRoleExamplesConfigs';
import DocumentationConfig from '../main/documentation/DocumentationConfig';

const routeConfigs = [
  ...appsConfigs,
  ...dashboardsConfigs,
  ...pagesConfigs,
  ...authRoleExamplesConfigs,
  ...userInterfaceConfigs,
  DocumentationConfig,
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
];


let user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).urole : null

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to={`${user === "admin" ? "pages/add_new_car" : user === "manager" ? "/pages/manage_model" : "pages/add_new_car"} `} />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '*',
    element: <Navigate to="pages/error/404" />,
  },
];

export default routes;
