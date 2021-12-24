import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';
import styled from 'styled-components';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Box from '../Box';
import Text from '../Text';
import { FC } from 'react';

const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: #262626;
`;

const QuestionMark = styled(QuestionCircleOutlined)`
  font-size: 11px;
  margin-left: 7px;
  cursor: help;
`;

const Chart = styled.div`
  width: 145px;
  height: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 15px;
  & .recharts-label-list {
    transform: scale(0.925, 0.9) translate(4%, 5%);
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #262626;
`;

const ContentText = styled.p`
  font-size: 12px;
  line-height: 14px;
  max-width: 110px;
  margin-left: 25px;
`;

interface IProgressChartProps {
  name?: string;
  value: number;
  fill?: string;
}

export const ProgressChart: FC<IProgressChartProps> = props => {
  const { name = 'Taux d’engagement', value = 78, fill = '#78d85b' } = props;

  return (
    <Box primary height='250px'>
      <TitleContainer>
        <Text size='14px' weight='600' height='17px'>
          Taux d’engagement
          <QuestionMark />
        </Text>
      </TitleContainer>
      <Content>
        <Chart>
          <RadialBarChart
            width={160}
            height={160}
            innerRadius={90}
            outerRadius={70}
            data={[
              {
                value,
                fill
              }
            ]}
            startAngle={250}
            endAngle={-70}>
            <RadialBar
              label={{
                position: 'insideEnd',
                fill: '#fff',
                formatter: () => '.',
                fontSize: 20
              }}
              background={{
                fill,
                opacity: 0.1
              }}
              dataKey='value'
              cornerRadius={15}
            />

            <PolarAngleAxis type='number' domain={[0, 100]} tick={false} />

            <g>
              <text
                x={80}
                y={65}
                textAnchor='middle'
                fontSize='11'
                fill='#262626'>
                {name}
              </text>
              <text
                x={80}
                y={100}
                textAnchor='middle'
                fontSize='26'
                fontWeight='500'
                fill='#262626'>
                {value}%
              </text>
            </g>
          </RadialBarChart>
        </Chart>
        <ContentText>345 sur 1200 salariés sont connéctés au Phare</ContentText>
      </Content>
    </Box>
  );
};
