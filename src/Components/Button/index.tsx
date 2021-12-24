import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

type ButtonProps = {
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: CSSProperties
}

const CustomButton = styled(Button)`
  border-radius: 5px;
  background-color: ${props => {
    switch (props.type) {
      case 'primary':
        return '#5398DF';
      case 'ghost':
        return '#F8F6F5';
      default :
        return 'white';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'primary':
        return 'white';
      case 'link':
        return '#5398DF';
      default :
        return 'black';
    }
  }};
  border: ${props => {
    switch (props.type) {
      case 'primary':
        return '1px solid #5398DF';
      case undefined:
        return '1px solid #5398DF';
      default :
        return 'none';
    }
  }};
`;

const ButtonCustom: React.FC<ButtonProps> = (props) => {
  const { type, onClick, htmlType, style, children } = props;
  return (
    <CustomButton type={type} onClick={onClick} htmlType={htmlType} style={style}>
      {children}
    </CustomButton>
  );
};

export default ButtonCustom;
