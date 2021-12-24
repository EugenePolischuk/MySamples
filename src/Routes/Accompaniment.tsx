import Family from '../Pages/Accompaniement/Family';
import Ecology from '../Pages/Accompaniement/Ecology';
import Transport from '../Pages/Accompaniement/Transport';
import Housing from '../Pages/Accompaniement/Housing';
import LifeHazards from '../Pages/Accompaniement/LifeHazards';
import DigitalLife from '../Pages/Accompaniement/DigitalLife';

const AccRoutes = [
  {
    path: '/acc-family',
    name: 'Accompaniment-family',
    component: Family
  },
  {
    path: '/acc-ecology',
    name: 'Accompaniment-ecology',
    component: Ecology
  },
  {
    path: '/acc-transport',
    name: 'Accompaniment-transport',
    component: Transport
  },
  {
    path: '/acc-housing',
    name: 'Accompaniment-housing',
    component: Housing
  },
  {
    path: '/acc-life-hazards',
    name: 'Accompaniment-life-hazards',
    component: LifeHazards
  },
  {
    path: '/acc-digital-life',
    name: 'Accompaniment-digital-life',
    component: DigitalLife
  }
];

export default AccRoutes;
