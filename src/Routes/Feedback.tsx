import Suggestions from '../Pages/Feedback/Suggestions';
import FlagshipFeedback from '../Pages/Feedback/Flagship';
import ProviderFeedback from '../Pages/Feedback/Provider';


const FeedbackRoutes = [
    {
        path: '/feedback-suggestions',
        name: 'Suggestions',
        component: Suggestions,
    },
    {
        path: '/feedback-flagship',
        name: 'Flagship-feedback',
        component: FlagshipFeedback,
    },
    {
        path: '/feedback-provider',
        name: 'Provider-feedback',
        component: ProviderFeedback
    },
];

export default FeedbackRoutes;