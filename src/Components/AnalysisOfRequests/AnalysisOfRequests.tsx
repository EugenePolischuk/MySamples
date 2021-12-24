import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  CloudFilled,
  CodeFilled,
  HomeFilled,
  MedicineBoxFilled
} from '@ant-design/icons';

import { ReactComponent as FamilyIcon } from '../PieChartCard/family.svg';
import Box from '../Box';
import { CustomRadioButton } from '../CustomRadioButton/CustomRadioButton';
import Text from '../Text';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Tag } from 'antd';
import { PieChart } from '../PieChart/PieChart';
import { StatisticCard } from '../StatisticCard/StatisticCard';

const Content = styled.div`
  padding-top: 20px;
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

const PieChartWrapper = styled.div`
  margin-right: 50px;
`;

const FooterContent = styled.div`
  display: flex;
  margin-top: 30px;
`;

const StatisticList = styled.ul<{ markerColor?: string }>`
  padding: 0;
  margin: 0;
  font-size: 14px;
  margin-left: 20px;
  line-height: 17px;
  width: calc(100% - 20px);
  color: #262626;
  display: flex;
  flex-direction: column;

  & li::marker {
    color: ${props => props.markerColor ?? '#c4c4c4'};
    font-size: 22px;
  }
`;

const StatisticItem = styled.li`
  padding: 10px 0;
  margin: 0;

  opacity: 0.5;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
  }

  &:hover {
    opacity: 1;
  }
`;

const StatisticPercentage = styled.span`
  float: right;
  margin-left: 10px;
`;

const Line = styled.div<{ backgroundColor?: string }>`
  margin-top: 26px;
  margin-bottom: 10px;
  display: flex;
  height: 26px;
  width: 100%;
  & div {
    background-color: ${props => props.backgroundColor ?? '#c4c4c4'};
  }
`;

const LineElement = styled.div<ILineElementProps>`
  flex-basis: ${props => props.percentage}%;
  margin-top: auto;
  opacity: ${props => props.opacity};

  height: ${props => (props.onFocused ? 26 : 22)}px;

  &:first-child {
    border-radius: 5px 0px 0px 5px;
  }
  &:last-child {
    border-radius: 0px 5px 5px 0px;
  }
  &:not(.o) {
    ${props => (props.onFocused ? 'border-radius: 5px 5px 0px 0px;' : '')}
  }
`;

interface ILineElementProps {
  onFocused?: boolean;
  opacity: number;
  percentage: number;
}

interface IListData {
  id: string;
  text: string;
  percentage: number;
  isActive: boolean;
}

export const AnalysisOfRequests: FC = () => {
  const [data, setData] = useState([
    {
      id: 'id-1',
      name: 'Santé',
      value: 36,
      color: '#90C6FD',
      icon: MedicineBoxFilled,
      isActive: true
    },
    {
      id: 'id-2',
      name: 'Logement',
      value: 5,
      color: '#FE6C6C',
      icon: HomeFilled,

      isActive: false
    },
    {
      id: 'id-3',
      name: 'Ecologie',
      value: 20,
      color: '#94E37B',
      icon: CloudFilled,

      isActive: false
    },
    {
      id: 'id-4',
      name: 'Famille',
      value: 40,
      color: '#FFD572',
      icon: FamilyIcon,

      isActive: false
    },
    {
      id: 'id-5',
      name: 'Aléas de la vie',
      value: 20,
      color: '#8D79F6',
      icon: CodeFilled,

      isActive: false
    }
  ]);

  const [listData, setListData] = useState<IListData[]>([
    {
      id: 'id-1',
      text: 'Avoir des difficultés à utiliser le produit',
      percentage: 29,
      isActive: true
    },
    {
      id: 'id-2',
      text: 'Des fonctionnalités manquantes dont jai besoin',
      percentage: 22,
      isActive: false
    },
    {
      id: 'id-3',
      text: 'Non satisfait de la qualité du produit',
      percentage: 17,
      isActive: false
    },
    {
      id: 'id-4',
      text: 'Le produit ne ressemble pas à ce qui est annoncé',
      percentage: 13,
      isActive: false
    },
    { id: 'id-5', text: 'Autre', percentage: 3, isActive: false }
  ]);

  const handleOnChangeRadioButton = (id: string) => {
    setData(prevState =>
      prevState.map(el => {
        if (el.isActive && el.id !== id) {
          return { ...el, isActive: false };
        }
        if (!el.isActive && el.id === id) {
          return { ...el, isActive: true };
        }
        return el;
      })
    );
  };

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

  return (
    <Box
      primary={true}
      margin='0 0 30px auto'
      height='max-content'
      border='1px solid #EAEAEA'
      width='62%'>
      <Text size='18px' weight='500'>
        Analyse des préoccupations
      </Text>
      <Content>
        <CustomRadioButton
          marginRight={10}
          values={data}
          activeButtonId={data.find(el => el.isActive)?.id}
          onChange={handleOnChangeRadioButton}
        />
        <Text size='14px' weight='500' height='17px' margin='25px 0 15px 0'>
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
          <PieChartWrapper>
            <Text size='14px' weight='500' height='17px' margin='0 0 30px 0'>
              Classement général
            </Text>
            <PieChart
              size={205}
              data={data}
              tooltipName='tickets'
              animation={false}
            />
          </PieChartWrapper>
          <div style={{ width: '100%' }}>
            <StatisticCard
              title='Nombre de sollicitations Famille'
              number={449}
              percentage={2}
              icon='bottom'
              secondaryText='Depuis dernier mois'
            />
            {listData && (
              <>
                <Line backgroundColor={data.find(el => el.isActive)?.color}>
                  {listData.map((el, idx) => (
                    <LineElement
                      key={el.id}
                      percentage={el.percentage}
                      opacity={1 - 0.2 * idx}
                      onFocused={el.isActive}
                    />
                  ))}
                </Line>
                <StatisticList
                  markerColor={data.find(el => el.isActive)?.color}>
                  {listData.map(el => (
                    <StatisticItem
                      key={el.id}
                      onMouseEnter={() => handleListOnMouseEnter(el)}
                      onMouseOut={() => handleListOnMouseOut(el)}>
                      {el.text}
                      <StatisticPercentage>
                        {el.percentage}%
                      </StatisticPercentage>
                    </StatisticItem>
                  ))}
                </StatisticList>
              </>
            )}
          </div>
        </FooterContent>
      </Content>
    </Box>
  );
};
