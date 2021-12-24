import Dashboard from '../Pages/Dashboard';
import { Authentification } from '../Pages/Authentification';
import { RedirectAuth } from '../Pages/RedirectAuth';
import ImpactActions from '../Pages/ImpactActions';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import Resources from '../Pages/Resources';
import Partners from '../Pages/Partners';
import Indicators from '../Pages/Indicators';
import Profile from '../Pages/Profile';
import ProviderFeedback from '../Pages/Feedback/Provider';
import Questionnaires from '../Pages/Questionnaires';
import PartnerArea from '../Pages/PartnerArea';
import CreateAction from '../Pages/CreateAction';
import Contact from '../Pages/Contact';
import Podcasts from '../Pages/Podcasts';
import ServiceSheet from '../Pages/Accompaniement/ServiceSheet';
import Catalog from '../Pages/Catalog';
import Informations from '../Pages/Informations';
import Indices from '../Pages/Administrator/Indices';
import List_HR from '../Pages/Administrator/List_HR';
import PartnerDetails from '../Pages/Administrator/PartnerDetails';
import AddAPartner from '../Pages/Administrator/AddAPartner';
import { FicheClient } from '../Pages/Administrator/FicheClient';
import { TableauDeBord } from '../Pages/Administrator/TableauDeBord';
import { IndicatorsGlobal } from '../Pages/Administrator/IndicatorGlobal';
import { Retour } from '../Pages/Administrator/Retour';
import { IndicateursParPartenaire } from '../Pages/Administrator/IndicateursParPartenaire';

import CommunicationRoutes from './Communication';
import EmployerRoutes from './Employers';
import ParameterRoutes from './Parameters';
import FeedbackRoutes from './Feedback';
import AccompanimentRoutes from './Accompaniment';



export const RoutesAuth = [
  {
    path: '/auth',
    name: 'Authentification',
    component: Authentification
  },
  {
    path: '/auth/redirect/',
    name: 'Redirect-auth',
    component: RedirectAuth
  }
];
const Routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/impact-actions',
    name: 'Impact-actions',
    component: ImpactActions
  },
  {
    path: '/privacy-policy',
    name: 'Privacy-policy',
    component: PrivacyPolicy
  },
  {
    path: '/resources-rse',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/indicators',
    name: 'Indicators',
    component: Indicators
  },
  {
    path: '/provider-feedback',
    name: 'Provider-feedback',
    component: ProviderFeedback
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/questionnaires',
    name: 'Questionnaires',
    component: Questionnaires
  },
  {
    path: '/partner-area',
    name: 'Partner-Area',
    component: PartnerArea
  },
  {
    path: '/indices',
    name: 'Indices-Phare',
    component: Indices
  },
  {
    path: '/list-hr',
    name: 'LIST-HR',
    component: List_HR
  },
  {
    // todo rename PAGE
    path: '/partner-details',
    name: 'Provider List',
    component: PartnerDetails
  },
  {
    path: '/add-partner',
    name: 'Add-partner',
    component: AddAPartner
  },
  {
    path: '/create-action',
    name: 'CreateAction',
    component: CreateAction,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/podcasts',
    name: 'Podcasts',
    component: Podcasts,
  },
  {
    path: '/service-sheet',
    name: 'ServiceSheet',
    component: ServiceSheet,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/informations',
    name: 'Informations',
    component: Informations,
  },
  // admin
  {
    path: '/fiche-client',
    name: 'Fiche-client',
    component: FicheClient
  },
  {
    path: '/tableau-de-bord',
    name: 'Tableau-bord',
    component: TableauDeBord
  },
  {
    path: '/indicator-global',
    name: 'IndicatorsGlobal',
    component: IndicatorsGlobal
  },
  {
    path: '/retour',
    name: 'Retour',
    component: Retour
  },
  {
    path: '/indicateurs-par-partenaire',
    name: 'Indicateurs - Par partenaire',
    component: IndicateursParPartenaire
  }
].concat(CommunicationRoutes)
 .concat(EmployerRoutes)
 .concat(FeedbackRoutes)
 .concat(ParameterRoutes)
 .concat(AccompanimentRoutes);

export default Routes;