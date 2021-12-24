import Employers from '../Pages/Parametrs/Employers';
import Administrators from '../Pages/Parametrs/Administrators';
import AddAdministartor from '../Pages/Parametrs/AddAdministartor';

const ParamRoutes = [
    {
        path: '/parameters-employers',
        name: 'Employers',
        component: Employers
    },
    {
        path: '/parameters-administrators',
        name: 'Administrators',
        component: Administrators
    },
    {
        path: '/parameters-add-administrator',
        name: 'Add Administartor',
        component: AddAdministartor
    },
];

export default ParamRoutes;