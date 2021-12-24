import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  CloudFilled,
  CodeFilled,
  HomeFilled,
  MedicineBoxFilled
} from '@ant-design/icons';

import { ReactComponent as FamilyIcon } from './../PieChartCard/family.svg';
import Text from '../Text';

const Content = styled.div`
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
`;
const FooterContent = styled.div`
  width: 100%;
`;

const StatisticList = styled.div<{ markerColor?: string }>`
  padding: 0;
  margin-top: 22px;
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  color: #262626;
  display: flex;
  flex-wrap: wrap;
`;

const StatisticItem = styled.p`
  padding: 10px 0;
  margin: 0;
  width: 245px;
  cursor: pointer;
`;

const StatisticInterests = styled.span`
  margin-left: 10px;
  color: gray;
`;

const Line = styled.div`
  margin-bottom: 10px;
  display: flex;
  height: 26px;
  width: 100%;
`;
const ContainerText = styled.div`
  margin-left: 20px;
  width: 70px;
`;

const LineElement = styled.div<ILineElementProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  flex-basis: ${props => props.percentage}%;
  margin-top: auto;
  background-color: ${props => props.color};

  height: 35px;

  &:first-child {
    border-radius: 5px 0px 0px 5px;
  }
  &:nth-last-child(-n + 2) {
    border-radius: 0px 5px 5px 0px;
  }
`;

interface ILineElementProps {
  onFocused?: boolean;
  percentage: number;
  color: string;
}

interface IListData {
  id: string;
  text: string;
  // Icon type Ant or SVG
  Icon: typeof CloudFilled | typeof FamilyIcon;
  interests: number;
  color: string;
  isActive: boolean;
}

export const ChartAnalysisOfRequests: FC = () => {
  const [listData, setListData] = useState<IListData[]>([
    {
      id: 'id-1',
      text: 'Santé',
      Icon: MedicineBoxFilled,
      interests: 30,
      color: '#5398DF',
      isActive: true
    },
    {
      id: 'id-2',
      text: 'Famille',
      Icon: FamilyIcon,
      interests: 5,
      color: '#FFD572',
      isActive: false
    },
    {
      id: 'id-3',
      text: 'Logement',
      Icon: HomeFilled,
      interests: 28,
      color: '#FE6C6C',
      isActive: false
    },
    {
      id: 'id-4',
      text: 'Aléas de la vie',
      Icon: CodeFilled,
      interests: 29,
      color: '#B09FFF',
      isActive: false
    },
    {
      id: 'id-5',
      text: 'Ecologie',
      Icon: CloudFilled,
      interests: 32,
      color: '#78D85B',
      isActive: false
    }
  ]);
  const handleListOnMouseEnter = (el: IListData) => {
    setListData(prevState =>
      prevState.map(listEl =>
        listEl.id === el.id ? { ...el, isActive: true } : listEl
      )
    );
  };
  const handleListOnMouseOut = (el: IListData) => {
    setListData(prevState =>
      prevState.map(listEl =>
        listEl.id === el.id ? { ...el, isActive: false } : listEl
      )
    );
  };
  const total: number = listData.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.interests;
  }, 0);

  return (
    <Content>
      <FooterContent>
        <Text size='18px' weight='500' height='21px' margin='0 0 32px 0'>
          Analyse des solicitations des formations
        </Text>

        {listData && (
          <>
            <Line>
              {listData.map(el => {
                const percentage = (el.interests * 100) / total;
                return (
                  <LineElement
                    key={el.id}
                    color={el.color}
                    percentage={percentage}
                    onFocused={el.isActive}>
                    {Math.round(percentage)}%
                  </LineElement>
                );
              })}
              <ContainerText>
                <Text size='12px' weight='400' color='#6B7885'>
                  Total {total} interessés
                </Text>
              </ContainerText>
            </Line>
            <StatisticList>
              {listData.map(el => (
                <StatisticItem
                  key={el.id}
                  onMouseEnter={() => handleListOnMouseEnter(el)}
                  onMouseOut={() => handleListOnMouseOut(el)}>
                  <el.Icon style={{ color: el.color, marginRight: 8 }} />
                  {el.text}
                  <StatisticInterests>
                    • {el.interests} interessés
                  </StatisticInterests>
                </StatisticItem>
              ))}
            </StatisticList>
          </>
        )}
      </FooterContent>
    </Content>
  );
};
