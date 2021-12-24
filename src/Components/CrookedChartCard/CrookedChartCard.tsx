import styled from 'styled-components';
import Box from '../Box';
import { CrookedChart } from '../CrookedChart/CrookedChart';
import { StatisticCard } from '../StatisticCard/StatisticCard';

const Chart = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 228px;
`;

const BtnReadMore = styled.button`
  border: 1px solid #5398df;
  border-radius: 5px;
  background-color: transparent;

  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #262626;

  padding: 10px 28px;
  margin-bottom: auto;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const data = [
  { name: '', value: 2700 },
  { name: 'Jan', value: 2500 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 3500 },
  { name: 'Apr', value: 5800 },
  { name: 'May', value: 3800 },
  { name: 'Jun', value: 4000 },
  { name: 'Jul', value: 3000 },
  { name: '', value: 4200 }
];

export const CrookedChartCard = () => {
  return (
    <Box primary={true} margin='0 0 30px 0'>
      <CardHeader>
        <StatisticCard
          title='Nombre de sessions '
          number={5800}
          percentage={2}
          icon='top'
          secondaryText='Depuis le mois dernier'
        />
        <BtnReadMore>Voir les détails</BtnReadMore>
      </CardHeader>
      <Chart>
        <CrookedChart data={data} />
      </Chart>
    </Box>
  );
};
