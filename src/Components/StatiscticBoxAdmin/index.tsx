import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

interface StatisticBoxProps {
  ques?: string;
  line?: string;
  border?: string;
  info?: string;
  height?: string;
  width?: string;
  title?: string;
  count?: string;
  percentsColor?: string;
  percents?: string;
}

const StatisticBox = styled.div<StatisticBoxProps>`
  height: ${props => props.height || '100%'};
  display: flex;
  align-items: center;
  padding: 17px 15px 35px 15px;
  width: ${props => props.width || '31%'};
  border-radius: 5px;
  &:before {
    content: '';
    height: 80px;
    width: 2px;
    opacity: 0.1;
    background: ${props => (props.line === 'true' ? 'black' : 'none')};
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const PerceptsContainer = styled.div`
  display: flex;
`;

const StatBoxAdmin: React.FC<StatisticBoxProps> = props => {
  const {
    width,
    height,
    title,
    count,
    percentsColor,
    percents,
    info,
    line,
    ques
  } = props;
  return (
    <StatisticBox width={width} height={height} line={line}>
      <InfoContainer>
        <Text size='14px' weight='500' height='17px'>
          {title}{' '}
          {ques ? (
            <>
              {` `} <QuestionCircleOutlined />
            </>
          ) : null}
        </Text>
        <Text size='35px' weight='400' height='42px'>
          {count}
        </Text>
        <PerceptsContainer>
          <Text size='12px' weight='500' height='15px' color={percentsColor}>
            {percents}
          </Text>
          {percents ? (
            <Text
              margin='0 0 0 5px'
              size='12px'
              weight='500'
              height='15px'
              color='grey'>
              Depuis le mois dernier
            </Text>
          ) : null}
          {info ? (
            <Text
              margin='0 0 0 5px'
              size='12px'
              weight='500'
              height='15px'
              color='grey'>
              {info}
            </Text>
          ) : null}
        </PerceptsContainer>
      </InfoContainer>
    </StatisticBox>
  );
};

export default StatBoxAdmin;
