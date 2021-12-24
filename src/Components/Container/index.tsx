import React from 'react';
import styled from 'styled-components';

const CustomContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Container: React.FC = ({ children }) => {
  return <CustomContainer>{children}</CustomContainer>;
};

export default Container;
