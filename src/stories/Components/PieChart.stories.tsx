import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PieChart } from '../../Components/PieChart/PieChart';

export default {
  title: 'Components/PieChart',
  component: PieChart
} as ComponentMeta<typeof PieChart>;

const data = [
  {
    id: 'id-1',
    name: 'Santé',
    value: 36,
    color: '#90C6FD'
  },
  {
    id: 'id-2',
    name: 'Logement',
    value: 5,
    color: '#FE6C6C'
  },
  {
    id: 'id-3',
    name: 'Ecologie',
    value: 20,
    color: '#94E37B'
  },
  {
    id: 'id-4',
    name: 'Famille',
    value: 40,
    color: '#FFD572'
  },
  {
    id: 'id-5',
    name: 'Aléas de la vie',
    value: 20,
    color: '#8D79F6'
  }
];

const Template: ComponentStory<typeof PieChart> = args => {
  return <PieChart {...args} />;
};

export const OnlyChart = Template.bind({});
OnlyChart.storyName = 'Only chart';
OnlyChart.args = {
  data,
  size: 320
};
