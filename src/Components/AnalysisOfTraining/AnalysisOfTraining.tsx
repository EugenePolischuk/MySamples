import { FC, useState } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Tag } from 'antd';
import { StatisticCard } from '../StatisticCard/StatisticCard';
import { CustomBarChart, INewArray } from './CustomBarChart';
import { nanoid } from 'nanoid';

const Content = styled.div`
  margin-top: 25px;
`;
const TagList = styled.div`
  display: flex;
  margin-top: 10px;
`;
const ButtonAsLink = styled.button`
  border: none;
  color: #6b7885;
  background-color: transparent;
  cursor: pointer;
  font-size: 12px;
  line-height: 14px;
`;

const FooterContent = styled.div`
  margin-top: 25px;

  .rect-with-shadow {
    filter: drop-shadow(0px 1.46303px 7.31518px rgba(0, 0, 0, 0.05));
  }

  svg .recharts-layer.recharts-bar-rectangle {
    cursor: pointer;
  }
`;

const StatisticList = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: 20px;
  font-size: 14px;

  line-height: 17px;
  width: calc(100% - 20px);
  color: #262626;
  display: flex;
  flex-direction: column;
`;
const StatisticItem = styled.li<{ isActive: boolean; color: string }>`
  cursor: pointer;
  padding: 10px 0;
  margin: 0;

  justify-content: space-between;

  &::marker {
    color: ${props => props.color};
    font-size: 22px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
  }
  color: ${props => (props.isActive ? '#262626' : '#c1c1c1')};
`;
const StatisticPercentage = styled.span`
  float: right;
`;

const StatisticCardContainer = styled.div`
  display: flex;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  height: max-content;
`;

const StatisticCardWrapper = styled.div`
  padding: 0 25px;
  margin: 24px 0;
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & + &:not(:last-child) {
    border-left: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
  }
`;

const RightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 29px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface IActiveList {
  id: string;
  percentage: number;
  text: string;
  isActive: boolean;
  color: string;
}

export const AnalysisOfTraining: FC = () => {
  const [activeList, setActiveList] = useState<IActiveList[]>([]);
  const [activeItem, setActiveItem] = useState({ number: 0, color: '' });

  const mockResponseForBarChart = {
    response: {
      sante: [
        { label: 'lorem', value: 5 },
        { label: 'lorem', value: 4 },
        { label: 'lorem', value: 3 },
        { label: 'lorem', value: 2 },
        { label: 'lorem', value: 1 }
      ],
      famille: [
        { label: 'lorem', value: 10 },
        { label: 'lorem', value: 9 },
        { label: 'lorem', value: 8 },
        { label: 'lorem', value: 7 },
        { label: 'lorem', value: 4 }
      ],
      logement: [
        { label: 'lorem', value: 10 },
        { label: 'lorem', value: 9 },
        { label: 'lorem', value: 8 },
        { label: 'lorem', value: 7 },
        { label: 'lorem', value: 3 }
      ],
      aleasDeLaVie: [
        { label: 'lorem', value: 20 },
        { label: 'lorem', value: 15 },
        { label: 'lorem', value: 10 },
        { label: 'lorem', value: 7 },
        { label: 'lorem', value: 6 }
      ],
      ecologie: [
        { label: 'lorem', value: 10 },
        { label: 'lorem', value: 9 },
        { label: 'lorem', value: 8 },
        { label: 'lorem', value: 7 },
        { label: 'lorem', value: 1 }
      ]
    }
  };

  const handleOnListMouseMove = (color: string, idx: number) => {
    if (activeItem.number !== idx + 1 && activeItem.color !== color) {
      setActiveItem({ number: idx + 1, color });
      setActiveList(prevState =>
        prevState.map(el => {
          if (el.color === color) {
            return { ...el, isActive: true };
          }
          if (el.isActive && el.color !== color) {
            return { ...el, isActive: false };
          }
          return el;
        })
      );
    }
  };

  const handleOnChangeActiveListItem = (list: INewArray, key: string) => {
    const newArray = [];
    let count = 0;
    for (const k in list) {
      if (
        k.includes('value') &&
        Object.prototype.hasOwnProperty.call(list, k)
      ) {
        const element = list[k];
        newArray.push({
          id: nanoid(6),
          percentage: +element,
          text: 'Lorem ipsum dolor sit.',
          isActive: k === key,
          color: list.color[count]
        });
        count = count + 1;
      }
    }
    setActiveList(newArray);
  };

  return (
    <CardContainer>
      <Content>
        <Text size='14px' weight='500' height='17px' margin='0 0 15px 0'>
          Trier par :
        </Text>
        <CustomSelect
          backdroundColor='#f5f5f5'
          marginRight={10}
          options={[
            { id: 'id-1', value: 'Genre' },
            { id: 'id-2', value: 'Lorem' }
          ]}
        />
        <CustomSelect
          backdroundColor='#f5f5f5'
          marginRight={10}
          options={[
            { id: 'id-1', value: 'Âge' },
            { id: 'id-2', value: 'Lorem' }
          ]}
        />
        <CustomSelect
          backdroundColor='#f5f5f5'
          options={[
            { id: 'id-1', value: 'Statut' },
            { id: 'id-2', value: 'Lorem' }
          ]}
        />
        <TagList>
          <Tag closable onClose={console.log}>
            Tag
          </Tag>
          <Tag closable onClose={console.log}>
            Tag
          </Tag>
          <Tag closable onClose={console.log}>
            Tag
          </Tag>
          <ButtonAsLink>Supprimer tout</ButtonAsLink>
        </TagList>
        <FooterContent>
          <CustomBarChart
            activeEl={activeItem}
            values={[
              mockResponseForBarChart.response.sante,
              mockResponseForBarChart.response.famille,
              mockResponseForBarChart.response.logement,
              mockResponseForBarChart.response.aleasDeLaVie,
              mockResponseForBarChart.response.ecologie
            ]}
            onChange={handleOnChangeActiveListItem}
          />
        </FooterContent>
      </Content>

      <RightSideContent>
        <StatisticCardContainer>
          <StatisticCardWrapper>
            <StatisticCard
              title='Total'
              number={703}
              percentage={2}
              icon='top'
              secondaryText='Depuis dernier mois'
            />
          </StatisticCardWrapper>
          <StatisticCardWrapper>
            <StatisticCard title='Formées' number={205} />
          </StatisticCardWrapper>
          <StatisticCardWrapper>
            <StatisticCard
              title='Taux d’engagement'
              number={20}
              icon='top'
              secondaryText='Depuis le mois dernier'
              percentage={2}
            />
          </StatisticCardWrapper>
        </StatisticCardContainer>
        <div>
          <Text size='14px' weight='500' height='17px' margin='56px 0 6px 0'>
            Précisions
          </Text>
          <Text size='12px' weight='400' height='14px' margin='0 0 27px 0'>
            Choisissez le bar afin d’obtenir plus de détails sur une des
            catégories
          </Text>
          <StatisticList>
            {activeList &&
              activeList.map(
                ({ id, percentage, text, isActive, color }, idx) => (
                  <StatisticItem
                    key={id}
                    isActive={isActive}
                    color={color}
                    onMouseMove={() => handleOnListMouseMove(color, idx)}>
                    {text}
                    <StatisticPercentage>{percentage}%</StatisticPercentage>
                  </StatisticItem>
                )
              )}
          </StatisticList>
        </div>
      </RightSideContent>
    </CardContainer>
  );
};
