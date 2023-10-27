import { lazy } from 'react';
import Brand_Master from './brandmaster';
import Post_Office_Master from "./postofficemaster"
import Dealer from './dealermaster';

const Masters = lazy(() => import('./brandmaster'));
// const ManageFuelType = lazy(() => import('./ManageFuelType'));
// const EditFuelType = lazy(() => import('./EditFuelType'));

const Master = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: 'pages/brand_master',
            element: <Brand_Master />
        },
        {
            path: 'pages/post_office_master',
            element: <Post_Office_Master />
        },
        {
            path: 'pages/dealer_master',
            element: <Dealer />
        },
    ],
};

export default Master;
