import { FC } from 'react';
import styled from 'styled-components';

interface ICardProps {
  marginBottom?: string | number;
}

const CardWrapper = styled.div<ICardProps>`
  width: max-content;
  padding: 23px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(236, 233, 231, 0.5);
  border-radius: 5px;
  margin-bottom: ${props => props.marginBottom};
`;

export const Card: FC<ICardProps> = props => {
  const { children, marginBottom } = props;
  return <CardWrapper marginBottom={marginBottom}>{children}</CardWrapper>;
};
