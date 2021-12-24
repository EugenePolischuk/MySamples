import React from 'react';
import styled from 'styled-components';
import { Form } from 'antd';

type Rules = {
  required: boolean;
  message: string;
}

export type ItemProps = {
  name?: string;
  label?: string;
  rules?: Array<Rules>;
  style?: React.CSSProperties;
}

const CustomItem = styled(Form.Item)`
  label::before {
    content: none !important;
  }
`;

const CustomFormItem: React.FC<ItemProps> = (props) => {
  const { name, label, rules, style, children } = props;
  return (
    <CustomItem name={name} rules={rules} label={label} style={style}>
      {children}
    </CustomItem>
  );
};

export default CustomFormItem;
