import styled from 'styled-components';
import Box from '../Box';
import { CrookedChart } from '../CrookedChart/CrookedChart';
import Text from '../Text';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { CustomRadioButton } from '../CustomRadioButton/CustomRadioButton';
import { SmallAreaChart } from '../SmallAreaChart/SmallAreaChart';
import { PieChartCard } from '../PieChartCard/PieChartCard';
import { dataMenuObj } from '../../Pages/Administrator/IndicatorGlobal';

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

const smallChartData = [
  {
    id: 'id-q',
    value: 7
  },
  {
    id: 'id-A',
    value: 5
  },
  {
    id: 'id-B',
    value: 10
  },
  {
    id: 'id-C',
    value: 8
  },
  {
    id: 'id-D',
    value: 13
  },
  {
    id: 'id-E',
    value: 3
  },
  {
    id: 'id-F',
    value: 5
  },
  {
    id: 'id-G',
    value: 4
  },
  {
    id: 'id-z',
    value: 3
  }
];

const MainChart = styled.div`
  width: 100%;
  height: 228px;
`;

const CardHeader = styled.div`
  display: flex;
  margin-bottom: 26px;
`;
const Content = styled.div`
  padding-top: 27px;
`;

const LeftSideHeader = styled.div`
  margin-left: auto;
  display: flex;
`;

const Separator = styled.div`
  width: 1px;
  height: 100%;
  background-color: #000000;
  opacity: 0.1;
  margin-left: 20px;
  margin-right: 10px;
`;
const ActiveMenu = styled.div`
  margin-bottom: 30px;

  &::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 3px;
    background-color: #5398df;
    border-radius: 3px;
    text-align: center;
    vertical-align: middle;
    margin-right: 11px;
  }
`;

const Charts = styled.div`
  display: flex;
`;

const SmallCharts = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-top: -10px;
  width: 65%;
`;

export const AnalysisOfSessionsCard: React.FC<{ dataChart?: dataMenuObj }> = ({
  dataChart
}) => {
  return (
    <Box primary={true} margin='0 0 30px 0' height='1015px'>
      <Text size='18px' weight='500'>
        Analyse des sessions
      </Text>
      <Content>
        <CardHeader>
          <CustomSelect
            backdroundColor='#f5f5f5'
            options={[
              { id: 'id-1', value: 'Utilisateurs' },
              { id: 'id-2', value: 'Lorem' }
            ]}
          />
          <LeftSideHeader>
            <CustomSelect
              border='1px solid #5398DF;'
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
              border='1px solid #5398DF;'
              options={[
                { id: 'id-1', value: 'Statut' },
                { id: 'id-2', value: 'Lorem' }
              ]}
            />
            <Separator />
            <CustomRadioButton
              marginLeft={10}
              values={[
                { id: 'id-1', name: 'Jour' },
                { id: 'id-2', name: 'Semaine' },
                { id: 'id-3', name: 'Mois' }
              ]}
            />
          </LeftSideHeader>
        </CardHeader>
        <ActiveMenu>Utilisateurs</ActiveMenu>
        <MainChart>
          <CrookedChart data={data} />
        </MainChart>
        <Charts>
          <SmallCharts>
            <SmallAreaChart data={smallChartData} title='Utilisateurs' />
            <SmallAreaChart data={smallChartData} title='Utilisateurs' />
            <SmallAreaChart data={smallChartData} title='Utilisateurs' />
            <SmallAreaChart data={smallChartData} title='Utilisateurs' />
            <SmallAreaChart data={smallChartData} title='Utilisateurs' />
            <SmallAreaChart data={smallChartData} title='Utilisateurs' />
            <SmallAreaChart data={smallChartData} title='Utilisateurs' />
            <SmallAreaChart data={smallChartData} title='Utilisateurs' />
          </SmallCharts>
          <PieChartCard
            pieChartSize={257}
            title='Classement Consultations'
            width='30%'
            data={dataChart}
            height='max-content'
            column={2}
            border={'1px solid #EAEAEA'}
            margin='0 30px 0 auto'
          />
        </Charts>
      </Content>
    </Box>
  );
};
