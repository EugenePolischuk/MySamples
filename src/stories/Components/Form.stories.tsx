import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomForm from '../../Components/CustomForm';
import { Input } from 'antd';
import React from 'react';

export default {
  title: 'CustomForm',
  component: CustomForm
} as ComponentMeta<typeof CustomForm>;

const Template: ComponentStory<typeof CustomForm> = (args) => (
  <CustomForm {...args} />
);

export const CustomFormCard = Template.bind({});
// const [form] = Form.useForm();
CustomFormCard.storyName = 'Default';
CustomFormCard.args = {
  // form: form,
  layout: 'vertical',
  name: 'Storybook Form',
  items: [
    {
      name: 'first_name',
      label: 'Nom',
      rules: [{ required: true, message: 'Test wrong message!' }],
      input: <Input />
    },
    {
      name: 'second_name',
      label: 'Prenom',
      rules: [{ required: true, message: 'Test wrong message!' }],
      input: <Input />
    },
    {
      name: 'phone',
      label: 'Téléphone',
      rules: [{ required: true, message: 'Test wrong message!' }],
      input: <Input />
    },
    {
      name: 'needs',
      label: 'Votre besoin',
      rules: [{ required: true, message: 'Test wrong message!' }],
      input: <Input.TextArea rows={3} />
    }
  ]
};
