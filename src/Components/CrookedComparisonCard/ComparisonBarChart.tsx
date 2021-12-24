import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
// import styled from 'styled-components';

const data = [
  {
    name: '01.10-07.10',
    uv: 200,
    pv: 250
  },
  {
    name: '07.10-13.10',
    uv: 300,
    pv: 350
  },
  {
    name: '14.10-21.10',
    uv: 400,
    pv: 450
  },
  {
    name: '21.10-30.10',
    uv: 500,
    pv: 550
  }
];

export const ComparisonBarChart = () => {
  return (
    <ResponsiveContainer width='110%' height={160}>
      <BarChart data={data} style={{ padding: 0, margin: '0 -30px' }}>
        <CartesianGrid strokeDasharray='2 7' vertical={false} />
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
        <Tooltip />
        <Bar dataKey='pv' fill='#D6EAFF' strokeLinecap='round' />
        <Bar dataKey='uv' fill='#90C6FD' />
      </BarChart>
    </ResponsiveContainer>
  );
};
