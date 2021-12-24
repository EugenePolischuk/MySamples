import { FC } from 'react';
import styled from 'styled-components';

interface ICardTitleProps {
  title?: string;
  margin?: string | number;
}
const Title = styled.h3<ICardTitleProps>`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: start;
  color: #262626;
  margin: ${props => props.margin};
`;

export const CardTitle: FC<ICardTitleProps> = ({ title, margin }) => (
  <Title margin={margin}>{title}</Title>
);
