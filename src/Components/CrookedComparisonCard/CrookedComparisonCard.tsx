import styled from 'styled-components';

import Box from '../Box';
import { CustomSwitch } from '../CustomSwitch/CustomSwitch';
import { StatisticCard } from '../StatisticCard/StatisticCard';
import { FC, useState } from 'react';
import { InfoCircleFilled } from '@ant-design/icons';
import { LineChart } from './LineChart';
import { ComparisonBarChart } from './ComparisonBarChart';

interface ICrookedComparisonCardProps {
  width?: string;
  height?: string;
  border?: string;
  margin?: string;
  isShowedDescr?: boolean;
}

const StatisticCardContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 16px;
`;
const StatisticCardWrapper = styled.div`
  /* padding: 10px 24px; */
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & + &:not(:last-child) {
    border-left: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
  }
`;

const LegendsContainer = styled.div<{ isShowedDescr: boolean | undefined }>`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: ${porps => (porps.isShowedDescr ? 19 : 0)}px;
`;
const Legend = styled.span<{ secondaryText?: boolean }>`
  margin: 0 18px;
  &::before {
    display: inline-block;
    border-radius: 50%;
    background-color: #90c6fd;
    opacity: ${porps => (porps.secondaryText ? 0.5 : 1)};
    content: '';
    margin-right: 6px;
    width: 9px;
    height: 9px;
  }
`;

const Descriptions = styled.div`
  padding-top: 22px;
  border-top: 1px solid #eaeaea;
`;
const DescriptionsTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;
const DescriptionsText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
`;

const InfoIcon = styled(InfoCircleFilled)`
  color: #6b7885;
  font-size: 17px;
  margin-right: 7px;
`;
const ChartWrapper = styled.div`
  /* display: none; */
  margin-top: 26px;
`;

export const CrookedComparisonCard: FC<ICrookedComparisonCardProps> = props => {
  const { width, height, border, margin, isShowedDescr } = props;
  const [isActiveSwitch, setIsActiveSwitch] = useState(true);
  return (
    <Box
      primary={true}
      margin={margin ?? '0 30px 30px 0'}
      height={height}
      width={width}
      border={border}>
      <StatisticCardContainer>
        <StatisticCardWrapper>
          <StatisticCard title='Total' number={703} />
        </StatisticCardWrapper>
        <StatisticCardWrapper>
          <StatisticCard title='Terminés' number={205} />
        </StatisticCardWrapper>
        <StatisticCardWrapper>
          <StatisticCard title='En cours' number={20} />
        </StatisticCardWrapper>
      </StatisticCardContainer>
      <CustomSwitch onChange={setIsActiveSwitch} />
      <ChartWrapper>
        {isActiveSwitch ? <LineChart /> : <ComparisonBarChart />}
      </ChartWrapper>

      <LegendsContainer isShowedDescr={isShowedDescr}>
        <Legend secondaryText={true}>Terminé</Legend>
        <Legend>Total</Legend>
      </LegendsContainer>
      {isShowedDescr && (
        <Descriptions>
          <DescriptionsTitle>
            <InfoIcon />
            <b>205 projets terminés dont :</b>
          </DescriptionsTitle>
          <DescriptionsText>
            198 Accompagnés (réalisés avec le prestataire)
          </DescriptionsText>
          <DescriptionsText>
            7 Conseillés (prise d’information)
          </DescriptionsText>
        </Descriptions>
      )}
    </Box>
  );
};
