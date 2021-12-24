import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomBarChart } from '../../Components/AnalysisOfTraining/CustomBarChart';

const mockResponseForBarChart = {
  response: {
    sante: [
      { label: 'lorem', value: 5 },
      { label: 'lorem', value: 4 },
      { label: 'lorem', value: 3 },
      { label: 'lorem', value: 2 },
      { label: 'lorem', value: 1 }
    ],
    famille: [
      { label: 'lorem', value: 10 },
      { label: 'lorem', value: 9 },
      { label: 'lorem', value: 8 },
      { label: 'lorem', value: 7 },
      { label: 'lorem', value: 4 }
    ],
    logement: [
      { label: 'lorem', value: 10 },
      { label: 'lorem', value: 9 },
      { label: 'lorem', value: 8 },
      { label: 'lorem', value: 7 },
      { label: 'lorem', value: 3 }
    ],
    aleasDeLaVie: [
      { label: 'lorem', value: 20 },
      { label: 'lorem', value: 15 },
      { label: 'lorem', value: 10 },
      { label: 'lorem', value: 7 },
      { label: 'lorem', value: 6 }
    ],
    ecologie: [
      { label: 'lorem', value: 10 },
      { label: 'lorem', value: 9 },
      { label: 'lorem', value: 8 },
      { label: 'lorem', value: 7 },
      { label: 'lorem', value: 1 }
    ]
  }
};

export default {
  title: 'Components/CustomBarChart',
  component: CustomBarChart
} as ComponentMeta<typeof CustomBarChart>;

const Template: ComponentStory<typeof CustomBarChart> = args => {
  return <CustomBarChart {...args} />;
};

export const OnlyChart = Template.bind({});
OnlyChart.storyName = 'Only chart';
OnlyChart.args = {
  values: [
    mockResponseForBarChart.response.sante,
    mockResponseForBarChart.response.famille,
    mockResponseForBarChart.response.logement,
    mockResponseForBarChart.response.aleasDeLaVie,
    mockResponseForBarChart.response.ecologie
  ]
};
