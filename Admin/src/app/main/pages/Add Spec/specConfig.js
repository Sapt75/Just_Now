import Multiple from './multiSpec';
import Spec from './spec';
import SubSpecs from './subSpecs';


const Master = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: 'pages/spec',
            element: <Spec />
        },
        {
            path:'pages/spec/:item',
            element: <SubSpecs />
        },
        {
            path:'pages/spec/multi/:item',
            element: <Multiple />
        }
    ],
};

export default Master;

