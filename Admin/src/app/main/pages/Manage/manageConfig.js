import Manage_Model from './managemodel';
import Manage_Brand from './managebrand';
import Manage_Varient from './managevarient';
import Manage_Price from './manageprice';
import Manage_Footer from './managefooter';


const Master = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: 'pages/manage_model',
            element: <Manage_Model />
        },
        {
            path: 'pages/manage_brand',
            element: <Manage_Brand />
        },
        {
            path: 'pages/manage_varient',
            element: <Manage_Varient />
        },
        {
            path: 'pages/manage_price',
            element: <Manage_Price />
        },
        {
            path: 'pages/manage_footer',
            element: <Manage_Footer />
        }
    ],
};

export default Master;

