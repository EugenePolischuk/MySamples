import React from 'react';
import styled from 'styled-components';
import Text from '../../Components/Text';
import Container from '../../Components/Container';
import Button from '../../Components/Button';
import { ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Select } from 'antd';
import CustomItem from '../../Components/CustomFormItem';

const { Option } = Select;

const AddAPartnerContainer = styled.div`
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 25px;
  background-color: white;
  width: 100%;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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

const AccountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 26px 0;
`;

const AccountLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background-color: #f5f5f5;
`;

const InfoInputs = styled.div`
  display: flex;
  width: 100%;
`;

const LeftInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const AddAPartner = () => {
  const [form] = Form.useForm();

  const handleClick = (value: any) => {
    console.log(value);
  };

  return (
    <Container>
      <AddAPartnerContainer>
        <Header>
          <HeaderTitle>
            <Button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8
              }}>
              <ArrowLeftOutlined style={{ color: '#5398DF', fontSize: 16 }} />
            </Button>
            <Text height='24px' size='16px' weight='700'>
              Ajouter un partenaire
            </Text>
          </HeaderTitle>
          <Button htmlType='submit' type='primary'>
            Sauvegarder
          </Button>
        </Header>
        <GreyLine />
        <Box>
          <Text size='24px' weight='500' height='28px'>
            Infos prestataire
          </Text>
          <AccountBox>
            <AccountLogo>
              <UserOutlined style={{ color: '#6B7885', fontSize: 18 }} />
            </AccountLogo>
            <Button type='link'>Changer le logo</Button>
          </AccountBox>
          <Form
            form={form}
            style={{ display: 'flex' }}
            layout='vertical'
            name='form'
            onFinish={handleClick}>
            <InfoInputs>
              <LeftInputs>
                <CustomItem
                  style={{ width: '30%' }}
                  name='name'
                  label='Nom du prestataire'
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <Input
                    placeholder='Nom de la société'
                    prefix={<UserOutlined />}
                  />
                </CustomItem>
                <CustomItem
                  style={{ width: '100%' }}
                  name='activity'
                  label='Domaine d’activité'
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <Select
                      defaultValue='Menu déroulant'
                      style={{ width: '30%', marginRight: 20 }}>
                      <Option value='Menu déroulant1'>Menu déroulant1</Option>
                      <Option value='Menu déroulant2'>Menu déroulant2</Option>
                      <Option value='Menu déroulant3'>Menu déroulant3</Option>
                    </Select>
                    <Select
                      mode='multiple'
                      allowClear
                      style={{ width: '65%' }}
                      placeholder='Please select'
                      defaultValue={['a10', 'c12']}>
                      <Option value='Menu déroulant1'>Menu déroulant1</Option>
                      <Option value='Menu déroulant2'>Menu déroulant2</Option>
                      <Option value='Menu déroulant3'>Menu déroulant3</Option>
                    </Select>
                  </div>
                </CustomItem>
                <CustomItem
                  style={{ width: '30%' }}
                  name='region'
                  label='Région'
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <Select defaultValue='Région'>
                    <Option value='Région1'>Région1</Option>
                    <Option value='Région2'>Région2</Option>
                    <Option value='Région3'>Région3</Option>
                  </Select>
                </CustomItem>
              </LeftInputs>
            </InfoInputs>
          </Form>
          <GreyLine />

          <CustomItem
            style={{ width: '30%' }}
            name='alalala'
            label='lalal'
            rules={[{ required: true, message: 'Test wrong message!' }]}>
            <Select defaultValue='Région'>
              <Option value='Région1'>Région1</Option>
              <Option value='Région2'>Région2</Option>
              <Option value='Région3'>Région3</Option>
            </Select>
          </CustomItem>
        </Box>
      </AddAPartnerContainer>
    </Container>
  );
};

export default AddAPartner;
