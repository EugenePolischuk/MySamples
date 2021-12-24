import styled from 'styled-components';
import {
  CloudFilled,
  CodeFilled,
  HomeFilled,
  MedicineBoxFilled
} from '@ant-design/icons';

import { ReactComponent as FamilyIcon } from './family.svg';
import Box from '../Box';
import Text from '../Text';
import { PieChart } from '../PieChart/PieChart';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #262626;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  padding: 0;
  margin: 0;
  margin-top: 25px;

  list-style: none;
`;

const Item = styled.li<{ column: 0 | 2 | 3 }>`
  display: flex;
  padding: 0 2px;
  margin: 0;
  width: ${props => {
    if (props.column === 3) return '33%';
    if (props.column === 2) return '48%';
    if (props.column === 0) return '100%';
  }};
  align-items: center;

  font-size: 12px;
  line-height: 25px;
  cursor: default;

  &:last-child {
    margin-right: auto;
  }
`;

type dataMenuObj = {
  id: string;
  name: string;
  value: number;
  color: string;
  Icon: typeof MedicineBoxFilled | typeof FamilyIcon;
}[];

const dataMenu: dataMenuObj = [
  {
    id: 'id-1',
    name: 'Santé',
    value: 20,
    color: '#90C6FD',
    Icon: MedicineBoxFilled
  },
  {
    id: 'id-2',
    name: 'Logement',
    value: 5,
    color: '#FE6C6C',
    Icon: HomeFilled
  },
  {
    id: 'id-3',
    name: 'Ecologie',
    value: 20,
    color: '#94E37B',
    Icon: CloudFilled
  },
  {
    id: 'id-4',
    name: 'Famille',
    value: 40,
    color: '#FFD572',
    Icon: FamilyIcon
  },
  {
    id: 'id-5',
    name: 'Aléas de la vie',
    value: 20,
    color: '#8D79F6',
    Icon: CodeFilled
  }
];
export const PieChartCard = ({
  title,
  width,
  height,
  column = 3,
  border = 'none',
  margin,
  pieChartSize = 280,
  data
}: {
  title: string;
  width?: number | string;
  height?: number | string;
  column?: 0 | 2 | 3;
  border?: string;
  margin?: string;
  pieChartSize?: number;
  data?: dataMenuObj;
}) => {
  const dataArr = data || dataMenu;

  return (
    <Box
      alignItems='center'
      jsContent='center'
      isWrap
      primary
      height={typeof height === 'number' ? `${height}px` : height}
      width={typeof width === 'number' ? `${width}px` : width}
      margin={margin ?? '0'}
      border={border}>
      <Text size='18px' weight='500' height='21px' margin='0 0 32px 0'>
        {title}
      </Text>
      <Content>
        <PieChart data={dataArr} size={pieChartSize} />
        <List>
          {dataArr.map(({ id, color, name, Icon }) => (
            <Item key={id} column={column}>
              <Icon style={{ color: color, marginRight: 8 }} />
              {name}
            </Item>
          ))}
        </List>
      </Content>
    </Box>
  );
};
