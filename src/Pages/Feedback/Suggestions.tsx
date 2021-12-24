import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Box from '../../Components/Box';
import Container from '../../Components/Container';
import {Input, Collapse, Checkbox} from 'antd';
import {CheckCircleTwoTone} from "@ant-design/icons";

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

const Label = styled.div`
  opacity: .5;
  margin-right: 20px;
`;

const Value = styled.div`
  font-weight: 500;
`;

const onSearch = (value:string) => console.log(value);

const Suggestions: React.FC = () => {
    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Suggestions Phare'/>
                <PageBody>
                    <Input.Search size='large' placeholder='Search' style={{margin: '20px 0'}} onSearch={onSearch} />
                    <Collapse
                        defaultActiveKey={['1']}
                        expandIconPosition='right'
                    >
                        <Collapse.Panel header={<b>#1 Suggestions nouveaux services (Transport)</b>} key="1">
                            <Box flexDirection='row' padding='0' margin='0'>
                                <Box isWrap width='25%' padding='0' margin='0' flexDirection='row'>
                                    <Box isWrap width='50%' padding='0' margin='0'>
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
                                <Box isWrap width='60%' padding='0' margin='0' flexDirection='row'>
                                    <Box isWrap padding='0' margin='0'>
                                        <Label>
                                            Email:
                                            <br/>
                                            Autorisation d’utilisation des données:
                                            <br/>
                                            Status de prise en compte:
                                        </Label>
                                    </Box>
                                    <Box isWrap padding='0' margin='0'>
                                        <Value>
                                            example@gmail.com
                                            <br/>
                                            <CheckCircleTwoTone twoToneColor='#78d85b' />
                                            <br/>
                                            <Checkbox checked />
                                        </Value>
                                    </Box>
                                </Box>
                            </Box>
                            <Box flexDirection='row' padding='0' margin='0'>
                                <Box isWrap width='20%' padding='0' margin='0'>
                                    <Label>
                                        Commentaire:
                                    </Label>
                                </Box>
                                <Box isWrap padding='0' margin='0' width='50%'>
                                    Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                                </Box>
                            </Box>
                        </Collapse.Panel>
                        <Collapse.Panel header={<b>#2 Suggestions nouveaux services (Transport)</b>} key="2">
                            <Box flexDirection='row' padding='0' margin='0'>
                                <Box isWrap width='25%' padding='0' margin='0' flexDirection='row'>
                                    <Box isWrap width='50%' padding='0' margin='0'>
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
                                <Box isWrap width='60%' padding='0' margin='0' flexDirection='row'>
                                    <Box isWrap padding='0' margin='0'>
                                        <Label>
                                            Email:
                                            <br/>
                                            Autorisation d’utilisation des données:
                                            <br/>
                                            Status de prise en compte:
                                        </Label>
                                    </Box>
                                    <Box isWrap padding='0' margin='0'>
                                        <Value>
                                            example@gmail.com
                                            <br/>
                                            <CheckCircleTwoTone twoToneColor='#78d85b' />
                                            <br/>
                                            <Checkbox checked />
                                        </Value>
                                    </Box>
                                </Box>
                            </Box>
                            <Box flexDirection='row' padding='0' margin='0'>
                                <Box isWrap width='20%' padding='0' margin='0'>
                                    <Label>
                                        Commentaire:
                                    </Label>
                                </Box>
                                <Box isWrap padding='0' margin='0' width='50%'>
                                    Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                                </Box>
                            </Box>
                        </Collapse.Panel>
                    </Collapse>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Suggestions;