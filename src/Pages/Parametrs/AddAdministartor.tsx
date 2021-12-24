import React from 'react';
import styled from 'styled-components';
import CustomItem from '../../Components/CustomFormItem';
import { Button, Form, Input, Select } from 'antd';
import Header from '../../Components/Header';
import Box from '../../Components/Box';
import WrapContainer from '../../Components/WrapContainer';
import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import Text from '../../Components/Text';

const { Option } = Select;


const AddAdministratorContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddAdministartor = (props: any) => {

  const data = props.location.state ? props.location.state.el : undefined
  const [form] = Form.useForm();

  const handleClick = (value: any) => {
    console.log(value);
  };

  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <AddAdministratorContainer>
      <Form
        form={form}
        style={{ display: 'flex' }}
        layout='horizontal'
        name='form'
        onFinish={handleClick}
      >
        <FormBox>
          <CustomItem>
            <Header title='Paramètres - Administrateurs'>
              <Button type='primary'
                      style={{ width: '10%', borderRadius: '5px' }}
                      htmlType='submit'>
                Enregistrer
              </Button>
            </Header>
          </CustomItem>

          <Box primary>
            <Text size='18px' weight='500' height='22px' margin='0 0 30px 0'>Nouvel administrateur</Text>

            <WrapContainer>
              <BoxItem style={{ width: 'calc(24% - 15px)' }}>
                <CustomItem
                  name='first_name'
                  label=''
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <Input defaultValue={data ? data.firstName : ''} placeholder='Entrez le prénom'
                         style={{ width: '100%' }}
                         prefix={<UserOutlined />} />
                </CustomItem>
              </BoxItem>
              <BoxItem style={{ width: 'calc(24% - 15px)' }}>

                <CustomItem
                  name='last_name'
                  label=''
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <Input defaultValue={data ? data.lastName : ''} placeholder='Entrez le nom' style={{ width: '100%' }}
                         prefix={<UserOutlined />} />
                </CustomItem>
              </BoxItem>
              <BoxItem style={{ width: 'calc(24% - 15px)' }}>

                <CustomItem
                  name='email'
                  label=''
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <Input defaultValue={data ? data.email : ''} placeholder='Votre Email' style={{ width: '100%' }}
                         prefix={<MailOutlined />} />
                </CustomItem>
              </BoxItem>

              <BoxItem style={{ width: 'calc(24% - 15px)' }}>
                <CustomItem
                  name='phone'
                  label=''
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <Input defaultValue={data ? data.phone : ''} placeholder='+33 (__)-___-__-__'
                         style={{ width: '100%' }}
                         prefix={<PhoneOutlined />} />
                </CustomItem>
              </BoxItem>

              <BoxItem style={{ width: 'calc(24% - 15px)' }}>
                <CustomItem
                  name='role'
                  label=''
                  rules={[{ required: true, message: 'Test wrong message!' }]}>
                  <Select defaultValue={data ? data.role : 'administrator'} style={{ width: '100%', marginRight: 20 }}
                          onChange={handleChange}>
                    <Option value='administrator'>Administrator</Option>
                    <Option value='HR'>HR</Option>
                    <Option value='User'>User</Option>
                  </Select>
                </CustomItem>
              </BoxItem>
            </WrapContainer>
          </Box>
        </FormBox>
      </Form>
    </AddAdministratorContainer>
  );

};

export default AddAdministartor;