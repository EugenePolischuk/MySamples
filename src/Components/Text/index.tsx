import React from 'react';
import styled from 'styled-components';

type TextProps = {
  size?: string;
  height?: string;
  weight?: string | number;
  color?: string;
  margin?: string;
  width?: string;
  align?: string;
};

const TextContainer = styled.div<TextProps>`
  width: ${props => props.width};
  font-size: ${props => props.size};
  line-height: ${props => props.height};
  font-weight: ${props => props.weight};
  color: ${props => props.color || '#262626'};
  margin: ${props => props.margin};
  text-align: ${props => props.align};
`;

const Text: React.FC<TextProps> = props => {
  const { children } = props;
  return (
    <TextContainer {...props}>
      {children}
    </TextContainer>
  );
};

export default Text;
