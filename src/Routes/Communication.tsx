import CommPhare from '../Pages/Communication/CommPhare';
import CommKit from '../Pages/Communication/CommKit';
import Report from '../Pages/Communication/Report';
import Tool from '../Pages/Communication/Tool';
import Obligations from '../Pages/Communication/Obligations';


const CommRoutes = [
    {
        path: '/comm-phare',
        name: 'Communication',
        component: CommPhare
    },
    {
        path: '/comm-tool',
        name: 'Tool',
        component: Tool
    },
    {
        path: '/comm-kit',
        name: 'Comm-kit',
        component: CommKit
    },
    {
        path: '/comm-report',
        name: 'Report-rse',
        component: Report
    },
    {
        path: '/comm-obligations',
        name: 'Obligations',
        component: Obligations
    },
];

export default CommRoutes;