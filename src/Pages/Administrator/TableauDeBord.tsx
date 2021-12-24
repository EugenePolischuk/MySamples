import { PieChartCard } from '../../Components/PieChartCard/PieChartCard';
import StatBoxAdmin from '../../Components/StatiscticBoxAdmin';

import styled from 'styled-components';
import Header from '../../Components/Header';
import Box from '../../Components/Box';

const ContainerTableau = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: flex-start;
  background: #fff;
  border-radius: 2px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;
interface BoxBoardProps {
  color: string;
}
const BoxBoard = styled.div<BoxBoardProps>`
  padding: 20px;
  background: ${props => props.color};
  width: 24%;
  height: 114px;
  border-radius: 5px;
  align-items: center;
`;
interface TextProps {
  size: string;
}
const Text = styled.div<TextProps>`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: ${props => props.size};
  color: #ffffff;
`;
const Line = styled.div`
  width: 100%;
  height: 0px;
  background: #e5e5e5;
  border: 1px solid #e5e5e5;
`;

export const TableauDeBord = () => {
  const data = [
    {
      id: '1',
      color: 'linear-gradient(101.29deg, #FFD572 0%, #FEBD38 99.92%)',
      text: 'Note moyenne',
      value: '86'
    },
    {
      id: '2',
      color: 'linear-gradient(100.69deg, #B09FFF -1.74%, #8D79F6 99.84%)',
      text: 'Note moyenne',
      value: '86'
    },
    {
      id: '3',
      color: 'linear-gradient(101.29deg, #90C6FD 0.16%, #5398DF 100.08%)',
      text: 'Note moyenne',
      value: '86'
    },
    {
      id: '4',
      color: 'linear-gradient(101.29deg, #78D85B 0.07%, #5AB83D 100%)',
      text: 'Note moyenne',
      value: '86'
    }
  ];
  return (
    <Container>
      <Header title='Tableau de bord' />
      <ContainerTableau>
        <Box
          width={'100%'}
          flexDirection='row'
          height={'120px'}
          jsContent='space-around'>
          {data.map(el => (
            <BoxBoard key={el.id} color={el.color}>
              <Text size='14px'>{el.text}</Text>{' '}
              <Text size='40px'>{el.value}%</Text>
            </BoxBoard>
          ))}
        </Box>
        <Box flexDirection='row'>
          <Box
            width={'70%'}
            jsContent='flex-start'
            flexDirection='row'
            border='1px solid #EAEAEA'
            flexWrap='wrap'
            borderRadius='5px'>
            <StatBoxAdmin
              height='130px'
              title='Nombre d’entreprises'
              count='5800'
              percentsColor='green'
              percents='2%'
            />
            <StatBoxAdmin
              height='130px'
              title='Nombre des salariés'
              count='58000'
              percentsColor='green'
              percents='2%'
              line='true'
            />
            <StatBoxAdmin
              height='130px'
              title='Demandes de formations'
              count='75 348 €'
              percentsColor='green'
              percents='2%'
              line='true'
            />
            <Line />
            <StatBoxAdmin
              height='130px'
              title='Formées'
              count='52'
              percentsColor='green'
              percents='22%'
            />
            <StatBoxAdmin
              height='130px'
              title='Total des demandes'
              count='1703'
              line='true'
            />
            <StatBoxAdmin
              height='130px'
              title='En cours'
              count='520'
              line='true'
            />
            <Line />
            <StatBoxAdmin height='130px' title='Terminées' count='1205' />
            <StatBoxAdmin
              height='130px'
              title='Taux d’engagement'
              count='78%'
              percentsColor='black'
              info='1345 sur 1500 salariés sont connéctés au Phare'
              line='true'
              ques='true'
            />
          </Box>
          <PieChartCard
            pieChartSize={257}
            title='Classement Consultations '
            width='25%'
            height='max-content'
            column={2}
            border={'1px solid #EAEAEA'}
            margin='0 30px 0 auto'
          />
        </Box>
      </ContainerTableau>
    </Container>
  );
};
