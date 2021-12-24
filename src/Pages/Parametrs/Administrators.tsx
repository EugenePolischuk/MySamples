import React, { useState } from 'react';
import Header from '../../Components/Header';
import Box from '../../Components/Box';
import Text from '../../Components/Text';
import styled from 'styled-components';
import Button from '../../Components/Button';
import { NavLink } from 'react-router-dom';
import Modal from '../../Components/Modal';
import { Input, Select } from 'antd';
import { FormOutlined, UserOutlined } from '@ant-design/icons';
import { useToggle } from 'react-use';

const { Option } = Select;

type DataType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
  disabled: boolean;
}

const AdministratorsContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;

const BoxTitle = styled.div`
  display: flex;
  margin: 0 0 30px 0;
`;

const Row = styled.div`
  display: flex;
  margin: 17px 0;
`;

const GreyLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #f0ecec;
`;

const RowBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Administrators = () => {
  const [data, setData] = useState<DataType[]>([
      {
        firstName: 'Test1',
        lastName: 'Test1',
        email: 'test@example.com',
        phone: '123123',
        role: 'User',
        disabled: true
      },
      {
        firstName: 'Test2',
        lastName: 'Test2',
        email: 'test@example.com',
        phone: '123123',
        role: 'User',
        disabled: true
      },
      {
        firstName: 'Test3',
        lastName: 'Test3',
        email: 'test@example.com',
        phone: '123123',
        role: 'User',
        disabled: true
      },
      {
        firstName: 'Test4',
        lastName: 'Test4',
        email: 'test@example.com',
        phone: '123123',
        role: 'HR',
        disabled: true
      },
      {
        firstName: 'Test5',
        lastName: 'Test5',
        email: 'test@example.com',
        phone: '123123',
        role: 'Administrator',
        disabled: true
      }
    ]
  );

  const handleEdit = (index: number) => {
    const newState = [...data];
    newState[index].disabled = !data[index].disabled;
    setData(newState);
  };

  const handleChange = (value: string) => {
    console.log(value);
  };

  const [modalVisible, toggle] = useToggle(false);

  return (
    <AdministratorsContainer>
      <Modal
        width='50%'
        title='Suppression de l’email '
        visible={modalVisible}
        onCancel={toggle}
        okText='Valider'
        cancelText='Annuler'
      >
        Etes-vous sûr de vouloir supprimer cet email ?
      </Modal>
      <Header title='Paramètres - Administrateurs' />
      <Box primary width='100%'>
        <BoxTitle>
          <Text size='18px' weight='500' height='22px' width='50%'>Adresse du compte utilisateur</Text>
          <Text size='18px' weight='500' height='22px' width='50%'>Niveau de contrôle</Text>
        </BoxTitle>
        {data.map((item, index) => (
          <>
            <GreyLine />
            <Row key={index}>
              <RowBox>
                <Input style={{ width: '60%', marginRight: 20 }}
                       value={item.email}
                       disabled={item.disabled}
                       prefix={<UserOutlined />} />
                <NavLink to={{ pathname: '/parameters-add-administrator', state: { el: item } }}>
                  <Button type='ghost' onClick={() => handleEdit(index)}><FormOutlined
                    style={{ color: 'black' }} />
                  </Button>
                </NavLink>
              </RowBox>

              <RowBox>
                <Select defaultValue={item.role} style={{ width: '60%', marginRight: 20 }}
                        onChange={handleChange}>
                  <Option value='administrator'>Administrator</Option>
                  <Option value='HR'>HR</Option>
                  <Option value='User'>User</Option>
                </Select>
                <Button type='link' onClick={toggle}>Supprimer</Button>
              </RowBox>
            </Row>
          </>

        ))}
        <NavLink to='/parameters-add-administrator'>
          <Button type='primary'>Ajouter un administrateur</Button>
        </NavLink>
      </Box>
    </AdministratorsContainer>
  );
};

export default Administrators;