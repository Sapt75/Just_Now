import Add_Car from '../Add Car/add_new_car';

const Add_New_Car = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: 'pages/add_new_car',
            element: <Add_Car />
        }
    ],
};

export default Add_New_Car;
