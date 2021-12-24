import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Box from '../../Components/Box';
import Container from '../../Components/Container';
import { Input, Collapse, Checkbox } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

const PageBody = styled.div`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  padding: 20px;
  background: white;
  
  .ant-form {
    display: flex;
    width: 100%;
    
    .ant-row {
      margin-right: 50px;
      margin-bottom: 0;
    }
  }
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  
  b {
    margin-right: 20px;
  }
  div {
    text-align: center;
  }
  &.success div {
    color: #52c41a;
  }
`;

const Label = styled.div`
  opacity: .5;
  margin-right: 20px;
`;

const Value = styled.div`
  font-weight: 500;
`;

const onSearch = (value:string) => console.log(value);

const Flagship: React.FC = () => {
    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Feedback Phare'/>
                <PageBody>
                    <Input.Search size='large' placeholder='Search' style={{margin: '20px 0'}} onSearch={onSearch} />
                    <Collapse
                        defaultActiveKey={['1']}
                        expandIconPosition='right'
                    >
                        <Collapse.Panel header={
                            <PanelHeader className='success'>
                                <b>Feedback sue le ticket #193</b>
                                <Box isWrap width='52px' height='25px' margin='0' padding='0' border='1px solid #b7eb8f'>Ouvert</Box>
                            </PanelHeader>
                        } key="1">
                            <Box flexDirection='row' padding='0' margin='0' jsContent='space-between'>
                                <Box isWrap padding='0' margin='0' flexDirection='row' jsContent='space-between'>
                                    <Box isWrap width='30%' padding='0' margin='0'>
                                        <Label>
                                            Date:
                                            <br/>
                                            Nom:
                                            <br/>
                                            Prénom :
                                        </Label>
                                    </Box>
                                    <Box isWrap padding='0' margin='0'>
                                        <Value>
                                            12/03/2021
                                            <br/>
                                            Aymar
                                            <br/>
                                            Dupont
                                            <br/>
                                        </Value>
                                    </Box>
                                </Box>
                                <Box isWrap padding='0' margin='0' flexDirection='row' jsContent='space-between'>
                                    <Box isWrap width='40%' padding='0' margin='0'>
                                        <Label>
                                            Email:
                                            <br/>
                                            Catégorie :
                                            <br/>
                                            Préstataire :
                                        </Label>
                                    </Box>
                                    <Box isWrap padding='0' margin='0'>
                                        <Value>
                                            example@gmail.com
                                            <br/>
                                            Logement
                                            <br/>
                                            SIMPLEO
                                            <br/>
                                        </Value>
                                    </Box>
                                </Box>
                                <Box isWrap padding='0' margin='0' flexDirection='row' jsContent='space-between'>
                                    <Box isWrap width='80%' padding='0' margin='0'>
                                        <Label>
                                            Autorisation d’utilisation des données :
                                            <br/>
                                            Status de prise en compte :
                                        </Label>
                                    </Box>
                                    <Box isWrap width='20%' padding='0' margin='0'>
                                        <Value>
                                            <CheckCircleTwoTone twoToneColor='#78d85b' />
                                            <br/>
                                            <Checkbox checked />
                                        </Value>
                                    </Box>
                                </Box>
                            </Box>
                            <Box flexDirection='row' padding='0' margin='0' jsContent='space-between'>
                                <Label>
                                    Commentaire Prestataire :
                                </Label>
                                <Box isWrap padding='0' margin='0' width='50%'>
                                    Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                                </Box>
                                <Box isWrap padding='0' margin='0 5% 0 0' width='unset' flexDirection='row' jsContent='space-between'>
                                    <Label>
                                        Note:
                                    </Label>
                                    <Value>
                                        10
                                    </Value>
                                </Box>
                            </Box>
                        </Collapse.Panel>
                        <Collapse.Panel header={
                            <PanelHeader>
                                <b>Feedback sue le ticket #193</b>
                                <Box isWrap width='52px' height='25px' margin='0' padding='0' border='1px solid #d9d9d9'>Cloturé</Box>
                            </PanelHeader>
                        } key="2">
                            <Box flexDirection='row' padding='0' margin='0' jsContent='space-between'>
                                <Box isWrap padding='0' margin='0' flexDirection='row' jsContent='space-between'>
                                    <Box isWrap width='30%' padding='0' margin='0'>
                                        <Label>
                                            Date:
                                            <br/>
                                            Nom:
                                            <br/>
                                            Prénom :
                                        </Label>
                                    </Box>
                                    <Box isWrap padding='0' margin='0'>
                                        <Value>
                                            12/03/2021
                                            <br/>
                                            Aymar
                                            <br/>
                                            Dupont
                                            <br/>
                                        </Value>
                                    </Box>
                                </Box>
                                <Box isWrap padding='0' margin='0' flexDirection='row' jsContent='space-between'>
                                    <Box isWrap width='40%' padding='0' margin='0'>
                                        <Label>
                                            Email:
                                            <br/>
                                            Catégorie :
                                            <br/>
                                            Préstataire :
                                        </Label>
                                    </Box>
                                    <Box isWrap padding='0' margin='0'>
                                        <Value>
                                            example@gmail.com
                                            <br/>
                                            Logement
                                            <br/>
                                            SIMPLEO
                                            <br/>
                                        </Value>
                                    </Box>
                                </Box>
                                <Box isWrap padding='0' margin='0' flexDirection='row' jsContent='space-between'>
                                    <Box isWrap width='80%' padding='0' margin='0'>
                                        <Label>
                                            Status:
                                            <br/>
                                            Status:
                                        </Label>
                                    </Box>
                                    <Box isWrap width='20%' padding='0' margin='0'>
                                        <Value>
                                            <CheckCircleTwoTone twoToneColor='#78d85b' />
                                            <br/>
                                            <Checkbox checked />
                                        </Value>
                                    </Box>
                                </Box>
                            </Box>
                            <Box flexDirection='row' padding='0' margin='0' jsContent='space-between'>
                                <Label>
                                    Commentaire Prestataire :
                                </Label>
                                <Box isWrap padding='0' margin='0' width='50%'>
                                    Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                                </Box>
                                <Box isWrap padding='0' margin='0 5% 0 0' width='unset' flexDirection='row' jsContent='space-between'>
                                    <Label>
                                        Note:
                                    </Label>
                                    <Value>
                                        10
                                    </Value>
                                </Box>
                            </Box>
                        </Collapse.Panel>
                    </Collapse>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Flagship;