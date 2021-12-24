import Container from '../../Components/Container';
import Text from '../../Components/Text';
import styled from 'styled-components';
import '../../App.css';
import { Button, Input } from 'antd';
import { LeftSquareOutlined, UserOutlined } from '@ant-design/icons';
import Retour from './../../Components/Retour';

const FicheContainer = styled.div`
  width: 100%;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 25px;
  background-color: white;
  width: 100%;
`;

interface BoxProps {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  width?: string;
  height?: string;
  color?: string;
  bRadius?: string;
}
const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'normal'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  padding: ${props => props.padding || '40px 58px'};
  background-color: ${props => props.color || 'white'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.bRadius || 0};
`;
const BoxInput = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
`;
interface InputProps {
  width?: string;
  height?: string;
}
const InputUser = styled(Input)<InputProps>`
  width: ${props => props.width || '30%'};
  height: ${props => props.height || '40px'};
  margin: 1.6%;
`;

interface LineProps {
  marginBtn?: string;
  size?: string;
}
const LineSmall = styled.div<LineProps>`
  width: ${({ size }) => size || '100%'};
  margin: 0 0 ${({ marginBtn }) => marginBtn || '30px'} 0;
  height: 0px;

  opacity: 0.1;
  border: 1px solid #000000;
`;

interface CustomLi {
  margin: string;
}
const CustomLi = styled.li<CustomLi>`
  list-style-type: none;
  &:not(last-child) {
    margin-bottom: ${props => props.margin};
  }
`;

const ButtonBox = styled(Button)`
  margin-left: 20px;
  width: 102px;
  height: 32px;
  background: #5398df;
  border-radius: 2px;
`;

const GreyLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(236, 236, 236, 1);
  padding: 0 25px;
`;

export const FicheClient = () => {
  const data = [
    { id: '1', status: true },
    { id: '2', status: false }
  ];

  return (
    <Container>
      <FicheContainer>
        <Header>
          <Box
            height='50px'
            padding='0'
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'>
            <Box
              padding='0'
              flexDirection='row'
              width='150px'
              justifyContent='space-between'
              alignItems='center'>
              <LeftSquareOutlined
                style={{
                  fontSize: '30px',
                  color: '#5398DF'
                }}
              />
              <Text size='16px' weight='700'>
                Fiche Client
              </Text>
            </Box>
            <ButtonBox type='primary'>Transmettre</ButtonBox>
          </Box>
        </Header>
        <GreyLine />

        <Box padding='40px 58px 0 58px'>
          <Text height='36px' size='24px' weight='500'>
            Client : Prénom Nom
          </Text>
          <Text height='50px' size='16px' weight='normal'>
            #ID 21223
          </Text>
          <BoxInput>
            <InputUser
              size='large'
              placeholder='large size'
              value='Nom'
              prefix={<UserOutlined />}
            />
            <InputUser
              size='large'
              placeholder='large size'
              value='Prénom'
              prefix={<UserOutlined />}
            />
            <InputUser
              size='large'
              placeholder='number'
              value='07 81 84 34 12'
            />
            <InputUser size='large' value='exemple@entreprise.com' />
            <InputUser size='large' placeholder='Email secondaire' />
          </BoxInput>
          <LineSmall />
          <Box
            padding='0'
            justifyContent='space-between'
            flexDirection='row'
            alignItems='center'>
            <Text height='36px' size='18px' weight='normal'>
              Demandes
            </Text>
            <Text height='50px' size='14px' weight='normal' color='#6B7885'>
              Nombre total de demandes : 5
            </Text>
          </Box>
        </Box>
        {data.map((el, idx) => {
          return (
            <Retour
              key={el.id}
              idx={+idx}
              length={+data.length}
              status={el.status}
            />
          );
        })}
      </FicheContainer>
    </Container>
  );
};
