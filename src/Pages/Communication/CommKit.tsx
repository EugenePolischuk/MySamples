import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Box from '../../Components/Box';
import Container from '../../Components/Container';
import Text from '../../Components/Text';
import { MailFilled } from '@ant-design/icons';

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
  
  p {
    margin: 0 0 0 10px;
  }
  span {
    font-size: 30px;
    color: #78D85B;
  }
`;

const MenuBox = styled.div`
  border-radius: 2px;
  background: white;
  padding: 20px;
  margin-top: 30px;
`;

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid #ebebeb;
  }
  
  h4 {
    font-weight: 600;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  
  & > button:first-child {
    margin-right: 20px;
  }
`;

const CommKit: React.FC = () => {
    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Kit de Comm'/>
                <PageBody>
                    <HintBox>
                        <MailFilled/>
                        <Text margin='0 0 0 20px'>
                            Utilisez le kit de communication complet de Phare pour faire part à vos collaborateurs de tous leurs nouveaux avantages !
                        </Text>
                    </HintBox>
                    <MenuBox>
                        <MenuDiv>
                            <h4>
                                Certificat phare
                            </h4>
                            <ButtonBox>
                                <Button>
                                    Aperçu
                                </Button>
                                <Button type='primary'>
                                    Télécharger
                                </Button>
                            </ButtonBox>
                        </MenuDiv>
                        <MenuDiv>
                            <h4>
                                Plaquette
                            </h4>
                            <ButtonBox>
                                <Button>
                                    Aperçu
                                </Button>
                                <Button type='primary'>
                                    Télécharger
                                </Button>
                            </ButtonBox>
                        </MenuDiv>
                        <MenuDiv>
                            <h4>
                                Logo
                            </h4>
                            <ButtonBox>
                                <Button>
                                    Aperçu
                                </Button>
                                <Button type='primary'>
                                    Télécharger
                                </Button>
                            </ButtonBox>
                        </MenuDiv>
                        <MenuDiv>
                            <h4>
                                Exemple de mail
                            </h4>
                            <ButtonBox>
                                <Button>
                                    Aperçu
                                </Button>
                                <Button type='primary'>
                                    Télécharger
                                </Button>
                            </ButtonBox>
                        </MenuDiv>
                        <MenuDiv>
                            <h4>
                                Affiche
                            </h4>
                            <ButtonBox>
                                <Button>
                                    Aperçu
                                </Button>
                                <Button type='primary'>
                                    Télécharger
                                </Button>
                            </ButtonBox>
                        </MenuDiv>
                    </MenuBox>
                </PageBody>
            </Box>
        </Container>
    );
};

export default CommKit;