import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import '../../App.css';
import {
  AlertOutlined,
  ApartmentOutlined,
  AppstoreAddOutlined,
  BookOutlined,
  ExceptionOutlined,
  FileExclamationOutlined,
  FundProjectionScreenOutlined,
  ImportOutlined,
  LayoutOutlined,
  MessageOutlined,
  SolutionOutlined,
  ThunderboltOutlined,
  UserOutlined
} from '@ant-design/icons';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import styled from 'styled-components';
import Text from '../Text';

const { SubMenu, Item } = Menu;

const MenuCustom = styled(Menu)`
  width: 14%;
  height: 100vh;
  position: fixed;
  overflow-y: auto;
`;

const LogoIcon = styled(Logo)`
  margin: 40px 0 50px 26px;
`;

const ExitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 9px 0;
  background-color: rgba(217, 217, 217, 1);
  cursor: pointer;
  position: absolute;
  bottom: 0;
`;

const ExitIcon = styled(ImportOutlined)`
  margin-right: 10px;
`;

const ItemCustom = styled(Menu.Item)`
  height: 18px !important;
`;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'];

const MainMenu = () => {

  const [openKeys, setOpenKeys] = React.useState<string[]>([]);

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey: string | undefined = keys.find(
      key => openKeys.indexOf(key) === -1
    );
    setOpenKeys(
      rootSubmenuKeys.indexOf(latestOpenKey as string) === -1
        ? keys
        : latestOpenKey
          ? [latestOpenKey]
          : []
    );
  };

  return (
    <MenuCustom
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      // defaultSelectedKeys={['1']}
      // defaultOpenKeys={['sub1']}
      mode='inline'>
      <LogoIcon />

      <Item key='1' icon={<LayoutOutlined />}>
        <NavLink to='/dashboard'>Tableau de bord</NavLink>
      </Item>
      <Item key='2' icon={<AlertOutlined />}>
        <NavLink to='/indicators'>Indicateurs</NavLink>
      </Item>
      <Item key='3' icon={<ThunderboltOutlined />}>
        <NavLink to='/impact-actions'>Actions à impact</NavLink>
      </Item>
      <Item key='4' icon={<FundProjectionScreenOutlined />}>
        <NavLink to='/impact-actions'>Actions à impact</NavLink>
      </Item>
      <SubMenu key='sub1' icon={<MessageOutlined />} title='Communication'>
        <ItemCustom key='5'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/comm-tool'>Communication Tool</NavLink>
          </Text>
        </ItemCustom>
        <ItemCustom key='6'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/comm-phare'>Outil Comm</NavLink>
          </Text>
        </ItemCustom>
        <ItemCustom key='7'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/comm-kit'>Kit de Comm</NavLink>
          </Text>
        </ItemCustom>
        <ItemCustom key='8'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/comm-report'>Rapport Impact RSE</NavLink>
          </Text>
        </ItemCustom>
        <ItemCustom key='9'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/comm-obligations'>Obligations</NavLink>
          </Text>
        </ItemCustom>
      </SubMenu>
      <SubMenu key='sub2' icon={<SolutionOutlined />} title='Employeur engagé'>
        <ItemCustom key='10'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/emp-permanence'>Permanence</NavLink>
          </Text>
        </ItemCustom>
        <ItemCustom key='11'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/emp-protection'>Protection</NavLink>
          </Text>
        </ItemCustom>
        <ItemCustom key='12'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/emp-marketplace'>Marketplace</NavLink>
          </Text>
        </ItemCustom>
        <ItemCustom key='13'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/emp-formation'>Formation</NavLink>
          </Text>
        </ItemCustom>
      </SubMenu>
      <Item key='14' icon={<ApartmentOutlined />}>
          <NavLink to='/partners'>Parrainage</NavLink>
      </Item>
      <Item key='15' icon={<BookOutlined />}>
        <NavLink to='/resources-rse'>Ressources RSE</NavLink>
      </Item>
      <SubMenu key='sub3' icon={<AppstoreAddOutlined />} title='Paramètres'>
        <ItemCustom key='16'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/parameters-administrators'>
              Administrateurs
            </NavLink>
          </Text>
        </ItemCustom>
        <ItemCustom key='17'>
          <Text size='12px' color='grey' height='18px'>
            <NavLink to='/parameters-employers'>
              Employés
            </NavLink>
          </Text>
        </ItemCustom>
      </SubMenu>
      <Item key='18' icon={<UserOutlined />}>
        <NavLink to='/profile'>
          Profil
        </NavLink>
      </Item>
      <Item key='19' icon={<FileExclamationOutlined />}>Сonfidentialité</Item>
      <Item className='last-item' key='20' icon={<ExceptionOutlined />}>
        <NavLink to='/privacy-policy'>
          Politique de confidentialité
        </NavLink>
      </Item>
      <ExitContainer>
        <Text size='14px' height='22px'>
          <ExitIcon />
          Se déconnecter
        </Text>
      </ExitContainer>
    </MenuCustom>
  );
};

export default MainMenu;
