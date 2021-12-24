import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: white;
  border-radius: 2px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px
`;

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {children}
    </HeaderContainer>
  );
};

export default Header;
