import React from 'react';
import styled from 'styled-components';
import { ClockCircleOutlined, SafetyCertificateFilled } from '@ant-design/icons';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { Tabs } from 'antd';
import Box from '../../Components/Box';
import { ChartAnalysisOfRequests } from "../../Components/AnalyseDesSolicitations/ChartAnalyseDesSolicitations"
import Container from '../../Components/Container';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import StatBox from '../../Components/StatiscticBox';
import Text from '../../Components/Text';
import EmpImg6 from '../../assets/emp_img_6.svg';
import EmpImg7 from '../../assets/emp_img_7.svg';
import EmpImg8 from '../../assets/emp_img_8.svg';
import EmpImg9 from '../../assets/emp_img_9.svg';
import EmpImg10 from '../../assets/emp_img_10.svg';

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
  width: 32%;
`;

const EmpImage1 = styled(Img)`
  background-image: url(${EmpImg6});
`;
const EmpImage2 = styled(Img)`
  background-image: url(${EmpImg7});
`;
const EmpImage3 = styled(Img)`
  background-image: url(${EmpImg8});
`;
const EmpImage4 = styled(Img)`
  background-image: url(${EmpImg9});
`;
const EmpImage5 = styled(Img)`
  background-image: url(${EmpImg10});
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

const AnalyseBox = styled.div`
  .statBox {
    background: white;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    
    & > div {
      padding: 0;
      border: none;
      width: 100%;
      justify-content: center;
    }
  }
`;

const InfoBox = styled.div`
  padding: 20px;
  width: 66%;
  background: white;
  border-radius: 2px;
  position: relative;
`;

const RedirectBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 2px 0 0;
  height: 36px;
  width: 36px;
  background-color: #EDF6FF;
  transition: 0.3s;

  &:hover {
    background-color: #5398DF
  }
`;

const ArrowIcon = styled(Arrow)`
  fill: #246EB9;
  transition: 0.3s;
`;

const List = styled.div`
  background: #ebebeb;
  padding: 20px;
  display: flex;
  margin: 20px 0;
`;

const LItem = styled.div`
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 90px;
  width: 60%;
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

const Button190 = styled.div`
  button {
    width: 190px;
  }
`;

const Formation: React.FC = () => {
    const { TabPane } = Tabs;

    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Employeur engagé - Formation' />
                <PageBody>
                    <HintBox>
                        <SafetyCertificateFilled />
                        <Text margin='0 0 0 20px'>
                            Retrouvez l’essentiel pour prévenir et protéger vos salariés. Encore plus de façons d’impacter positivement la qualité de vie de vos collaborateurs.
                        </Text>
                    </HintBox>
                    <AnalyseBox>
                        <Box bgColor='transparent' margin='30px 0 0 0' jsContent='space-between' padding='0' flexDirection='row'>
                            <InfoBox>
                                <RedirectBtn>
                                        <ArrowIcon />
                                </RedirectBtn>
                                <ChartAnalysisOfRequests />
                              
                            </InfoBox>
                            <div className='statBox'>
                                <StatBox
                                    width='calc(33.33% - 20px)'
                                    icon={<ClockCircleOutlined style={{ fontSize: '30px', color: '#6B7885' }} />}
                                    title='Personnes formées'
                                    count='100'
                                    percentsColor='green'
                                    percents='2%'
                                />
                            </div>
                        </Box>
                    </AnalyseBox>
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
                                        Litiges avec des commerçant
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Litiges avec des assureurs
                                    </LItem>
                                </Row>
                            </List>
                            <Text margin='0 0 32px 0'>
                                Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                            </Text>
                            <Button190>
                                <Button type='primary'>
                                    Planifier un rendez-vous
                                </Button>
                            </Button190>
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
                                        Assistance psychologique
                                    </LItem>
                                </Row>
                            </List>
                            <Text margin='0 0 32px 0'>
                                Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                            </Text>
                            <Footer>
                                <Button190>
                                    <Button type='primary'>
                                        Planifier un rendez-vous
                                    </Button>
                                </Button190>
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
                                        Litige suite à une erreur de diagnostic
                                    </LItem>
                                </Row>
                            </List>
                            <Text margin='0 0 32px 0'>
                                Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                            </Text>
                            <Footer>
                                <Button190>
                                    <Button type='primary'>
                                        Planifier un rendez-vous
                                    </Button>
                                </Button190>
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
                                        Accompagnement
                                    </LItem>
                                </Row>
                            </List>
                            <Text margin='0 0 32px 0'>
                                Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                            </Text>
                            <Footer>
                                <Button190>
                                    <Button type='primary'>
                                        Planifier un rendez-vous
                                    </Button>
                                </Button190>
                                <span>
                                    25 vos collegues ont manifésté leur intérêt
                                </span>
                            </Footer>
                        </div>
                    </Box>
                    <Box primary padding='20px' margin='30px 0 0 0' flexDirection='row'>
                        <EmpImage5 />
                        <div>
                            <h3>
                                Assurance inclusive
                            </h3>
                            <List>
                                <Row>
                                    <LItem>
                                        <Dot/>
                                        Accompagnement
                                    </LItem>
                                    <LItem>
                                        <Dot/>
                                        Usurpation d’identité et e-réputatio
                                    </LItem>
                                </Row>
                            </List>
                            <Text margin='0 0 32px 0'>
                                Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                            </Text>
                            <Footer>
                                <Button190>
                                    <Button type='primary'>
                                        Planifier un rendez-vous
                                    </Button>
                                </Button190>
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

export default Formation;