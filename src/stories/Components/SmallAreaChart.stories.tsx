import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SmallAreaChart } from '../../Components/SmallAreaChart/SmallAreaChart';

export default {
  title: 'Components/Small Area Chart',
  component: SmallAreaChart
} as ComponentMeta<typeof SmallAreaChart>;

const Template: ComponentStory<typeof SmallAreaChart> = args => (
  <SmallAreaChart {...args} />
);

export const FirstCard = Template.bind({});
FirstCard.storyName = 'First Card';
FirstCard.args = {
  data: [
    {
      id: 'id-q',
      value: 7
    },
    {
      id: 'id-A',
      value: 5
    },
    {
      id: 'id-B',
      value: 10
    },
    {
      id: 'id-C',
      value: 8
    },
    {
      id: 'id-D',
      value: 13
    },
    {
      id: 'id-E',
      value: 3
    },
    {
      id: 'id-F',
      value: 5
    },
    {
      id: 'id-G',
      value: 4
    },
    {
      id: 'id-z',
      value: 3
    }
  ],
  title: 'Utilisateurs'
};
