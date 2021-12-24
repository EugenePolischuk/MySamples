import React from 'react';
import { Table, Tag, Tooltip } from 'antd';
import Container from '../../Components/Container';
import Text from '../../Components/Text';
import Search from 'antd/es/input/Search';
import Button from '../../Components/Button';
import { Excel } from 'antd-table-saveas-excel';
import styled from 'styled-components';
import '../../App.css';

const PartnerDetailsContainer = styled.div`
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

const ToolTipElement = styled.div`
  margin: 12px 0;
  display: flex;
  align-items: center;
`;

const ToolTipTitle = styled.div`
  margin: 5px 16px;
`;

const PartnerDetails = () => {
  const columns: any[] = [
    {
      title: 'Compte',
      dataIndex: 'account',
      key: 'account',
      filterSearch: true,
      width: '10%',
      sorter: {
        compare: (a: any, b: any) => a.account.localeCompare(b.account)
      }
    },
    {
      title: 'Référent',
      dataIndex: 'referent',
      key: 'referent',
      width: '10%',
      sorter: {
        compare: (a: any, b: any) => a.referent - b.referent
      }
    },
    {
      title: 'Domaine',
      dataIndex: 'domain',
      key: 'domain',
      width: '10%',
      render: (items: any) => (
        <Tooltip
          title={
            <Text color='black'>
              <ToolTipTitle>
                <Text size='14px' color='black' weight='500'>
                  Domaine
                </Text>
              </ToolTipTitle>
              <GreyLine />
              <ToolTipElement>
                Transoprt:{' '}
                {items.transport.map((el: any, index: number) => (
                  <Tag key={index}>{el}</Tag>
                ))}
              </ToolTipElement>
              <ToolTipElement>
                Famille:{' '}
                {items.famille.map((el: any, index: number) => (
                  <Tag key={index}>{el}</Tag>
                ))}
              </ToolTipElement>
              <ToolTipElement>
                Sante:{' '}
                {items.sante.map((el: any, index: number) => (
                  <Tag key={index}>{el}</Tag>
                ))}
              </ToolTipElement>
            </Text>
          }
          placement='topLeft'
          color='white'>
          <Text color='black'>Logement +</Text>
        </Tooltip>
      )
    },
    {
      title: 'Demandes affectées',
      dataIndex: 'affectedRequests',
      key: 'affectedRequests',
      width: '10%',
      sorter: {
        compare: (a: any, b: any) => a.affectedRequests - b.affectedRequests
      }
    },
    {
      title: 'En cours',
      dataIndex: 'inProgress',
      key: 'inProgress',
      width: '10%',
      sorter: {
        compare: (a: any, b: any) => a.inProgress - b.inProgress
      }
    },
    {
      title: 'Traité',
      dataIndex: 'treaty',
      key: 'treaty',
      width: '10%',
      sorter: {
        compare: (a: any, b: any) => a.treaty - b.treaty
      }
    },
    {
      title: 'Abbandonées',
      dataIndex: 'abandoned',
      key: 'abandoned',
      width: '10%',
      sorter: {
        compare: (a: any, b: any) => a.abandoned - b.abandoned
      }
    },
    {
      title: 'Satisfaction',
      dataIndex: 'satisfaction',
      key: 'satisfaction',
      width: '10%',
      sorter: {
        compare: (a: any, b: any) => a.satisfaction - b.satisfaction
      },
      render: (tags: number) => (
        <Tag
          color={
            tags >= 9
              ? 'green'
              : tags < 8 && tags > 3
              ? 'orange'
              : tags <= 3
              ? 'red'
              : ''
          }>
          {tags}
        </Tag>
      )
    },
    {
      title: 'Voir plus',
      dataIndex: 'details',
      key: 'details',
      width: '10%',
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
      domain: {
        transport: ['item1', 'item2', 'item3'],
        famille: ['item4', 'item5', 'item6'],
        sante: ['item7', 'item8', 'item9']
      },
      affectedRequests: 23,
      inProgress: 23,
      treaty: 34,
      abandoned: 343,
      satisfaction: 1
    },
    {
      key: '2',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      domain: {
        transport: ['item1', 'item2', 'item3'],
        famille: ['item4', 'item5', 'item6'],
        sante: ['item7', 'item8', 'item9']
      },
      affectedRequests: 253,
      inProgress: 230,
      treaty: 204,
      abandoned: 305,
      satisfaction: 2
    },
    {
      key: '3',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      domain: {
        transport: ['item1', 'item2', 'item3'],
        famille: ['item4', 'item5', 'item6'],
        sante: ['item7', 'item8', 'item9']
      },
      affectedRequests: 230,
      inProgress: 240,
      treaty: 230,
      abandoned: 334,
      satisfaction: 3
    },
    {
      key: '4',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      domain: {
        transport: ['item1', 'item2', 'item3'],
        famille: ['item4', 'item5', 'item6'],
        sante: ['item7', 'item8', 'item9']
      },
      affectedRequests: 205,
      inProgress: 230,
      treaty: 53,
      abandoned: 304,
      satisfaction: 4
    },
    {
      key: '5',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      domain: {
        transport: ['item1', 'item2', 'item3'],
        famille: ['item4', 'item5', 'item6'],
        sante: ['item7', 'item8', 'item9']
      },
      affectedRequests: 230,
      inProgress: 260,
      treaty: 230,
      abandoned: 303,
      satisfaction: 5
    },
    {
      key: '6',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      domain: {
        transport: ['item1', 'item2', 'item3'],
        famille: ['item4', 'item5', 'item6'],
        sante: ['item7', 'item8', 'item9']
      },
      affectedRequests: 240,
      inProgress: 205,
      treaty: 240,
      abandoned: 305,
      satisfaction: 6
    },
    {
      key: '7',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      domain: {
        transport: ['item1', 'item2', 'item3'],
        famille: ['item4', 'item5', 'item6'],
        sante: ['item7', 'item8', 'item9']
      },
      affectedRequests: 204,
      inProgress: 520,
      treaty: 250,
      abandoned: 350,
      satisfaction: 7
    },
    {
      key: '8',
      account: 'Wavestone',
      referent: 'Nom Prénom',
      domain: {
        transport: ['item1', 'item2', 'item3'],
        famille: ['item4', 'item5', 'item6'],
        sante: ['item7', 'item8', 'item9']
      },
      affectedRequests: 204,
      inProgress: 203,
      treaty: 202,
      abandoned: 303,
      satisfaction: 9
    }
  ];

  const onSearch = (value: string) => {
    // const filteredData = [...data];
    return value;
  };

  return (
    <Container>
      <PartnerDetailsContainer>
        <Header>
          <Text height='24px' size='16px' weight='700'>
            Prestataires
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
                Télécharger pour exel
              </Button>
            </ButtonBox>

            <Text size='14px' weight='400' height='17px' color='#6B7885'>
              Nombre total de partenaires: {data.length}
            </Text>
          </TableFooter>
        </Box>
      </PartnerDetailsContainer>
    </Container>
  );
};

export default PartnerDetails;
