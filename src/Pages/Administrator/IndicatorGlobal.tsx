import styled from 'styled-components';

import Header from '../../Components/Header';
import Search from 'antd/es/input/Search';
import Text from '../../Components/Text';
import Box from '../../Components/Box';
import WrapContainer from '../../Components/WrapContainer';
import StatBox from '../../Components/StatiscticBox';
import {
  ClockCircleOutlined,
  CloudFilled,
  DownloadOutlined,
  EuroOutlined,
  HomeFilled,
  HomeOutlined,
  MedicineBoxFilled,
  TeamOutlined,
  WalletOutlined
} from '@ant-design/icons';
import { DatePickerWrapper } from '../../Components/DatePickerWrapper/DatePickerWrapper';
import { AnalysisOfSessionsCard } from '../../Components/AnalysisOfSessionsCard/AnalysisOfSessionsCard';
import { AnalysisOfRequests } from '../../Components/AnalysisOfRequests/AnalysisOfRequests';
import { CrookedComparisonCard } from '../../Components/CrookedComparisonCard/CrookedComparisonCard';
import { AnalysisOfTraining } from '../../Components/AnalysisOfTraining/AnalysisOfTraining';
import { Button, Table } from 'antd';
import { Excel } from 'antd-table-saveas-excel';

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

const Content = styled.div`
  display: flex;
  flex-shrink: 2;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const TableFooter = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export type dataMenuObj = {
  id: string;
  name: string;
  value: number;
  color: string;
  Icon: typeof MedicineBoxFilled;
}[];

export const dataMenu: dataMenuObj = [
  {
    id: 'id-1',
    name: 'Logement ',
    value: 36,
    color: '#90C6FD',
    Icon: HomeOutlined
  },
  {
    id: 'id-2',
    name: 'Famille',
    value: 5,
    color: '#FE6C6C',
    Icon: HomeFilled
  },
  {
    id: 'id-3',
    name: 'Transports',
    value: 20,
    color: '#94E37B',
    Icon: CloudFilled
  },
  {
    id: 'id-4',
    name: 'Formation',
    value: 40,
    color: '#FFD572',
    Icon: CloudFilled
  },
  {
    id: 'id-5',
    name: 'Aléas de la vie',
    value: 20,
    color: '#8D79F6',
    Icon: CloudFilled
  }
];

export const IndicatorsGlobal = () => {
  const columns: any[] = [
    {
      title: 'Page consultée',
      dataIndex: 'consult',
      key: 'consult',
      filterSearch: true,
      width: '40%',
      sorter: {
        compare: (a: any, b: any) => a.consult.localeCompare(b.consult)
      }
    },
    {
      title: 'Nb de vue',
      dataIndex: 'vue',
      key: 'vue',
      sorter: {
        compare: (a: any, b: any) => a.vue - b.vue
      }
    },
    {
      title: 'Nb de tickets ouverts',
      dataIndex: 'ticket',
      key: 'ticket',
      sorter: {
        compare: (a: any, b: any) => a.ticket - b.ticket
      }
    },
    {
      title: 'Taux de conversion',
      dataIndex: 'convers',
      key: 'convers',
      sorter: {
        compare: (a: any, b: any) => a.convers - b.convers
      }
    }
  ];

  const changeColumn = (columns: any[]) => {
    columns.map(el => {
      if (el.render) {
        el.render = undefined;
      }
    });
    return columns;
  };

  const data = [
    {
      key: '1',
      consult: 'Logement – Location',
      vue: '35',
      ticket: '24',
      convers: '1%'
    },
    {
      key: '2',
      consult: 'Logement – Location',
      vue: '35',
      ticket: '24',
      convers: '1%'
    },
    {
      key: '3',
      consult: 'Logement – Location',
      vue: '35',
      ticket: '24',
      convers: '1%'
    },
    {
      key: '4',
      consult: 'Logement – Location',
      vue: '35',
      ticket: '24',
      convers: '1%'
    },
    {
      key: '5',
      consult: 'Logement – Location',
      vue: '35',
      ticket: '24',
      convers: '1%'
    },
    {
      key: '6',
      consult: 'Logement – Location',
      vue: '35',
      ticket: '24',
      convers: '1%'
    },
    {
      key: '7',
      consult: 'Logement – Location',
      vue: '35',
      ticket: '24',
      convers: '1%'
    }
  ];

  const onSearch = (value: string) => {
    // const filteredData = [...data];
    return value;
  };

  return (
    <IndicatorsContainer>
      <Header title='Analyse des sessions'>
        <DatePickerWrapper onDateChange={console.log} />
      </Header>
      <IndicatorsBody>
        <AnalysisOfSessionsCard dataChart={dataMenu} />
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
            Classement Consultations
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
          <Box primary isWrap={true} width='100%'>
            <Text size='18px' weight='500' height='50px'>
              Consultation des pages
            </Text>
            <Search
              placeholder='Recherche ... '
              onSearch={onSearch}
              style={{ width: 300, marginBottom: 20 }}
            />

            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered={true}
              scroll={{ y: 400 }}
            />
            <TableFooter>
              <ButtonBox>
                <Button type='primary' style={{ marginRight: 20 }}>
                  {' '}
                  <DownloadOutlined /> Exporter
                </Button>
                <Button
                  style={{ color: '#5398DF' }}
                  onClick={() => {
                    const excel = new Excel();
                    excel
                      .addSheet('test')
                      .addColumns(changeColumn(columns))
                      .addDataSource(data)
                      .saveAs('Test2.xlsx');
                  }}>
                  {' '}
                  <DownloadOutlined /> Exporter
                </Button>
              </ButtonBox>

              <Text size='14px' weight='400' height='17px' color='#6B7885'>
                Nombre total de partenaires: {data.length}
              </Text>
            </TableFooter>
          </Box>
        </WrapContainer>
      </IndicatorsBody>
    </IndicatorsContainer>
  );
};
