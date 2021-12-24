import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Box from '../../Components/Box';
import Container from '../../Components/Container';
import CustomForm from '../../Components/CustomForm';
import { Form, Input, Collapse, Checkbox, TimePicker, Upload, Button } from 'antd';
import { CheckCircleTwoTone, EuroOutlined, PaperClipOutlined } from '@ant-design/icons';

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

const Provider: React.FC = () => {
    const [form] = Form.useForm();

    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Feedback Prestataire'/>
                <PageBody>
                    <Input.Search size='large' placeholder='Search' style={{margin: '20px 0'}} onSearch={onSearch} />
                    <Collapse
                        defaultActiveKey={['1']}
                        expandIconPosition='right'
                    >
                        <Collapse.Panel header={<b>Feedback sue le ticket #193</b>} key="1">
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
                                <CustomForm
                                    form={form}
                                    layout='horizontal'
                                    name='form'
                                    items={[
                                        {
                                            name: 'amount',
                                            label: 'Montant d’économie :',
                                            input: <Input suffix={<EuroOutlined />} />
                                        },
                                        {
                                            name: 'time',
                                            label: 'Temps consacré :',
                                            input: <TimePicker placeholder='Select time' />
                                        },
                                        {
                                            name: 'file',
                                            label: 'Preuve :',
                                            input: <Upload><Button icon={<PaperClipOutlined />} /></Upload>
                                        }
                                    ]}
                                />
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
                        <Collapse.Panel header="This is panel header 2" key="2">
                        </Collapse.Panel>
                        <Collapse.Panel header="This is panel header 3" key="3">
                        </Collapse.Panel>
                    </Collapse>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Provider;