import styled from 'styled-components';
import { CardTitle } from '../CardTitle/CardTitle';
import { ArrowUpOutlined } from '@ant-design/icons';
import { FC } from 'react';

const NumberOfSession = styled.p`
  padding: 0;
  margin: 5px 0;
  font-size: 35px;
  line-height: 42px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #262626;
`;

const Arrow = styled(ArrowUpOutlined)<{ direction: 'top' | 'bottom' }>`
  fill: currentColor;
  margin-right: 6px;
  transform: rotate(${props => (props.direction === 'top' ? 0 : 180)}deg);
`;

const Percentage = styled.p<{ direction: 'top' | 'bottom' }>`
  color: ${props => (props.direction === 'top' ? '#6bb554' : '#FE6C6C')};
  margin: 0;
  display: flex;
  margin-bottom: auto;
`;
const SecondaryText = styled.p`
  margin: 0;
  margin-left: 8px;
  opacity: 0.5;
  text-align: start;
`;

interface IStatisticCardProps {
  title: string;
  number: number;
  percentage?: number;
  icon?: 'top' | 'bottom';
  secondaryText?: string;
}

export const StatisticCard: FC<IStatisticCardProps> = props => {
  const { title, number, percentage, icon, secondaryText } = props;
  return (
    <div>
      <CardTitle title={title} margin={0} />
      <NumberOfSession>{number}</NumberOfSession>
      <TextContainer>
        {percentage && icon && (
          <Percentage direction={icon}>
            <Arrow direction={icon} />
            {percentage}%
          </Percentage>
        )}
        {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
      </TextContainer>
    </div>
  );
};
