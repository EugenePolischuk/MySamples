import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CrookedComparisonCard } from '../../Components/CrookedComparisonCard/CrookedComparisonCard';

export default {
  title: 'Components/Crooked Comparison',
  component: CrookedComparisonCard
} as ComponentMeta<typeof CrookedComparisonCard>;

const Template: ComponentStory<typeof CrookedComparisonCard> = () => (
  <CrookedComparisonCard width='600px' height='407px' />
);

export const FirstCard = Template.bind({});
FirstCard.storyName = 'First Card';
