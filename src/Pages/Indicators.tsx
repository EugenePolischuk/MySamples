import styled from 'styled-components';
import Header from '../Components/Header';
import Text from '../Components/Text';
import Box from '../Components/Box';
import WrapContainer from '../Components/WrapContainer';
import StatBox from '../Components/StatiscticBox';
import {
  ClockCircleOutlined,
  ContactsOutlined,
  EuroOutlined,
  QuestionCircleOutlined,
  TeamOutlined,
  UserAddOutlined,
  WalletOutlined
} from '@ant-design/icons';
import { Empty } from 'antd';
import { DatePickerWrapper } from '../Components/DatePickerWrapper/DatePickerWrapper';
import { AnalysisOfSessionsCard } from '../Components/AnalysisOfSessionsCard/AnalysisOfSessionsCard';
import { AnalysisOfRequests } from '../Components/AnalysisOfRequests/AnalysisOfRequests';
import { CrookedComparisonCard } from '../Components/CrookedComparisonCard/CrookedComparisonCard';
import { AnalysisOfTraining } from '../Components/AnalysisOfTraining/AnalysisOfTraining';

interface TempChartProps {
  height: string;
}

const IndicatorsContainer = styled.div`
  width: 100%;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;

const IndicatorsBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: flex-start;
`;

const TempChart = styled.div<TempChartProps>`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 25px;
  height: ${props => props.height};
  background-color: white;
  margin-bottom: 30px;
  border-radius: 5px;

  &:nth-child(3) {
    margin: 0;
  }
`;

const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
  margin-top: 30px;
`;

const EmptyIcon = styled(Empty)`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .ant-empty-image svg {
    width: 200px;
    height: 200px;
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-shrink: 2;
`;

const Indicators = () => {
  return (
    <IndicatorsContainer>
      <Header title='Indicateurs'>
        <DatePickerWrapper onDateChange={console.log} />
      </Header>
      <IndicatorsBody>
        <AnalysisOfSessionsCard />
        <TempChart height='max-content'>
          <Text size='18px' weight='500'>
            Analyse des sollicitations
          </Text>
          <Content>
            <CrookedComparisonCard
              height='max-content'
              margin='30px 0 0 0'
              width='calc(38% - 30px)'
              border='1px solid #EAEAEA;'
              isShowedDescr={true}
            />
            <AnalysisOfRequests />
          </Content>
        </TempChart>
        <TempChart height='max-content'>
          <Text size='18px' weight='500'>
            Analyse des demandes de formation
          </Text>
          <AnalysisOfTraining />
        </TempChart>
        <Box primary>
          <Text size='18px' weight='500'>
            Analyse d’impact RSE
          </Text>
          <WrapContainer margin='30px 0 0 0'>
            <StatBox
              width='calc(33.33% - 20px)'
              icon={
                <EuroOutlined style={{ fontSize: '30px', color: '#6B7885' }} />
              }
              title='Montant total des économies'
              count='75 348 €'
              percentsColor='green'
              percents='2%'
            />
            <StatBox
              width='calc(33.33% - 20px)'
              icon={
                <WalletOutlined
                  style={{ fontSize: '30px', color: '#6B7885' }}
                />
              }
              title='Montant des économies par salarié'
              count='322 €'
              percentsColor='red'
              percents='6%'
            />
            <StatBox
              width='calc(33.33% - 20px)'
              icon={
                <TeamOutlined style={{ fontSize: '30px', color: '#6B7885' }} />
              }
              title='Personnes accompagnées'
              count='234'
              percentsColor='green'
              percents='2%'
            />
            <StatBox
              width='calc(33.33% - 20px)'
              icon={
                <ClockCircleOutlined
                  style={{ fontSize: '30px', color: '#6B7885' }}
                />
              }
              title='Heures de soutien'
              count='48'
              percentsColor='green'
              percents='2%'
            />
          </WrapContainer>
        </Box>
        <WrapContainer margin='30px 0 0 0'>
          <Box primary width='calc(28% - 15px)'>
            <Text size='18px' weight='500'>
              Démographie
            </Text>
            <WrapContainer margin='30px 0 0 0'>
              <StatBox
                icon={
                  <TeamOutlined
                    style={{ fontSize: '30px', color: '#6B7885' }}
                  />
                }
                title='Nombre de salariés'
                count='320'
                percentsColor='green'
                percents='2%'
              />
              <StatBox
                icon={
                  <UserAddOutlined
                    style={{ fontSize: '30px', color: '#6B7885' }}
                  />
                }
                title='Salariés connectés'
                count='231'
                percentsColor='green'
                percents='2%'
              />
              <StatBox
                icon={
                  <ContactsOutlined
                    style={{ fontSize: '30px', color: '#6B7885' }}
                  />
                }
                title='Taux d’engagement'
                count='76 %'
                percentsColor='green'
                percents='2%'
              />
            </WrapContainer>
          </Box>
          <Box primary isWrap={true} width='calc(72% - 15px)' height='510px'>
            <Text size='18px' weight='500'>
              Satisfaction client
            </Text>
            <EmptyContainer>
              <EmptyIcon
                description={
                  <Description>
                    <Text size='14px' margin='0 5px 0 0' color='grey'>
                      No Data
                    </Text>
                    <QuestionCircleOutlined />
                  </Description>
                }
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            </EmptyContainer>
          </Box>
        </WrapContainer>
      </IndicatorsBody>
    </IndicatorsContainer>
  );
};

export default Indicators;
