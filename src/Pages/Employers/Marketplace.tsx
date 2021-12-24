import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import {SafetyCertificateFilled} from '@ant-design/icons';
import { Tabs } from 'antd';
import Box from '../../Components/Box';
import Container from '../../Components/Container';
import Text from '../../Components/Text';
import EmpImg1 from '../../assets/emp_img_1.svg';
import EmpImg2 from '../../assets/emp_img_2.svg';
import EmpImg3 from '../../assets/emp_img_3.svg';
import EmpImg4 from '../../assets/emp_img_4.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
  
  .ant-tabs {
    margin-top: 30px;
    background: white;
    border-radius: 2px;
    
    .ant-tabs-nav {
        margin: 0 !important;
    
        .ant-tabs-nav-list {
          width: 70%;
          justify-content: space-around;
    
          .ant-tabs-tab {
            margin: 10px !important;
            padding: 10px;
          }
          .ant-tabs-tab-active {
            border: 1px solid #1890ff;
            border-radius: 2px;
          }
          .ant-tabs-ink-bar {
            width: 0 !important;
          }
        }
      }
  }
`;

const Img = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 35px;
  height: 245px;
  width: 22%;
`;

const EmpImage1 = styled(Img)`
  width: 32%;
  background-image: url(${EmpImg1});
`;
const EmpImage2 = styled(Img)`
  background-image: url(${EmpImg2});
`;
const EmpImage3 = styled(Img)`
  background-image: url(${EmpImg3});
`;
const EmpImage4 = styled(Img)`
  background-image: url(${EmpImg4});
`;

const HintBox = styled.div`
  border-radius: 2px;
  background-color: #e4ffef;
  padding: 20px;
  display: flex;
  align-items: center;

  span {
    font-size: 30px;
    color: #78D85B;
  }
`;

const List = styled.div`
  background: #ebebeb;
  padding: 20px;
  display: flex;
  margin: 20px 0;

`;

const Row = styled.div`
  margin-right: 90px;
`;

const LItem = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  background-color: #6B7885;
  margin-right: 10px;
  height: 7px;
  width: 7px;
  border-radius: 50%;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 20px;
  }
  span:not(button span) {
    opacity: .5;
    width: 150px;
  }
`;

const Button100 = styled.div`
  button {
    width: 100px; 
  }
`;

const Marketplace: React.FC = () => {
    const { TabPane } = Tabs;

    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Employeur engagé - Market place'/>
                <PageBody>
                    <HintBox>
                        <SafetyCertificateFilled />
                        <Text margin='0 0 0 20px'>
                            Retrouvez l’essentiel pour prévenir et protéger vos salariés. Encore plus de façons d’impacter positivement la qualité de vie de vos collaborateurs.
                        </Text>
                    </HintBox>
                    <Tabs defaultActiveKey='1' centered>
                        <TabPane tab='Santé' key='1'>

                        </TabPane>
                        <TabPane tab='Famille' key='2'>

                        </TabPane>
                        <TabPane tab='Logement' key='3'>

                        </TabPane>
                        <TabPane tab='Aléas de la vie' key='4'>

                        </TabPane>
                        <TabPane tab='Ecologie' key='5'>

                        </TabPane>
                    </Tabs>
                    <Box primary padding='20px' margin='30px 0 0 0' flexDirection='row'>
                        <EmpImage1 />
                        <div>
                            <h3>
                                Responsabilite civile du CSE
                            </h3>
                            <List>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                            </List>
                            <Text margin='0 0 10px 0'>
                                Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                            </Text>
                            <Button100>
                                <Button type='primary'>
                                    Découvrir
                                </Button>
                            </Button100>
                        </div>
                    </Box>
                    <Box primary padding='20px' margin='30px 0 0 0' flexDirection='row'>
                        <EmpImage2 />
                        <div>
                            <h3>
                                Collective santé
                            </h3>
                            <List>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                            </List>
                            <Text margin='0 0 32px 0'>
                                Protégez vos collaborateurs et offrez leur davantage de sérénité avec le meilleur des couvertures santé.
                            </Text>
                            <Footer>
                                <Button100>
                                    <Button type='primary'>
                                        Découvrir
                                    </Button>
                                </Button100>
                                <span>
                                    25 vos collegues ont manifésté leur intérêt
                                </span>
                            </Footer>
                        </div>
                    </Box>
                    <Box primary padding='20px' margin='30px 0 0 0' flexDirection='row'>
                        <EmpImage3 />
                        <div>
                            <h3>
                                Collective Cyber
                            </h3>
                            <List>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                            </List>
                            <Text margin='0 0 32px 0'>
                                Assurance inclusive
                            </Text>
                            <Footer>
                                <Button100>
                                    <Button type='primary'>
                                        Découvrir
                                    </Button>
                                </Button100>
                                <span>
                                    25 vos collegues ont manifésté leur intérêt
                                </span>
                            </Footer>
                        </div>
                    </Box>
                    <Box primary padding='20px' margin='30px 0 0 0' flexDirection='row'>
                        <EmpImage4 />
                        <div>
                            <h3>
                                Assurance inclusive
                            </h3>
                            <List>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Campagne 243243...
                                    </LItem>
                                </Row>
                            </List>
                            <Text margin='0 0 32px 0'>
                                Assurance pr protéger collaborateurs plus fragiles
                            </Text>
                            <Footer>
                                <Button100>
                                    <Button type='primary'>
                                        Découvrir
                                    </Button>
                                </Button100>
                                <span>
                                    25 vos collegues ont manifésté leur intérêt
                                </span>
                            </Footer>
                        </div>
                    </Box>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Marketplace;