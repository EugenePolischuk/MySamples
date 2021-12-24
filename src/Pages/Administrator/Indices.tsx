import React, { useRef } from 'react';
import Container from '../../Components/Container';
import styled from 'styled-components';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import { useReactToPrint } from 'react-to-print';
import { Table, Tag } from 'antd';
import { Excel } from 'antd-table-saveas-excel/dist';
import Search from 'antd/es/input/Search';

const IndicesContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 25px;
  background-color: white;
  width: 100%;
`;

const GreyLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(236, 236, 236, 1);
  padding: 0 25px;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 40px 50px;
  background-color: white;
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

const Indices = () => {
  const columns: any[] = [
    {
      title: 'Entreprise',
      dataIndex: 'entreprise',
      key: 'entreprise',
      filterSearch: true,
      sorter: {
        compare: (a: any, b: any) => a.entreprise.localeCompare(b.entreprise)
      }
    },
    {
      title: 'Nb des salariés',
      dataIndex: 'employees',
      key: 'employees',
      sorter: {
        compare: (a: any, b: any) => a.employees - b.employees
      }
    },
    {
      title: 'Nouveaux connéctés',
      dataIndex: 'connections',
      key: 'connections',
      sorter: {
        compare: (a: any, b: any) => a.connections - b.connections
      }
    },
    {
      title: 'Taux d’engagement',
      dataIndex: 'rate',
      key: 'rate',
      sorter: {
        compare: (a: any, b: any) => a.rate - b.rate
      }
    },
    {
      title: 'Total demandes',
      dataIndex: 'totalRequests',
      key: 'totalRequests',
      sorter: {
        compare: (a: any, b: any) => a.totalRequests - b.totalRequests
        // multiple:
      }
    },
    {
      title: 'Demandes resolues',
      dataIndex: 'resolvedRequests',
      key: 'resolvedRequests',
      sorter: {
        compare: (a: any, b: any) => a.resolvedRequests - b.resolvedRequests
      }
    },
    {
      title: 'Indice Phare',
      dataIndex: 'index',
      key: 'index',
      sorter: {
        compare: (a: any, b: any) => a.index - b.index
      },
      render: (tags: number) => (
        <Tag
          color={
            tags >= 4
              ? 'green'
              : tags < 4 && tags >= 2
              ? 'orange'
              : tags < 2
              ? 'red'
              : ''
          }>
          {tags}
        </Tag>
      )
    },
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
      render: () => <a>Détails</a>
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
      entreprise: 'Belavia',
      employees: 'xxxxx',
      connections: '↑ 20%',
      rate: 'xx %',
      totalRequests: 10,
      resolvedRequests: '229',
      index: 'NoData'
    },
    {
      key: '2',
      entreprise: 'Gazprom',
      employees: 'xxxxx',
      connections: '↑ 20%',
      rate: 'xx %',
      totalRequests: 12,
      resolvedRequests: '229',
      index: 2
    },
    {
      key: '3',
      entreprise: 'Belaz',
      employees: 'xxxxx',
      connections: '↑ 20%',
      rate: 'xx %',
      totalRequests: 14,
      resolvedRequests: '229',
      index: 3.1
    },
    {
      key: '4',
      entreprise: 'BP',
      employees: 'xxxxx',
      connections: '↑ 20%',
      rate: 'xx %',
      totalRequests: 15,
      resolvedRequests: '229',
      index: 1
    },
    {
      key: '5',
      entreprise: 'AirFrance',
      employees: 'xxxxx',
      connections: '↑ 20%',
      rate: 'xx %',
      totalRequests: 22,
      resolvedRequests: '229',
      index: 5
    },
    {
      key: '6',
      entreprise: 'Wizzair',
      employees: 'xxxxx',
      connections: '↑ 20%',
      rate: 'xx %',
      totalRequests: 29,
      resolvedRequests: '229',
      index: 3.5
    },
    {
      key: '7',
      entreprise: 'Ryanair',
      employees: 'xxxxx',
      connections: '↑ 20%',
      rate: 'xx %',
      totalRequests: 26,
      resolvedRequests: '229',
      index: 4.1
    },
    {
      key: '8',
      entreprise: 'CIC',
      employees: 'xxxxx',
      connections: '↑ 20%',
      rate: 'xx %',
      totalRequests: 2,
      resolvedRequests: '229',
      index: 2
    }
  ];

  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  type TableForPDFProps = {
    scrollable?: boolean;
  };

  const TableForPDF: React.FC<TableForPDFProps> = ({ scrollable }) => (
    <div ref={componentRef}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered={true}
        scroll={{ y: scrollable ? 400 : undefined }}
      />
    </div>
  );

  const onSearch = (value: string) => {
    // const filteredData = [...data];
    return value
      ? data.filter(el => el.entreprise.toLowerCase() === value.toLowerCase())
      : data;
  };

  return (
    <Container>
      <IndicesContainer>
        <Header>
          <Text height='24px' size='16px' weight='700'>
            Indices Phare
          </Text>
        </Header>
        <GreyLine />
        <Box>
          <Search
            placeholder='Recherche ... '
            onSearch={onSearch}
            style={{ width: 300, marginBottom: 20 }}
          />

          <TableForPDF scrollable />
          <div style={{ visibility: 'hidden', height: 0 }}>
            <TableForPDF />
          </div>
          <TableFooter>
            <ButtonBox>
              <Button
                style={{ marginRight: 20 }}
                onClick={handlePrint}
                type='primary'>
                {' '}
                Telecharger PDF
              </Button>
              <Button
                type='primary'
                onClick={() => {
                  const excel = new Excel();
                  excel
                    .addSheet('test')
                    .addColumns(changeColumn(columns))
                    .addDataSource(data)
                    .saveAs('Test2.xlsx');
                }}>
                {' '}
                Telecharger XLS
              </Button>
            </ButtonBox>

            <Text size='14px' weight='400' height='17px' color='#6B7885'>
              Nombre total de partenaires: {data.length}
            </Text>
          </TableFooter>
        </Box>
      </IndicesContainer>
    </Container>
  );
};

export default Indices;
