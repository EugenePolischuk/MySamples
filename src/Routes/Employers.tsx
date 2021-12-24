import Protection from '../Pages/Employers/Protection';
import Permanence from '../Pages/Employers/Permanence';
import Formation from '../Pages/Employers/Formation';
import Marketplace from '../Pages/Employers/Marketplace';


const EmpRoutes = [
    {
        path: '/emp-protection',
        name: 'Employers-protection',
        component: Protection
    },
    {
        path: '/emp-permanence',
        name: 'Employers-permanence',
        component: Permanence
    },
    {
        path: '/emp-formation',
        name: 'Employers-formation',
        component: Formation
    },
    {
        path: '/emp-marketplace',
        name: 'Employers-marketplace',
        component: Marketplace
    },
];

export default EmpRoutes;