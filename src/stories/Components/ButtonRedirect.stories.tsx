import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonRedirect from '../../Components/ButtonRedirect';

export default {
  title: 'ButtonRedirect',
  component: ButtonRedirect
} as ComponentMeta<typeof ButtonRedirect>;

const Template: ComponentStory<typeof ButtonRedirect> = () => (
  <ButtonRedirect />
);

export const ButtonRedirectCard = Template.bind({});
ButtonRedirectCard.storyName = 'Default';
ButtonRedirectCard.args = {};
