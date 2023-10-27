import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Privacy_Policy from './privacy_policy';
import Terms_Conditions from './terms_conditions';
import ModelPage from './model_page';
import About_Us from './about_page';
import HomePage from './home_page';

// const HomePage = lazy(() => import('./home_page'));
// const ManageFuelType = lazy(() => import('./ManageFuelType'));
// const EditFuelType = lazy(() => import('./EditFuelType'));

const AllPagesConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: 'pages/home_page',
            element: <HomePage />,
        },
        {
            path: 'pages/model_page',
            element: <ModelPage />,
        },
        {
            path: 'pages/privacy_policy',
            element: <Privacy_Policy />,
        },
        {
            path: 'pages/about_us',
            element: <About_Us />,
        },
        {
            path: 'pages/terms',
            element: <Terms_Conditions />,
        },
    ],
};

export default AllPagesConfig;
