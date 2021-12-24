import { FC } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface ICrookedChartProps {
  data: { name: string; value: number }[];
}

export const CrookedChart: FC<ICrookedChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width='100%'>
      <AreaChart data={data} style={{ padding: 0, marginLeft: -30 }}>
        <defs>
          <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#5398DF' stopOpacity={0.3} />
            <stop offset='100%' stopColor='#5398DF' stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray='2 7' horizontal={false} />
        <XAxis
          dataKey='name'
          tickLine={false}
          axisLine={false}
          fontSize={10}
          opacity={0.5}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          domain={[1000, 6000]}
          ticks={[1000, 2000, 3000, 4000, 5000, 6000]}
          fontSize={10}
          opacity={0.5}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 5,
            padding: '4px 7px'
          }}
          cursor={false}
          itemSorter={() => 1}
          itemStyle={{ color: '#262626' }}
          formatter={(value: string) => [value]}
          labelFormatter={() => ''}
        />
        <Area
          type='monotone'
          dataKey='value'
          stroke='#5398DF'
          fillOpacity={1}
          fill='url(#colorValue)'
          activeDot={{ stroke: '#FFFFFF', strokeWidth: 8, r: 10 }}
          strokeWidth={2.5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
