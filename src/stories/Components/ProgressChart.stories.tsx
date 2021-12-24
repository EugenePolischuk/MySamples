import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressChart } from '../../Components/ProgressChart/ProgressChart';

export default {
  title: 'Components/ProgressChart',
  component: ProgressChart
} as ComponentMeta<typeof ProgressChart>;

const Template: ComponentStory<typeof ProgressChart> = args => {
  return <ProgressChart {...args} />;
};

export const OnlyChart = Template.bind({});
OnlyChart.storyName = 'Only chart';
OnlyChart.args = {
  value: 78,
  name: 'Taux d’engagement'
};
