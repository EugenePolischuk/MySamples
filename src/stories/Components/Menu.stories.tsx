import { ComponentMeta, ComponentStory } from '@storybook/react';
import Menu from '../../Components/Menu';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = () => (
  <BrowserRouter>
    <Menu />
  </BrowserRouter>
);

export const MenuCard = Template.bind({});
MenuCard.storyName = 'Default';
MenuCard.args = {};
