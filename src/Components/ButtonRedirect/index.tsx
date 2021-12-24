import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

const ButtonRedirectContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin: -25px -25px 0 0;
  border-radius: 0 5px 0 0;
  height: 36px;
  width: 36px;
  background-color: #EDF6FF;
  transition: 0.3s;

  &:hover {
    background-color: #5398DF
  }
`;

const ArrowIcon = styled(Arrow)`
  fill: #246EB9;
  transition: 0.3s;

  ${ButtonRedirectContainer}:hover & {
    fill: white
  }
`;

const ButtonRedirect = () => {
  return (
    <ButtonRedirectContainer>
      <ArrowIcon />
    </ButtonRedirectContainer>
  );
};

export default ButtonRedirect;
