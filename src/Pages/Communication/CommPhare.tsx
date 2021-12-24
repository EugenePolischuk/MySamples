import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Box from '../../Components/Box';
import Container from '../../Components/Container';
import Text from '../../Components/Text';
import {WarningFilled, QuestionCircleOutlined} from '@ant-design/icons';
import { ReactComponent as MsgImg } from '../../assets/msg.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const WarnBox = styled.div`
  border-radius: 2px;
  background-color: #fff3d5;
  padding: 20px;
  display: flex;
  align-items: center;
  
  p {
    margin: 0 0 0 15px;
  }
  span {
    font-size: 30px;
    color: #FEBD38;
  }
`;

const MainBox = styled.div`
  h4 {
    font-weight: 500;
  }
`;

const ListDiv = styled.div`
  width: 60%;
`;

const ImgBox = styled(MsgImg)`
  width: 40%;
  height: 500px;
  border-radius: 6px;
`;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ebebeb;
  padding: 20px;

  &:last-child {
    border-bottom: 1px solid #ebebeb;
  }
  div:nth-child(2) {
    opacity: .5;
  }
`;

const ListDot = styled.div`
  background-color: #6B7885;
  margin-right: 10px;
  height: 5px;
  width: 5px;
  border-radius: 50%;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;

const CommPhare: React.FC = () => {
    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='CommPhare - Phare'/>
                <PageBody>
                    <WarnBox>
                        <WarningFilled />
                        <Text margin='0 0 0 20px'>
                            Attention, vous n’avez pas uploadé votre démographie. Veuillez le faire afin de béneficier de l’outil de communication Phare.  Passer à l’action
                        </Text>
                    </WarnBox>
                    <MainBox>
                        <Box primary padding='15px' margin='30px 0 0 0' flexDirection='row'>
                            <ListDiv>
                                <h4>
                                    Details de la communication
                                </h4>
                                <Text>
                                    Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés. Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers.
                                </Text>
                                <Text margin='20px 0'>
                                    Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                                </Text>
                                <ListBox style={{marginTop: '40px'}} className='first'>
                                    <ListItem>
                                        <ListDot/>
                                        CommPhare – Hiver <QuestionCircleOutlined />
                                    </ListItem>
                                    <div>
                                        05/02/2021
                                    </div>
                                </ListBox>
                                <ListBox>
                                    <ListItem>
                                        <ListDot/>
                                        CommPhare – Printemps <QuestionCircleOutlined />
                                    </ListItem>
                                    <div>
                                        02/02/2021
                                    </div>
                                </ListBox>
                                <ListBox>
                                    <ListItem>
                                        <ListDot/>
                                        CommPhare – Été <QuestionCircleOutlined />
                                    </ListItem>
                                    <div>
                                        11/01/2021
                                    </div>
                                </ListBox>
                                <ListBox>
                                    <ListItem>
                                        <ListDot/>
                                        CommPhare – Automne <QuestionCircleOutlined />
                                    </ListItem>
                                    <div>
                                        22/12/2021
                                    </div>
                                </ListBox>
                            </ListDiv>
                            <ImgBox/>
                        </Box>
                    </MainBox>
                </PageBody>
            </Box>
        </Container>
    );
};

export default CommPhare;