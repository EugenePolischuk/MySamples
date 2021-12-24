import React, {useState} from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Box from '../Components/Box';
import Container from '../Components/Container';
import Text from '../Components/Text';
import Button from '../Components/Button';
import Modal from '../Components/Modal';
import CustomForm from '../Components/CustomForm';
import {Collapse, Form, Input, Switch} from 'antd';
import { EditOutlined, CloseOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const PageBody = styled.div`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  padding: 30px 50px;
  background: white;
  
  h3 {
    margin-bottom: 20px;
  }
  .ant-collapse-content-box > div {
    align-items: center;
  }
  hr {
    margin: 40px 0;
    color: #262626;
    opacity: .2;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 8%;
  
  button {
    color: black;
    width: 35px;
    border: none;
    padding: 4px 10px;
    background-color: #f5f5f5;
  }
`;

const AddButton = styled.div`
  div {
    margin-top: 10px;
    span {
      margin-right: 5px;
    }
  }
`;

const Questionnaries: React.FC = () => {
    const [questionModalVisible, setquestionModalVisible] = useState(false);
    const [checkboxSwitch, setCheckboxSwitch] = useState(true);
    const [bulletPoints, setBulletPoints] = useState<Array<any>>([{}, {}]);
    const [form] = Form.useForm();

    const addBulletPoint = () => {
        const newArr = bulletPoints.concat({});
        setBulletPoints(newArr);
    }
    const deleteBulletPoint = () => {
        const newArr = [...bulletPoints];
        newArr.splice(newArr.length - 1, 1);
        setBulletPoints(newArr);
    }

    return (
        <Container>
            <Modal
                width='400px'
                visible={questionModalVisible}
                title='Ajout d’une question'
                footer={[
                    <Button type='primary' key='submit'>
                        Envoyer
                    </Button>
                ]}
                onCancel={() => setquestionModalVisible(false)}
            >
                <Text weight='500'>Entrez votre question</Text>
                <Input placeholder='Ta question' />
                <Box margin='0 0 30px 0' padding='0' alignItems='center' flexDirection='row'>
                    <Text color={checkboxSwitch ? '#6b7885' : ''}>Checkboxes</Text>
                    <Switch
                        style={{margin: '0 10px', backgroundColor: '#1890ff'}}
                        checked={checkboxSwitch}
                        onChange={(val) => {setCheckboxSwitch(val)}}
                    />
                    <Text color={!checkboxSwitch ? '#6b7885' : ''}>Qualité standard</Text>
                </Box>
                {!checkboxSwitch &&
                <>
                    <CustomForm
                        form={form}
                        layout='vertical'
                        name='form_in_modal'
                        items={[
                            {
                                name: 'option1',
                                label: 'Option 1',
                                input: <Input placeholder='Entrez une variante' />
                            },
                            {
                                name: 'option2',
                                label: 'Option 2',
                                input: <Input placeholder='Entrez une variante' />
                            },
                            {
                                name: 'bullet',
                                label: '',
                                input: <>
                                    {
                                        bulletPoints.map((el, index) => {
                                            const isLastItem:boolean = (index === bulletPoints.length - 1);
                                            return <Box key={index} margin='0' padding='0' jsContent={ isLastItem ? 'space-between' : ''} alignItems='center' flexDirection='row'>
                                                <Text weight='500'>Bullet points :</Text>
                                                <Input style={{width: '60%', marginLeft: isLastItem ? '' : '22px'}} placeholder='p.e. Accompagnement d’expert' />
                                                {isLastItem &&
                                                <DeleteOutlined onClick={deleteBulletPoint} />
                                                }
                                            </Box>
                                        })
                                    }
                                </>
                            },
                        ]}
                    />
                    <Button onClick={addBulletPoint}>
                        Ajouter un point
                    </Button>
                </>
                }

            </Modal>
            <Box isWrap bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Questionnaires' />
                <PageBody>
                    <h3>
                        Questionnaire Phare
                    </h3>
                    <Collapse
                        defaultActiveKey={['1']}
                        expandIconPosition='right'
                    >
                        <Collapse.Panel header={<b>Question 1</b>} key='1'>
                            <Box isWrap flexDirection='row' jsContent='space-between' padding='0' margin='0'>
                                <Text width='90%'>
                                    Sur une échelle de 1 à 10, comment évaluez vous votre satisfaction globale de SIMPLEO sur la/les prestation(s) dont vous avez bénéficié ?
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
                        </Collapse.Panel>
                        <Collapse.Panel header={<b>Question 2</b>} key='2'>
                            <Box isWrap flexDirection='row' jsContent='space-between' padding='0' margin='0'>
                                <Text width='90%'>
                                    Sur une échelle de 1 à 10, comment évaluez vous votre satisfaction globale de SIMPLEO sur la/les prestation(s) dont vous avez bénéficié ?
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
                        </Collapse.Panel>
                        <Collapse.Panel header={<b>Question 3</b>} key='3'>
                            <Box isWrap flexDirection='row' jsContent='space-between' padding='0' margin='0'>
                                <Text width='90%'>
                                    Sur une échelle de 1 à 10, comment évaluez vous votre satisfaction globale de SIMPLEO sur la/les prestation(s) dont vous avez bénéficié ?
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
                        </Collapse.Panel>
                        <Collapse.Panel header={<b>Question 4</b>} key="4">
                            <Box isWrap flexDirection='row' jsContent='space-between' padding='0' margin='0'>
                                <Text width='90%'>
                                    Sur une échelle de 1 à 10, comment évaluez vous votre satisfaction globale de SIMPLEO sur la/les prestation(s) dont vous avez bénéficié ?
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
                        </Collapse.Panel>
                    </Collapse>
                    <AddButton>
                        <Button type='primary' style={{width: '100px', marginTop: '20px'}} onClick={() => setquestionModalVisible(true)}>
                            <PlusCircleOutlined />
                            Ajouter
                        </Button>
                    </AddButton>
                    <hr/>
                    <h3>
                        Questionnaire Prestatire
                    </h3>
                    <Collapse
                        defaultActiveKey={['1']}
                        expandIconPosition='right'
                    >
                        <Collapse.Panel header={<b>Question 1</b>} key="1">
                            <Box isWrap flexDirection='row' jsContent='space-between' padding='0' margin='0'>
                                <Text width='90%'>
                                    Sur une échelle de 1 à 10, comment évaluez vous votre satisfaction globale de SIMPLEO sur la/les prestation(s) dont vous avez bénéficié ?
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
                        </Collapse.Panel>
                        <Collapse.Panel header={<b>Question 2</b>} key="2">
                            <Box isWrap flexDirection='row' jsContent='space-between' padding='0' margin='0'>
                                <Text width='90%'>
                                    Sur une échelle de 1 à 10, comment évaluez vous votre satisfaction globale de SIMPLEO sur la/les prestation(s) dont vous avez bénéficié ?
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
                        </Collapse.Panel>
                        <Collapse.Panel header={<b>Question 3</b>} key="3">
                            <Box isWrap flexDirection='row' jsContent='space-between' padding='0' margin='0'>
                                <Text width='90%'>
                                    Sur une échelle de 1 à 10, comment évaluez vous votre satisfaction globale de SIMPLEO sur la/les prestation(s) dont vous avez bénéficié ?
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
                        </Collapse.Panel>
                        <Collapse.Panel header={<b>Question 4</b>} key="4">
                            <Box isWrap flexDirection='row' jsContent='space-between' padding='0' margin='0'>
                                <Text width='90%'>
                                    Sur une échelle de 1 à 10, comment évaluez vous votre satisfaction globale de SIMPLEO sur la/les prestation(s) dont vous avez bénéficié ?
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
                        </Collapse.Panel>
                    </Collapse>
                    <AddButton>
                        <Button type='primary' style={{width: '100px', marginTop: '20px'}}>
                            <PlusCircleOutlined />
                            Ajouter
                        </Button>
                    </AddButton>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Questionnaries;