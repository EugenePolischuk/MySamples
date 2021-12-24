import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../../Components/Container';
import Header from '../../Components/Header';
import Box from '../../Components/Box';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import CustomForm from '../../Components/CustomForm';
import Modal from '../../Components/Modal';
import JusticeImage from '../../assets/justice.svg';
import ResourceImage from '../../assets/resources.svg';
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    CloseOutlined,
    EditOutlined
} from '@ant-design/icons';
import {
    Checkbox,
    Form,
    Input
} from 'antd';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Img = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ResourceImg = styled(Img)`
  width: 100%;
  height: 240px;
  background-image: url(${ResourceImage});
`;
const JusticeImg = styled(Img)`
  height: 220px;
  border-radius: 15px;
  background-image: url(${JusticeImage});
`;

const List = styled.div`
  display: flex;
`;

const LItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Col = styled.div`
  margin-right: 100px;
`;

const Dot = styled.div`
  background-color: #6B7885;
  margin-right: 10px;
  height: 7px;
  width: 7px;
  border-radius: 50%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  
  & div {
    display: flex;
    justify-content: space-between;
  }
`;

const IconBox = styled.div`
  span {
    border-radius: 50%;
    background-color: #5398DF;
    color: white;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      margin-right: 5px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  
  button {
    color: black;
    width: 35px;
    border: none;
    padding: 4px 10px;
    background-color: #f5f5f5;
  }
  & > button:first-child {
    margin-right: 10px;
  }
`;

const ServiceSheet: React.FC = () => {
    const [suggestServiceModalVisible, setSuggestServiceModalVisible] = useState(false);
    const [form] = Form.useForm();

    return (
        <Container>
            <Modal
                visible={suggestServiceModalVisible}
                title='Suggérer un service'
                footer={[]}
                onCancel={() => setSuggestServiceModalVisible(false)}
            >
                <Text>
                    Comme le reste des informations de la plateforme Phare, les suggestions sont anonymisées
                    <br/>
                    A quelle catégorie appartient le service que vous souhaitez proposer ?
                </Text>
                <CustomForm
                    form={form}
                    layout='vertical'
                    name='form_in_modal'
                    items={[
                        {
                            name: 'other',
                            label: '',
                            input: <Box isWrap margin='20px 0 0 0' padding='0' flexDirection='row'>
                                <Checkbox />
                                <Text weight='500' margin='0 0 0 20px'>Autre</Text>
                            </Box>
                        },
                        {
                            name: 'comment',
                            label: '',
                            input: <Box isWrap margin='0' padding='0'>
                                <Text weight='500'>Commentaire</Text>
                                <Input.TextArea placeholder='Entrez des précisions...' />
                            </Box>
                        },
                    ]}
                />
                <Button type='primary' style={{width: '150px'}}>
                    Suggérer un service
                </Button>
            </Modal>
            <Box isWrap bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Accompagnement - Logement - Habitation' />
                <PageBody>
                    <Box isWrap margin='0' padding='0' flexDirection='row' jsContent='space-between'>
                        <Box isWrap margin='0' padding='0' width='68%'>
                            <JusticeImg />
                            <Box isWrap bgColor='white' padding='20px' margin='30px 0'>
                                <Text margin='0 0 20px 0'>
                                    Parce que la famille est au centre de nos préoccupations, nos experts vous accompgnent pour et vous apportent les meilleures solutions en toute sérénité. Parce que la famille est au centre de nos préoccupations, nos experts vous accompgnent pour et vous apportent les meilleures solutions en toute sérénité. Parce que la famille est au centre de nos préoccupations, nos experts vous accompgnent pour et vous apportent les meilleures solutions en toute sérénité. Parce que la famille est au centre de nos préoccupations, nos experts vous accompgnent pour et vous apportent les meilleures solutions en toute sérénité.
                                </Text>
                                <Text>
                                    Parce que la famille est au centre de nos préoccupations, nos experts vous accompgnent pour et vous apportent les meilleures solutions en toute sérénité. Parce que la famille est au centre de nos préoccupations, nos experts vous accompgnent pour et vous apportent les meilleures solutions en toute sérénité.
                                </Text>
                            </Box>
                            <Box isWrap bgColor='white' padding='20px' margin='0 0 30px 0'>
                                <h3>
                                    Points d’attention
                                </h3>
                                <List>
                                    <Col>
                                        <LItem>
                                            <Dot/>
                                            Campagne 243243...
                                        </LItem>
                                        <LItem>
                                            <Dot/>
                                            Campagne 243243...
                                        </LItem>
                                        <LItem>
                                            <Dot/>
                                            Campagne 243243...
                                        </LItem>
                                        <LItem>
                                            <Dot/>
                                            Campagne 243243...
                                        </LItem>
                                    </Col>
                                    <Col>
                                        <LItem>
                                            <Dot/>
                                            Campagne 243243...
                                        </LItem>
                                        <LItem>
                                            <Dot/>
                                            Campagne 243243...
                                        </LItem>
                                        <LItem>
                                            <Dot/>
                                            Campagne 243243...
                                        </LItem>
                                        <LItem>
                                            <Dot/>
                                            Campagne 243243...
                                        </LItem>
                                    </Col>
                                </List>
                            </Box>
                            <Box isWrap margin='0' padding='20px' bgColor='white'>
                                <Row>
                                    <h3>
                                        Documents
                                    </h3>
                                    <IconBox>
                                        <ArrowLeftOutlined/>
                                        <ArrowRightOutlined/>
                                    </IconBox>
                                </Row>
                                <Box isWrap margin='0' padding='0' flexDirection='row' jsContent='center' alignItems='center'>
                                    <Box isWrap margin='0' padding='0' flexDirection='row' jsContent='center' alignItems='center'>
                                        <ResourceImg />
                                        <Box isWrap margin='0' padding='30px'>
                                            <h3>
                                                Nom du document
                                            </h3>
                                            <Text margin='0 0 16px 0' width='90%'>
                                                Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers.
                                            </Text>
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
                                    <Box isWrap margin='0' padding='0' flexDirection='row' jsContent='center' alignItems='center'>
                                        <ResourceImg />
                                        <Box isWrap margin='0' padding='30px'>
                                            <h3>
                                                Nom du document
                                            </h3>
                                            <Text margin='0 0 16px 0' width='90%'>
                                                Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers.
                                            </Text>
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
                            </Box>
                        </Box>
                        <Box isWrap margin='0' padding='0' width='30%'>
                            <Box isWrap margin='0' padding='20px' bgColor='white'>
                                <h2>
                                    Mes Avantages
                                </h2>
                                <List>
                                    <Col>
                                        <LItem>
                                            <Dot/>
                                            Accompagnement d’expert
                                        </LItem>
                                        <LItem>
                                            <Dot/>
                                            Frais offerts
                                        </LItem>
                                    </Col>
                                </List>
                            </Box>
                            <Box isWrap margin='30px 0' padding='20px' bgColor='white'>
                                <h2>
                                    Ouverture d’un ticket
                                </h2>
                                <Button onClick={() => setSuggestServiceModalVisible(true)} type='primary' style={{width: '100%'}}>
                                    Ouvrir un ticket
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </PageBody>
            </Box>
        </Container>
    );
};

export default ServiceSheet;