import { FC } from 'react';
import styled from 'styled-components';
import { AreaChart, Area, CartesianGrid, ResponsiveContainer } from 'recharts';
import Text from '../Text';

const Wrapper = styled.div`
  overflow: hidden;
  border: 1px solid #efefef;
  border-radius: 5px;
  /* width: 224px; */
  width: 30%;
  margin: 10px;
  height: 157px;
`;

const Content = styled.div`
  padding: 24px;
  padding-bottom: 0;
`;

type Data = {
  id: string;
  value: number;
};

interface ISmallAreaChart {
  data: Data[];
  title: string;
}

export const SmallAreaChart: FC<ISmallAreaChart> = ({ data, title }) => {
  return (
    <Wrapper>
      <Content>
        <Text weight={500} size='12px' height='14px'>
          {title}
        </Text>
        <Text size='30px' height='36px'>
          {Math.max(...data.map(el => el.value))}
        </Text>
      </Content>
      <div style={{ width: '115%', height: '55%', margin: '0 -15px' }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#5398DF' stopOpacity={0.3} />
                <stop offset='100%' stopColor='#5398DF' stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray='1 7'
              horizontal={false}
              strokeLinejoin='round'
              strokeLinecap='round'
            />
            <Area
              type='monotone'
              dataKey='value'
              stroke='#5398DF'
              fillOpacity={1}
              fill='url(#colorValue)'
              strokeWidth={2.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Wrapper>
  );
};
