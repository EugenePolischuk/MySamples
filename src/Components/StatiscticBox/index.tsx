import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

interface StatisticBoxProps {
  width?: string;
  icon?: JSX.Element;
  title?: string;
  count?: string;
  percentsColor?: string;
  percents?: string;
}

const StatisticBox = styled.div<StatisticBoxProps>`
  display: flex;
  align-items: center;
  padding: 17px 15px 35px 15px;
  width: ${props => props.width || '100%'};
  border: 1px solid #EAEAEA;
  border-radius: 5px;
`;

const IconContainer = styled.div`
  padding: 32px;
  border-radius: 5px;
  background-color: #F6F7F9;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const PerceptsContainer = styled.div`
  display: flex;
`;


const StatBox: React.FC<StatisticBoxProps> = (props) => {
  const { width, icon, title, count, percentsColor, percents } = props;
  return (
    <StatisticBox width={width}>
      <IconContainer>
        {icon}
      </IconContainer>
      <InfoContainer>
        <Text size='14px' weight='500' height='17px'>{title}</Text>
        <Text size='35px' weight='400' height='42px'>{count}</Text>
        <PerceptsContainer>
          <Text size='12px' weight='500' height='15px' color={percentsColor}>
            {percents}
          </Text>
          <Text margin='0 0 0 5px' size='12px' weight='500' height='15px' color='grey'>
            Depuis le mois dernier
          </Text>
        </PerceptsContainer>

      </InfoContainer>
    </StatisticBox>
  );
};

export default StatBox;
