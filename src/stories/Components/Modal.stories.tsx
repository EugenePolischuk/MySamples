import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '../../Components/Modal';
import Button from '../../Components/Button';

export default {
  title: 'Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
);


export const ModalCard = Template.bind({});
ModalCard.storyName = 'Default';
ModalCard.args = {
  width: '50%',
  visible: true,
  title: 'Its a modal',
  // onCancel: () => void;
  footer: [<Button key='1' type='primary'>Test Button</Button>],
  children: 'Test content for Button'
};
