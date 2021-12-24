import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Button from '../Components/Button';
import Box from '../Components/Box';
import Container from '../Components/Container';
import Text from '../Components/Text';
import { ReactComponent as ResourceImg } from '../assets/resources.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  background: white;
`;

const Img = styled(ResourceImg)`
  width: 100%;
`;

const Content = styled.div`
  padding: 30px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Button140 = styled.div`
  button {
    width: 140px;
  }
`;

const Resources: React.FC = () => {
    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Ressources RSE'/>
                <PageBody>
                    <h3>
                        Livres Blancs
                    </h3>
                    <Row>
                        <Row>
                            <Img />
                            <Content>
                                <h3>
                                    Nom du document
                                </h3>
                                <Text margin='0 0 16px 0' width='90%'>
                                    Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                                </Text>
                                <Button140>
                                    <Button type='primary'>
                                        Télecharger
                                    </Button>
                                </Button140>
                            </Content>
                        </Row>
                        <Row>
                            <Img />
                            <Content>
                                <h3>
                                    Nom du document
                                </h3>
                                <Text margin='0 0 16px 0' width='90%'>
                                    Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                                </Text>
                                <Button140>
                                    <Button type='primary'>
                                        Télecharger
                                    </Button>
                                </Button140>
                            </Content>
                        </Row>
                    </Row>
                    <Row>
                        <Row>
                            <Img />
                            <Content>
                                <h3>
                                    Nom du document
                                </h3>
                                <Text margin='0 0 16px 0' width='90%'>
                                    Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                                </Text>
                                <Button140>
                                    <Button type='primary'>
                                        Télecharger
                                    </Button>
                                </Button140>
                            </Content>
                        </Row>
                        <Row>
                            <Img />
                            <Content>
                                <h3>
                                    Nom du document
                                </h3>
                                <Text margin='0 0 16px 0' width='90%'>
                                    Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                                </Text>
                                <Button140>
                                    <Button type='primary'>
                                        Télecharger
                                    </Button>
                                </Button140>
                            </Content>
                        </Row>
                    </Row>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Resources;