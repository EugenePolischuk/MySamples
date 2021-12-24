import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import WrapContainer from '../Components/WrapContainer';
import Box from '../Components/Box';
import Text from '../Components/Text';
import StatBox from '../Components/StatiscticBox';
import { EuroOutlined, FormOutlined, TeamOutlined, WalletOutlined } from '@ant-design/icons';
import { ReactComponent as AccLogo } from '../assets/logo_acc.svg';
import Button from '../Components/Button';
import { Input } from 'antd';

const ProfileContainer = styled.div`
  width: 100%;
  // todo delete 100vh after payment box was added
  height: 100vh;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;

const AccountLogo = styled(AccLogo)`
  margin-right: 25px;
`;

const AccountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountName = styled.div`
  display: flex;
  flex-direction: column;
`;

const GreyLine = styled.div`
  width: calc(100% + 50px);
  height: 2px;
  background-color: rgba(236, 236, 236, 1);
  margin: 25px -25px 34px -25px;
`;

const CardBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = () => {

  const [phone, setPhone] = useState(true);
  return (
    <ProfileContainer>
      <Header title='Profil' />
      <WrapContainer>
        <Box primary width='calc(48% - 15px)' margin='30px 0 0 0'>
          <AccountBox>
            <AccountLogo />
            <AccountName>
              <Text size='18px' weight='500' height='22px'>Alexandre Pavlov</Text>
              <Text size='14px' weight='400' height='17px'>SAS Cycover</Text>
            </AccountName>
            <Button>Changer de Logo</Button>
          </AccountBox>
          <GreyLine />
          <Text size='18px' weight='400' height='22px'>Secteur : Assurance</Text>
          <Text size='18px' weight='400' height='22px' margin='30px 0 0 0'>SIRET : 3535 3345 4332 45</Text>
          <Text size='18px' weight='400' height='22px' margin='30px 0 0 0'>Code NAF : 3535GDS5332NFD</Text>
        </Box>
        <Box primary isWrap width='calc(21% - 15px)' margin='30px 0 0 0'>
          <Text size='18px' weight='500' height='22px'>Ma convention</Text>
          <CardBox>
            FILENAME
            <Button>Télécharger</Button>
          </CardBox>

        </Box>
        <Box primary width='calc(30% - 20px)'>
          <Text size='18px' weight='500' height='22px'>Informations contact</Text>
          <CardBox>
            <InfoBox>
              <Text size='16x' weight='400' height='20px' margin='30px 0 0 0'>Prénom : Marc</Text>
              <Text size='16x' weight='400' height='20px'>Nom : Jean</Text>
              <Box isWrap margin='0' padding='0' alignItems='center' flexDirection='row'>
                <Text size='16x' weight='400' height='20px'> Téléphone: </Text>
                <Input style={{ width: '60%', marginRight: 20, border: 'none' }}
                       value='0102323232'
                       disabled={phone} />
                <Button type='ghost' onClick={() => setPhone(!phone)}>
                  <FormOutlined style={{ color: 'black' }} />
                </Button>
              </Box>
              <Text size='16x' weight='400' height='20px'>Email : example@gmail.com</Text>
            </InfoBox>
            <Button>Enregistrer</Button>
          </CardBox>
        </Box>
      </WrapContainer>
      <Box primary>
        <Text size='18px' weight='500' height='22px'>Démographie des collaborateurs</Text>
        <WrapContainer margin='30px 0 0 0'>
          <StatBox
            width='calc(33.33% - 20px)'
            icon={<EuroOutlined style={{ fontSize: '30px', color: '#6B7885' }} />}
            title='Montant total des économies'
            count='75 348 €'
            percentsColor='green'
            percents='2%'
          />
          <StatBox
            width='calc(33.33% - 20px)'
            icon={<WalletOutlined style={{ fontSize: '30px', color: '#6B7885' }} />}
            title='Montant des économies par salarié'
            count='322 €'
            percentsColor='red'
            percents='6%'
          />
          <StatBox
            width='calc(33.33% - 20px)'
            icon={<TeamOutlined style={{ fontSize: '30px', color: '#6B7885' }} />}
            title='Personnes accompagnées'
            count='234'
            percentsColor='green'
            percents='2%'
          />
        </WrapContainer>
      </Box>
      <Box primary>
        <Text size='18px' weight='500' height='22px'>Informations de paiement</Text>
      </Box>
    </ProfileContainer>
  );
};

export default Profile;