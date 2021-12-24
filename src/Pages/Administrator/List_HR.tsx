import React from 'react';
import { Table, Tag } from 'antd';
import Container from '../../Components/Container';
import Text from '../../Components/Text';
import Search from 'antd/es/input/Search';
import Button from '../../Components/Button';
import { Excel } from 'antd-table-saveas-excel';
import styled from 'styled-components';
import '../../App.css';

const ListHrContainer = styled.div`
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
  padding: 40px 58px;
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

const ListHr = () => {
  const columns: any[] = [
    {
      title: 'Compte',
      dataIndex: 'account',
      key: 'account',
      filterSearch: true,
      sorter: {
        compare: (a: any, b: any) => a.account.localeCompare(b.account)
      }
    },
    {
      title: 'Référent',
      dataIndex: 'referent',
      key: 'referent',
      sorter: {
        compare: (a: any, b: any) => a.referent - b.referent
      }
    },
    {
      title: 'Date de création',
      dataIndex: 'date',
      key: 'date',
      sorter: {
        compare: (a: any, b: any) => a.date - b.date
      }
    },
    {
      title: 'Effectif',
      dataIndex: 'effective',
      key: 'effective',
      sorter: {
        compare: (a: any, b: any) => a.effective - b.effective
      }
    },
    {
      title: 'Indices Phare',
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
      title: 'Abonnement',
      dataIndex: 'subscription',
      key: 'subscription'
    },
    {
      title: 'Voir plus',
      dataIndex: 'more',
      key: 'more',
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
      account: 'Wavestone',
      referent: 'Nom Prénom',
      date: '18/02/21',
      effective: 2000,
      index: 3,
      subscription: '-'
    },
    {
      key: '2',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      date: '18/02/21',
      effective: 2000,
      index: 3.5,
      subscription: '-'
    },
    {
      key: '3',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      date: '18/02/21',
      effective: 2000,
      index: 4.1,
      subscription: '-'
    },
    {
      key: '4',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      date: '18/02/21',
      effective: 2000,
      index: 3.1,
      subscription: '-'
    },
    {
      key: '5',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      date: '18/02/21',
      effective: 2000,
      index: 5,
      subscription: '-'
    },
    {
      key: '6',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      date: '18/02/21',
      effective: 2000,
      index: 1.1,
      subscription: '-'
    },
    {
      key: '7',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      date: '18/02/21',
      effective: 2000,
      index: 2.1,
      subscription: '-'
    }
  ];

  const onSearch = (value: string) => {
    // const filteredData = [...data];
    return value;
  };

  return (
    <Container>
      <ListHrContainer>
        <Header>
          <Text height='24px' size='16px' weight='700'>
            List HR
          </Text>
        </Header>
        <GreyLine />
        <Box>
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
                Ajouter une entreprise
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
                Exporter
              </Button>
            </ButtonBox>

            <Text size='14px' weight='400' height='17px' color='#6B7885'>
              Nombre total de partenaires: {data.length}
            </Text>
          </TableFooter>
        </Box>
      </ListHrContainer>
    </Container>
  );
};

export default ListHr;
