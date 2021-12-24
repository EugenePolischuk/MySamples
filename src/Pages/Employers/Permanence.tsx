import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Box from '../../Components/Box';
import Container from '../../Components/Container';
import Text from '../../Components/Text';
import { SafetyCertificateFilled } from '@ant-design/icons';
import { ReactComponent as EmpImg5 } from '../../assets/emp_img_5.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Img = styled(EmpImg5)`
  margin-right: 35px;
  height: 245px;
  width: 22%;
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

const LItem = styled.div`
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  margin-right: 90px;
`;

const Dot = styled.div`
  background-color: #6B7885;
  margin-right: 10px;
  height: 7px;
  width: 7px;
  border-radius: 50%;
`;

const Permanence: React.FC = () => {
    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Employeur engagé - Permanence'/>
                <PageBody>
                    <HintBox>
                        <SafetyCertificateFilled />
                        <Text margin='0 0 0 20px'>
                            Retrouvez l’essentiel pour prévenir et protéger vos salariés. Encore plus de façons d’impacter positivement la qualité de vie de vos collaborateurs et d’affirmer votre marque employeur.
                        </Text>
                    </HintBox>
                    <Box primary padding='20px' margin='30px 0 0 0' flexDirection='row'>
                        <Img />
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
                                Planifiez des permanences sur site avec des profesionnels pour accompagner en face à face vos collaborateurs dans leurs projets de vies
                            </Text>
                            <Button type='primary' style={{width: '100px'}}>
                                Découvrir
                            </Button>
                        </div>
                    </Box>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Permanence;