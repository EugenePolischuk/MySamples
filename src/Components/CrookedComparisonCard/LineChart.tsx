import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const chartData = [
  { name: '', secondValue: 320, firstValue: 100 },
  { name: 'Jan', secondValue: 340, firstValue: 220 },
  { name: 'Feb', secondValue: 350, firstValue: 230 },
  { name: 'Mar', secondValue: 300, firstValue: 180 },
  { name: 'Apr', secondValue: 420, firstValue: 300 },
  { name: 'May', secondValue: 400, firstValue: 350 },
  { name: 'Jun', secondValue: 480, firstValue: 370 },
  { name: 'Jul', secondValue: 420, firstValue: 300 },
  { name: '', secondValue: 550, firstValue: 600 }
];
export const LineChart = () => {
  return (
    <ResponsiveContainer width='100%' height={160}>
      <AreaChart data={chartData} style={{ padding: 0, marginLeft: -30 }}>
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
          domain={[100, 600]}
          ticks={[100, 200, 300, 400, 500, 600]}
          fontSize={10}
          opacity={0.5}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 5,
            padding: '4px 7px'
          }}
          cursor={false}
          itemStyle={{ color: '#262626' }}
          formatter={(value: string) => {
            return [value];
          }}
          labelFormatter={() => ''}
        />
        <Area
          type='monotone'
          dataKey='firstValue'
          stroke='#5398DF'
          fillOpacity={0}
          activeDot={{ stroke: '#FFFFFF', strokeWidth: 8, r: 10 }}
          strokeWidth={2.5}
        />
        <Area
          type='monotone'
          dataKey='secondValue'
          stroke='#D6EAFF'
          fillOpacity={0}
          activeDot={{ stroke: '#FFFFFF', strokeWidth: 8, r: 10 }}
          strokeWidth={2.5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
