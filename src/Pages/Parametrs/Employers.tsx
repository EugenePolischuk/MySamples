import React from 'react';
import Header from '../../Components/Header';
import styled from 'styled-components';
import WrapContainer from '../../Components/WrapContainer';
import Box from '../../Components/Box';
import Text from '../../Components/Text';
import CustomForm from '../../Components/CustomForm';
import { Form, Input, message, Space, Switch, Table, Tooltip, Upload } from 'antd';
import { CloseOutlined, FormOutlined, InboxOutlined, MailOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Button from '../../Components/Button';
import InformativeMessage from '../../Components/InformativeMessage';
import 'antd/dist/antd.css';
import '../../App.css';


const { Dragger } = Upload;
const { Search } = Input;

const EmployersContainer = styled.div`
  width: 100%;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 25px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px
`;

const ButtonsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

const TextSpan = styled.span`
  color: #5098e0
`;

const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WrapperBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between
`;


const Employers = () => {
  const [form] = Form.useForm();
  const onSearch = (value: string) => console.log(value);


  const data = [
    {
      key: '1',
      number: '001',
      email: 'example@gmail.com',
      date: '05.04.1990',
      number_secu: '46442',
      status: 'CDD',
      actions: 'Supprimer'
    },
    {
      key: '2',
      number: '001',
      email: 'example@gmail.com',
      date: '05.04.1990',
      number_secu: '46442',
      status: 'CDD',
      actions: 'Supprimer'
    },
    {
      key: '3',
      number: '001',
      email: 'example@gmail.com',
      date: '05.04.1990',
      number_secu: '46442',
      status: 'CDD',
      actions: 'Supprimer'
    },
    {
      key: '4',
      number: '001',
      email: 'example@gmail.com',
      date: '05.04.1990',
      number_secu: '46442',
      status: 'CDD',
      actions: 'Supprimer'
    },
    {
      key: '5',
      number: '001',
      email: 'example@gmail.com',
      date: '05.04.1990',
      number_secu: '46442',
      status: 'CDD',
      actions: 'Supprimer'
    },
    {
      key: '6',
      number: '001',
      email: 'example@gmail.com',
      date: '05.04.1990',
      number_secu: '46442',
      status: 'CDD',
      actions: 'Supprimer'
    },
    {
      key: '7',
      number: '001',
      email: 'example@gmail.com',
      date: '05.04.1990',
      number_secu: '46442',
      status: 'CDD',
      actions: 'Supprimer'
    }
  ];

  const columnsD = [
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '12%'
    },
    {
      title: 'Femmes',
      children: [
        {
          title: 'CDI',
          dataIndex: 'femmes_cdi',
          key: 'femmes_cdi'
        },
        {
          title: 'CDD',
          dataIndex: 'femmes_cdd',
          key: 'femmes_cdd'
        },
        {
          title: 'ALT',
          dataIndex: 'femmes_alt',
          key: 'femmes_alt'
        },
        {
          title: 'ST',
          dataIndex: 'femmes_st',
          key: 'femmes_st'
        }
      ]
    },
    {
      title: 'Hommes',
      dataIndex: 'number',
      key: 'number',
      children: [
        {
          title: 'CDI',
          dataIndex: 'hommes_cdi',
          key: 'hommes_cdi'
        },
        {
          title: 'CDD',
          dataIndex: 'hommes_cdd',
          key: 'hommes_cdd'
        },
        {
          title: 'ALT',
          dataIndex: 'hommes_alt',
          key: 'hommes_alt'
        },
        {
          title: 'ST',
          dataIndex: 'hommes_st',
          key: 'hommes_st'
        }
      ]
    }
  ];

  const dataD = [
    {
      age: '<20',
      femmes_cdi: 10,
      femmes_cdd: 32,
      femmes_alt: 23,
      femmes_st: 44,
      hommes_cdi: 10,
      hommes_cdd: 32,
      hommes_alt: 23,
      hommes_st: 44
    },
    {
      age: '20-35',
      femmes_cdi: 10,
      femmes_cdd: 32,
      femmes_alt: 23,
      femmes_st: 44,
      hommes_cdi: 10,
      hommes_cdd: 32,
      hommes_alt: 23,
      hommes_st: 44
    },
    {
      age: '35-45',
      femmes_cdi: 10,
      femmes_cdd: 32,
      femmes_alt: 23,
      femmes_st: 44,
      hommes_cdi: 10,
      hommes_cdd: 32,
      hommes_alt: 23,
      hommes_st: 44
    },
    {
      age: '45-55',
      femmes_cdi: 10,
      femmes_cdd: 32,
      femmes_alt: 23,
      femmes_st: 44,
      hommes_cdi: 10,
      hommes_cdd: 32,
      hommes_alt: 23,
      hommes_st: 44
    },
    {
      age: '55-63',
      femmes_cdi: 10,
      femmes_cdd: 32,
      femmes_alt: 23,
      femmes_st: 44,
      hommes_cdi: 10,
      hommes_cdd: 32,
      hommes_alt: 23,
      hommes_st: 44
    },
    {
      age: '>63',
      femmes_cdi: 10,
      femmes_cdd: 32,
      femmes_alt: 23,
      femmes_st: 44,
      hommes_cdi: 10,
      hommes_cdd: 32,
      hommes_alt: 23,
      hommes_st: 44
    }
  ];

  const columns = [
    {
      title: '№',
      dataIndex: 'number',
      key: 'number',
      width: '8%'
    },
    {
      title: 'Emails',
      dataIndex: 'email',
      key: 'email',
      width: '26%'
    },
    {
      title: 'Date de naissance\n',
      dataIndex: 'date',
      key: 'date',
      width: '21%'
    },
    {
      title: '№ sécu\n',
      key: 'number_secu',
      dataIndex: 'number_secu',
      width: '14%'
    },
    {
      title: 'Statut',
      key: 'status',
      dataIndex: 'status',
      width: '11%'
    },
    {
      title: 'Actions',
      key: 'actions',
      dataIndex: 'actions',
      width: '18%',
      render: (text: string) => <a>{text}</a>
    }
  ];

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    }
  };
  return (
    <EmployersContainer>
      <Header title='Communication - RSE'>
        <Button type='primary'>Enregistrer</Button>
      </Header>
      <WrapContainer>
        <Box primary width='calc(60% - 15px)' margin='30px 0 0 0'>
          <Text size='18px' weight='500' height='22px'>Paramètres des noms des domaines des messageries qui ont l’acces
            à Phare
          </Text>
          <Text size='14px' height='20px' weight='400' margin='43px 0 0 0'>Determinez un ou plusieurs noms de
            messageries qui
            peuvent
            accéder à l’espace collaborateur.
          </Text>
          <FormContainer>
            <CustomForm
              form={form}
              layout='vertical'
              name='form-employers'
              items={[
                {
                  name: 'email',
                  label: '',
                  rules: [{ required: true, message: 'Test wrong message!' }],
                  input:
                    <>
                      <InputContainer>
                        <Input placeholder='@entreprise.com' prefix={<MailOutlined />} />
                        <Button type='ghost'><FormOutlined style={{ color: 'black' }} /></Button>
                        <Button type='ghost'><CloseOutlined style={{ color: 'black' }} /></Button>
                      </InputContainer>
                      <ButtonsContainer>
                        <Button type='primary'>Ajouter un demaine d’acces</Button>
                        <Button>Enregistrer</Button>
                      </ButtonsContainer>
                    </>
                }
              ]} />
          </FormContainer>
          <Text size='14px' height='20px' weight='400' margin='48px 0 0 0'>Determinez un ou plusieurs noms de
            Paramètres démographie d’entreprise
          </Text>
          <Text size='12px' height='18px' weight='400' margin='7px 0 28px 0' color='grey'>
            Le site web fishtext aidera le concepteur, le maquettiste et le webmaster à générer quelques paragraphes de
            texte de poisson
          </Text>

          <div style={{ margin: '0 0 100px 0' }}>
            <Dragger {...props}>
              {/*<p className='ant-upload-drag-icon'>*/}
              <InboxOutlined style={{ fontSize: 65, color: '#5398DF' }} />
              {/*</p>*/}
              <p className='ant-upload-text'>Déposez un fichier format Excel
                <Tooltip
                  title={<Text>Conveniently initiate viral synergy without multi functional
                    <TextSpan color='blue'> platforms</TextSpan>. </Text>}
                  color='white'
                >
                  <QuestionCircleOutlined style={{ fontSize: 15, marginLeft: 5 }} />
                </Tooltip>
              </p>
            </Dragger>
          </div>

        </Box>
        <Box primary width='calc(40% - 15px)'>
          <BoxTitle>
            <Text size='18px' weight='500' height='22px'>Ma démographie</Text>
            <SwitchBox>
              <Text size='12px' weight='500' height='15px'>En nombre</Text>
              <Switch />
              <Text size='12px' weight='500' height='15px' color='grey'>En %</Text>
            </SwitchBox>
          </BoxTitle>
          <Table
            style={{ marginTop: 40 }}
            columns={columnsD}
            dataSource={dataD}
            pagination={false}
            bordered={true}
            scroll={{ y: 500 }}
            summary={dataD => {
              let femmes_cdi = 0;
              let femmes_cdd = 0;
              let femmes_alt = 0;
              let femmes_st = 0;
              let hommes_cdi = 0;
              let hommes_cdd = 0;
              let hommes_alt = 0;
              let hommes_st = 0;
              let index = 0;

              dataD.forEach((item, indexArray) => {
                index = indexArray;
                femmes_cdi += item.femmes_cdi;
                femmes_cdd += item.femmes_cdd;
                femmes_alt += item.femmes_alt;
                femmes_st += item.femmes_st;
                hommes_cdi += item.hommes_cdi;
                hommes_cdd += item.hommes_cdd;
                hommes_alt += item.hommes_alt;
                hommes_st += item.hommes_st;
              });

              return (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={index}>SOUS-TOTAL</Table.Summary.Cell>
                    <Table.Summary.Cell index={index}>
                      <Text>{femmes_cdi}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={index}>
                      <Text>{femmes_cdd}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={index}>
                      <Text>{femmes_alt}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={index}>
                      <Text>{femmes_st}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={index}>
                      <Text>{hommes_cdi}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={index}>
                      <Text>{hommes_cdd}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={index}>
                      <Text>{hommes_alt}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={index}>
                      <Text>{hommes_st}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={index}>TOTAL</Table.Summary.Cell>
                    <Table.Summary.Cell index={index} colSpan={4}>
                      <Text>{femmes_cdi + femmes_cdd + femmes_alt + femmes_st}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={index} colSpan={4}>
                      <Text>{hommes_cdi + hommes_cdd + hommes_alt + hommes_st}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
          />
        </Box>
      </WrapContainer>
      <Box primary>
        <Text size='18px' weight='500' height='22px'>
          Collaborateurs chargés
        </Text>
        <WrapContainer margin='30px 0 0 0'>
          <WrapperBox style={{ width: '60%' }}>
            <Space direction='vertical' style={{ width: '100%', marginBottom: '26px' }}>
              <Search placeholder='Search' onSearch={onSearch} />
            </Space>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered={true}
              scroll={{ y: 400 }}
            />
          </WrapperBox>
          <WrapperBox style={{ width: '30%' }}>
            <InfoBox>
              <WrapperBox>
                <Text size='14px' weight='500' height='17px'>Qté chargé total</Text>
                <Text size='35px' weight='400' height='42px'>430</Text>
              </WrapperBox>

              <WrapperBox>
                <Text size='14px' weight='500' height='17px'>Qté connéctée</Text>
                <Text size='35px' weight='400' height='42px'>143</Text>
              </WrapperBox>
            </InfoBox>
            <InformativeMessage
              type='ok'
              title='Retrouvez l’essentiel pour prévenir et protéger vos salariés. Encore plus de façons d’impacter positivement la qualité de vie de vos collaborateurs.'>
            </InformativeMessage>
            <WrapContainer>
              <Button type='primary'>Envoyer l’invitation a tous</Button>
              <Button>Envoyer l’invitation a tous</Button>
            </WrapContainer>
          </WrapperBox>
        </WrapContainer>
      </Box>
    </EmployersContainer>
  );
};

export default Employers;
