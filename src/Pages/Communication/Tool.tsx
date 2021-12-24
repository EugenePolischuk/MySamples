import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import { WarningFilled } from '@ant-design/icons';
import InformativeMessage from '../../Components/InformativeMessage';
import Box from '../../Components/Box';
import Text from '../../Components/Text';
import { Button, DatePicker, Form, Input, Select, Table } from 'antd';
import CustomItem from '../../Components/CustomFormItem';
import WrapContainer from '../../Components/WrapContainer';

const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

type TestProps = {
  color: string;
};

const OutilContainer = styled.div`
  width: 100%;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;

const WarnIcon = styled(WarningFilled)`
  color: #febd38;
  font-size: 30px;
  margin-right: 20px;
`;

const CustomSelect = styled(Select)<TestProps>`
  background-color: ${props =>
          props.color === 'active' ? 'rgb(239, 248, 236)' : '#ffecec'};
  border-radius: 5px;
  color: ${props => (props.color === 'active' ? 'green' : 'red')};
  display: flex;

  .ant-select-selection-item {
    display: flex;
    justify-content: center;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tool = () => {

  // const [testProps, setTestProps] = useState('');

  const handleChange = (event: any, key: number) => {
    const changedData = [...fixedData];
    changedData[key - 1].control = event;
    setFixedData(changedData);
  };

  // const handleClick = (key: React.Key, event: any) => {
  //   console.log('FROM CLICK VALUE', key);
  //   console.log('FROM CLICK EVENT', event);
  // };

  const columns = [
    {
      title: 'News',
      dataIndex: 'name',
      fixed: true,
      width: '50%'
    },
    {
      title: 'Date',
      dataIndex: 'description',
      width: '20%'
    },
    {
      title: 'Control',
      dataIndex: 'control',
      width: '30%',
      render: (value: string, record: { key: number }) => {
        return (
          <CustomSelect
            color={value}
            bordered={false}
            defaultValue={value}
            style={{ width: 100 }}
            onChange={(event) => handleChange(event, record.key)}>
            <Option value='active'>Active</Option>
            <Option value='inactive'>Inactive</Option>
          </CustomSelect>
        );

      }
    }
  ];

  const [fixedData, setFixedData] = useState([
    {
      key: 1,
      name: <a>Campagne 1</a>,
      description: (
        <Text size='14px' color='grey'>
          05/02
        </Text>
      ),
      control: 'inactive'
    },
    {
      key: 2,
      name: <a>Campagne 1</a>,
      description: (
        <Text size='14px' color='grey'>
          05/02
        </Text>
      ),
      control: 'active'
    },
    {
      key: 3,
      name: <a>Campagne 1</a>,
      description: (
        <Text size='14px' color='grey'>
          05/02
        </Text>
      ),
      control: 'inactive'
    },
    {
      key: 4,
      name: <a>Campagne 1</a>,
      description: (
        <Text size='14px' color='grey'>
          05/02
        </Text>
      ),
      control: 'active'
    },
    {
      key: 5,
      name: <a>Campagne 1</a>,
      description: (
        <Text size='14px' color='grey'>
          05/02
        </Text>
      ),
      control: 'active'
    },
    {
      key: 6,
      name: <a>Campagne 1</a>,
      description: (
        <Text size='14px' color='grey'>
          05/02
        </Text>
      ),
      control: 'active'
    }
  ]);

  const [form] = Form.useForm();
  // const onPanelChange = (value: any, mode: any) => {
  //   console.log(value, mode);
  // };

  const handleClick = (value: any) => {
    console.log(value);
  };
  return (
    <OutilContainer>
      <Header title='Communication - RSE' />
      <InformativeMessage
        type='warning'
        icon={<WarnIcon />}
        title='Sans communication adéquate, l’impact de vos actions et dispositifs RSE ne sera que minime. L’outil Phare vous
          permet de communiquer à votre guise, directement dans les espaces de vos collaborateurs: News, Actualités et
          bien plus..., et de renforcer votre marque employeur.'
      />
      <Box primary height='505px'>
        <BoxTitle style={{ marginBottom: 18 }}>
          <Text size='18px' weight='500' height='22px'>
            Créer une campagne
          </Text>
          <Button type='primary' style={{ width: '10%', borderRadius: '5px' }}>
            Enregistrer
          </Button>
        </BoxTitle>
        <Table
          columns={columns}
          dataSource={fixedData}
          pagination={false}
          scroll={{ y: 320 }}
          // title={() => 'Header'}
        />
      </Box>

      <Box primary>
        <Form
          form={form}
          style={{ display: 'flex' }}
          layout='vertical'
          name='form'
          onFinish={handleClick}>
          <FormBox>
            <CustomItem>
              <BoxTitle>
                <Text size='18px' weight='500' height='22px'>
                  Créer une campagne
                </Text>
                <Text
                  size='12px'
                  weight='400'
                  height='16px'
                  color='grey'
                  margin='22px 0 0 0'
                  width='40%'>
                  Sélectionnez des intervalles pour afficher votre campagne
                  pendant plusieurs jours/semaines, ou une seule date pour
                  afficher votre campagne pendant 24h
                </Text>
                <Button
                  type='primary'
                  style={{ width: '10%', borderRadius: '5px' }}
                  htmlType='submit'>
                  Enregistrer
                </Button>
              </BoxTitle>
            </CustomItem>

            <WrapContainer>
              <BoxItem style={{ width: 'calc(49% - 15px)' }}>
                <CustomItem
                  name='agenda'
                  label='Agenda'
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <RangePicker />
                </CustomItem>
                <CustomItem
                  name='title'
                  label='Titre'
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <Input />
                </CustomItem>
                <Text size='12px' weight='400' height='17px' color='grey'>
                  Le titre est indicatif, et ne sera visible que par les
                  administrateurs
                </Text>
                <CustomItem
                  name='link'
                  label='Lien pour l’actualité'
                  rules={[{ required: true, message: 'Test wrong message!' }]}
                  style={{ marginTop: 32 }}>
                  <Input
                    addonBefore='http://'
                    placeholder='simpleo.fr/location'
                  />
                </CustomItem>
              </BoxItem>

              <BoxItem style={{ width: 'calc(49% - 15px)' }}>
                <CustomItem
                  name='content'
                  label='Contenu de l’actualité'
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <TextArea
                    placeholder='Décrivez votre actualité'
                    autoSize={{ minRows: 11 }}
                  />
                </CustomItem>
              </BoxItem>
            </WrapContainer>
          </FormBox>
        </Form>
      </Box>
    </OutilContainer>
  );
};

export default Tool;
