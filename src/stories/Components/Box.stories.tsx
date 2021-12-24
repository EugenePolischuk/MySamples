import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from '../../Components/Box';

export default {
  title: 'Box',
  component: Box
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => (
  <Box {...args} />
);

export const FirstCard = Template.bind({});
FirstCard.storyName = 'Default';
FirstCard.args = {
  width: '50',
  primary: true
};
