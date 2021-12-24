import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../../Components/Header';

export default {
  title: 'Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const HeaderCard = Template.bind({});
HeaderCard.storyName = 'Default';
HeaderCard.args = {
  title: 'Its a Header'
};
