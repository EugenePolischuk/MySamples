import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../../Components/Button';

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const ButtonCard = Template.bind({});
ButtonCard.storyName = 'Default';
ButtonCard.args = {
  type: 'primary',
  children: 'Test Button'
};
