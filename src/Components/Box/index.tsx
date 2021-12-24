import React from 'react';
import styled from 'styled-components';

type BoxProps = {
  width?: string;
  height?: string;
  primary?: boolean;
  isWrap?: boolean;
  margin?: string;
  flexDirection?: string;
  padding?: string;
  bgColor?: string;
  jsContent?: string;
  border?: string;
  borderRadius?: string;
  alignItems?: string;
  flexWrap?: string;
};

const BoxContainer = styled.div<BoxProps>`
  display: flex;
  flex-wrap:  ${props => props.flexWrap || 'nowrap'};
  justify-content: ${props => props.jsContent || 'initial'};
  flex-direction: ${props => props.flexDirection || 'column'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height};
  padding: ${props => props.padding || '25px'};
  margin: ${props => props.margin};
  background-color: ${props => (props.primary ? 'white' : props.bgColor ? props.bgColor : 'none')};
  box-sizing: border-box;
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius || '5px'};
  align-items: ${props => props.alignItems};

  &:not(:first-child) {
    margin-top: ${props => (props.isWrap ? '' : '30px')};
  }
`;

const Box: React.FC<BoxProps> = props => {
  const {
    children,
    height,
    width,
    primary,
    isWrap,
    margin,
    flexDirection,
    border = 'none',
    padding,
    bgColor,
    jsContent,
    borderRadius,
    alignItems,
    flexWrap
  } = props;
  return (
    <BoxContainer
      primary={primary}
      height={height}
      width={width}
      isWrap={isWrap}
      margin={margin}
      flexDirection={flexDirection}
      border={border}
      padding={padding}
      bgColor={bgColor}
      jsContent={jsContent}
      borderRadius={borderRadius}
      alignItems={alignItems}
      flexWrap={flexWrap}
    >
      {children}
    </BoxContainer>
  );
};

export default Box;
