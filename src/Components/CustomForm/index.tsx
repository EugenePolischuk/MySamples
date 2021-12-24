import React from 'react';
import { Form } from 'antd';
import CustomFormItem from '../CustomFormItem';
import { FormInstance } from 'antd/lib/form/hooks/useForm';

type FormProps = {
  form: FormInstance;
  layout: 'vertical' | 'horizontal';
  name: string;
  items: ItemProps[]
}

type Rules = {
  required: boolean;
  message: string;
}

type ItemProps = {
  name: string;
  label?: string;
  rules?: Array<Rules>;
  input: JSX.Element;
}

const CustomForm: React.FC<FormProps> = ({ form, layout, name, items }) => {
  return (
    <Form
      form={form}
      layout={layout}
      name={name}
    >
      {items.map((item, index) =>
        (
          <CustomFormItem
            key={index}
            name={item.name}
            label={item.label}
            rules={item.rules}
          >
            {item.input}
          </CustomFormItem>
        ))}
    </Form>
  );
};

export default CustomForm;
