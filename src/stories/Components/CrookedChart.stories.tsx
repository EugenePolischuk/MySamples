import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CrookedChart } from '../../Components/CrookedChart/CrookedChart';

export default {
  title: 'Components/CrookedChart',
  component: CrookedChart
} as ComponentMeta<typeof CrookedChart>;

const data = [
  { name: '', value: 2700 },
  { name: 'Jan', value: 2500 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 3500 },
  { name: 'Apr', value: 5800 },
  { name: 'May', value: 3800 },
  { name: 'Jun', value: 4000 },
  { name: 'Jul', value: 3000 },
  { name: '', value: 4200 }
];

const Template: ComponentStory<typeof CrookedChart> = args => {
  return (
    <div style={{ width: '100%', height: 600 }}>
      <CrookedChart {...args} />
    </div>
  );
};

export const OnlyChart = Template.bind({});
OnlyChart.storyName = 'Only chart';
OnlyChart.args = {
  data
};
