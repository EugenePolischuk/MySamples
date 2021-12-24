import Container from '../../Components/Container';
import Text from '../../Components/Text';
import styled from 'styled-components';
import '../../App.css';
import { Button } from 'antd';
import { LeftSquareOutlined } from '@ant-design/icons';
import RetourComponent from './../../Components/Retour';

const RetourContainer = styled.div`
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

export const Retour = () => {
  return (
    <Container>
      <RetourContainer>
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
              width='100px'
              justifyContent='space-between'
              alignItems='center'>
              <LeftSquareOutlined
                style={{
                  fontSize: '30px',
                  color: '#5398DF'
                }}
              />
              <Text size='16px' weight='700'>
                Retour
              </Text>
            </Box>
            <ButtonBox type='primary'>Sauvegarder</ButtonBox>
          </Box>
        </Header>
        <GreyLine />
        <RetourComponent status={true} length={1} idx={0} retour={true} />
      </RetourContainer>
    </Container>
  );
};
