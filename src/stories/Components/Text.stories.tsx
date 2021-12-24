import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from '../../Components/Text';

export default {
  title: 'Text',
  component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const TextCard = Template.bind({});
TextCard.storyName = 'Default';
TextCard.args = {
  size: '20px',
  height: '20px',
  weight: 700,
  color: 'black',
  margin: '0 0 0 0',
  width: '20%',
  children: 'Hello from Storybook'
};
