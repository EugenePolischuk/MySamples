import React from 'react';
import styled from 'styled-components';

interface WrapContainerProps {
  margin?: string;
}

const Container = styled.div<WrapContainerProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: ${props => props.margin || ''}
`;

const WrapContainer: React.FC<WrapContainerProps> = ({ margin, children }) => {
  return (
    <Container margin={margin}>
      {children}
    </Container>
  );
};

export default WrapContainer;
