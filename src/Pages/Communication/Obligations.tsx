import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Box from '../../Components/Box';
import Container from '../../Components/Container';
import Text from '../../Components/Text';
import Button from "../../Components/Button";
import {
    CloseOutlined,
    EditOutlined,
    SafetyCertificateFilled,
    MedicineBoxOutlined,
    TeamOutlined,
    ClockCircleOutlined,
    AuditOutlined,
    CoffeeOutlined
} from '@ant-design/icons';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
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

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  
  button {
    color: black;
    height: fit-content;
    background-color: #f5f5f5;
    border: none;
    width: 35px;
    padding: 4px 10px;
  }
`;

const PropIcon = styled.div`
  span {
    color: #90c6fd; 
    font-size: 17px
  }
`;

const RegisterBtn = styled.div`
  width: 30%;
  
  button {
    width: 100%;
  }
`;

const Obligations: React.FC = () => {
    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Communication - Obligations '/>
                <PageBody>
                    <HintBox>
                        <SafetyCertificateFilled />
                        <Text margin='0 0 0 20px'>
                            Retrouvez l’essentiel pour prévenir et protéger vos salariés. Encore plus de façons d’impacter positivement la qualité de vie de vos collaborateurs.
                        </Text>
                    </HintBox>
                    <Box flexDirection='row' margin='0' padding='0' jsContent='space-between'>
                        <Box isWrap width='49%' margin='0' padding='20px' bgColor='white'>
                            <h3>
                                Eléments actifs
                            </h3>
                            <Box isWrap margin='0' padding='10px'>
                                <Box isWrap margin='0' padding='0' jsContent='space-between' flexDirection='row'>
                                    <Box margin='0' padding='0'>
                                        <Box margin='0 0 10px 0' padding='0' flexDirection='row' alignItems='center'>
                                            <PropIcon>
                                                <MedicineBoxOutlined />
                                            </PropIcon>
                                            <Text margin='0 0 0 10px' weight='500'>Médecine du Travail</Text>
                                            <Box isWrap width='50px' margin='0 0 0 10px' padding='0' border='1px solid #ffd591' borderRadius='2px' bgColor='#fff7e6'>
                                                <Text color='#fa8c16' align='center'>Défaut</Text>
                                            </Box>
                                        </Box>
                                        <Text margin='0 0 0 28px'>Détail : text</Text>
                                        <Text margin='0 0 0 28px'>Disponible 5j/5</Text>
                                        <Text margin='0 0 0 28px'>01 xx xx xx xx</Text>
                                    </Box>
                                    <ButtonBox>
                                        <Button>
                                            <EditOutlined />
                                        </Button>
                                        <Button>
                                            <CloseOutlined />
                                        </Button>
                                    </ButtonBox>
                                </Box>
                                <Box isWrap margin='10px 0' padding='0' jsContent='space-between' flexDirection='row'>
                                    <Box margin='0' padding='0'>
                                        <Box margin='0 0 10px 0' padding='0' flexDirection='row' alignItems='center'>
                                            <PropIcon>
                                                <TeamOutlined />
                                            </PropIcon>
                                            <Text margin='0 0 0 10px' weight='500'>Médecine du Travail</Text>
                                        </Box>
                                    </Box>
                                    <ButtonBox>
                                        <Button>
                                            <EditOutlined />
                                        </Button>
                                        <Button>
                                            <CloseOutlined />
                                        </Button>
                                    </ButtonBox>
                                </Box>
                                <Box isWrap margin='0' padding='0' jsContent='space-between' flexDirection='row'>
                                    <Box margin='0' padding='0'>
                                        <Box margin='0 0 10px 0' padding='0' flexDirection='row' alignItems='center'>
                                            <PropIcon>
                                                <ClockCircleOutlined />
                                            </PropIcon>
                                            <Text margin='0 0 0 10px' weight='500'>Horaires collectifs de travail</Text>
                                        </Box>
                                        <Text margin='0 0 0 28px'>Lun-Ven : 10:00 – 19:00</Text>
                                        <Text margin='0 0 0 28px'>Sam - Dim : repos</Text>
                                    </Box>
                                    <ButtonBox>
                                        <Button>
                                            <EditOutlined />
                                        </Button>
                                        <Button>
                                            <CloseOutlined />
                                        </Button>
                                    </ButtonBox>
                                </Box>
                            </Box>
                        </Box>
                        <Box isWrap width='49%' margin='0' padding='20px' bgColor='white'>
                            <h3>
                                Suggestions d’éléments
                            </h3>
                            <Box isWrap margin='0' padding='10px'>
                                <Box isWrap margin='20px 0' padding='0' jsContent='space-between' flexDirection='row'>
                                    <Box margin='0' padding='0'>
                                        <Box margin='0 0 10px 0' padding='0' flexDirection='row' alignItems='center'>
                                            <PropIcon>
                                                <AuditOutlined />
                                            </PropIcon>
                                            <Text margin='0 0 0 10px' weight='500'>CSE</Text>
                                        </Box>
                                    </Box>
                                    <ButtonBox>
                                        <Button>
                                            <EditOutlined />
                                        </Button>
                                    </ButtonBox>
                                </Box>
                                <Box isWrap margin='0 0 20px 0' padding='0' jsContent='space-between' flexDirection='row'>
                                    <Box margin='0' padding='0'>
                                        <Box margin='0 0 10px 0' padding='0' flexDirection='row' alignItems='center'>
                                            <PropIcon>
                                                <CoffeeOutlined />
                                            </PropIcon>
                                            <Text margin='0 0 0 10px' weight='500'>Congés payés</Text>
                                        </Box>
                                    </Box>
                                    <ButtonBox>
                                        <Button>
                                            <EditOutlined />
                                        </Button>
                                    </ButtonBox>
                                </Box>
                                <RegisterBtn>
                                    <Button type='primary'>
                                        Enregistrer
                                    </Button>
                                </RegisterBtn>
                            </Box>
                        </Box>
                    </Box>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Obligations;