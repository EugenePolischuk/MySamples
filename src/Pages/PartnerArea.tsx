import React, {useState} from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Box from '../Components/Box';
import Container from '../Components/Container';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Modal from '../Components/Modal';
import CustomForm from '../Components/CustomForm';
import { ReactComponent as ResourceImg } from '../assets/resources.svg';
import {
    EditOutlined,
    CloseOutlined,
    UserOutlined,
    PlusOutlined,
    UploadOutlined,
    FolderAddOutlined
} from '@ant-design/icons';
import {
    Form,
    Input,
    Upload,
    Radio,
    Select,
    Button as AntButton,
} from 'antd';

type ProfileBoxProps = {
    width?: string;
}

const PageBody = styled.div`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  padding: 30px 50px;
  background: white;
`;

const ProfileBox = styled.div<ProfileBoxProps>`
  width: ${props => (props.width || '100px')};
  
  & > div:first-child {
    font-size: 30px;
    align-items: center;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  
  button {
    color: black;
    width: 45px;
    border: none;
    padding: 4px 10px;
    background-color: #f5f5f5;
  }
  & > button:first-child {
    margin-right: 10px;
  }
`;

const RecBox = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  h3 {
    text-align: center;
    font-size: 18px;
  }
  span {
    color: #999999;
    text-align: center;
    
    &:first-child {
      text-align: right;
      padding: 5px 5px 0 0;
      
      svg {
        cursor: pointer;
      }
    }
  }
`;

const ResBox = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const RadioBox = styled.div`
  display: flex;
  
  .ant-radio-inner {
    border-radius: initial;
  }
  .ant-radio-inner {
    &:after {
      border-radius: initial;
    }
  }
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  
  .ant-select {
    width: 70px;
  }
`;

const SelectIcon = styled.div`
  span {
    font-size: 20px;
    color: #6b7885 
  }
`;

const PartnerArea: React.FC = () => {
    const [addKitModalVisible, setAddKitModalVisible] = useState(false);
    const [addResourceModalVisible, setAddResourceModalVisible] = useState(false);
    const [addObligationModalVisible, setAddObligationModalVisible] = useState(false);
    const [addRecModalVisible, setAddRecModalVisible] = useState(false);
    const [form] = Form.useForm();

    return (
        <Container>
            <Modal
                visible={addKitModalVisible}
                title='Ajout d’un document au  Kit de Communication'
                onCancel={() => setAddKitModalVisible(false)}
                footer={[]}
            >
                <Box isWrap margin='0' padding='0' jsContent='space-between' flexDirection='row'>
                    <ProfileBox>
                        <Box isWrap bgColor='#f5f5f5' height='140px' margin='0' padding='0' jsContent='center'>
                            <UserOutlined />
                        </Box>
                    </ProfileBox>
                    <Box isWrap margin='0' padding='0' width='70%'>
                        <CustomForm
                            form={form}
                            layout='vertical'
                            name='form_in_modal'
                            items={[
                                {
                                    name: 'title',
                                    label: 'Titre',
                                    input: <Input placeholder='Titre' />
                                },
                                {
                                    name: 'comment',
                                    label: 'Comment',
                                    input: <Input.TextArea style={{height: 100}} placeholder='Commentaire' />
                                },
                                {
                                    name: 'file',
                                    label: '',
                                    input: <Upload style={{display: 'flex'}}><AntButton icon={<UploadOutlined />}>Document</AntButton></Upload>
                                }
                            ]}
                        />
                        <Button type='primary' style={{width: '150px'}}>
                            Sauvez
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <Modal
                visible={addResourceModalVisible}
                title='Ajout d’un document aux Ressources RSE'
                onCancel={() => setAddResourceModalVisible(false)}
                footer={[]}
            >
                <Box isWrap margin='0' padding='0' jsContent='space-between' flexDirection='row'>
                    <ProfileBox>
                        <Box isWrap bgColor='#f5f5f5' height='140px' margin='0' padding='0' jsContent='center'>
                            <UserOutlined />
                        </Box>
                    </ProfileBox>
                    <Box isWrap margin='0' padding='0' width='70%'>
                        <CustomForm
                            form={form}
                            layout='vertical'
                            name='form_in_modal'
                            items={[
                                {
                                    name: 'title',
                                    label: 'Titre',
                                    input: <Input placeholder='Entrez le nom du document' />
                                },
                                {
                                    name: 'comment',
                                    label: 'Description',
                                    input: <Input.TextArea style={{height: 100}} placeholder='Entrez la description' />
                                },
                                {
                                    name: 'type',
                                    label: '',
                                    input: <RadioBox>
                                        <Text weight='500' margin='0 20px 0 0'>Type: </Text>
                                        <Radio.Group defaultValue="1">
                                            <Radio value="1">Livre</Radio>
                                            <Radio value="2">Guide</Radio>
                                        </Radio.Group>
                                    </RadioBox>

                                },
                                {
                                    name: 'file',
                                    label: '',
                                    input: <Upload style={{display: 'flex'}}><AntButton icon={<UploadOutlined />}>Document</AntButton></Upload>
                                }
                            ]}
                        />
                        <Button type='primary' style={{width: '150px'}}>
                            Sauvez
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <Modal
                visible={addObligationModalVisible}
                title='L’ajout d’un élément'
                onCancel={() => setAddObligationModalVisible(false)}
                footer={[]}
            >
                <Box isWrap margin='0' padding='0' jsContent='space-between' flexDirection='row'>
                    <ProfileBox width='130px'>
                        <Box isWrap bgColor='#f5f5f5' height='140px' margin='0' padding='0' jsContent='center'>
                            <FolderAddOutlined />
                        </Box>
                    </ProfileBox>
                    <Box isWrap margin='0' padding='0' width='65%'>
                        <CustomForm
                            form={form}
                            layout='vertical'
                            name='form_in_modal'
                            items={[
                                {
                                    name: 'type',
                                    label: '',
                                    input: <RadioBox>
                                        <Text weight='500' margin='0 20px 0 0'>Type: </Text>
                                        <Radio.Group defaultValue="1">
                                            <Radio value="1">Doc</Radio>
                                            <Radio value="2">Text</Radio>
                                        </Radio.Group>
                                    </RadioBox>

                                },
                                {
                                    name: 'fault',
                                    label: '',
                                    input: <RadioBox>
                                        <Text weight='500' margin='0 20px 0 0'>Défaut: </Text>
                                        <Radio.Group defaultValue="1">
                                            <Radio value="1">Oui</Radio>
                                            <Radio value="2">Non</Radio>
                                        </Radio.Group>
                                    </RadioBox>

                                },
                                {
                                    name: 'icon',
                                    label: '',
                                    input: <SelectBox>
                                        <Text weight='500' margin='0 20px 0 0'>Icon: </Text>
                                        <Select defaultValue='1'>
                                            <Select.Option value='1'>
                                                <SelectIcon>
                                                    <FolderAddOutlined />
                                                </SelectIcon>
                                            </Select.Option>
                                            <Select.Option value='2'>
                                                <SelectIcon>
                                                    <UserOutlined />
                                                </SelectIcon>
                                            </Select.Option>
                                        </Select>
                                    </SelectBox>
                                },
                                {
                                    name: 'title',
                                    label: 'Titre',
                                    input: <Input placeholder='Entrez le nom du document' />
                                },
                                {
                                    name: 'file',
                                    label: '',
                                    input: <Upload style={{display: 'flex'}}><AntButton icon={<UploadOutlined />}>Document</AntButton></Upload>
                                }
                            ]}
                        />
                        <Button type='primary' style={{width: '150px'}}>
                            Ajouter un element
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <Modal
                visible={addRecModalVisible}
                title='L’ajout d’un élément'
                onCancel={() => setAddRecModalVisible(false)}
                footer={[]}
            >
                <Box isWrap margin='0' padding='0'>
                    <CustomForm
                        form={form}
                        layout='vertical'
                        name='form_in_modal'
                        items={[
                            {
                                name: 'domain',
                                label: 'Domaine d’activité',
                                input: <Select defaultValue='1'>
                                    <Select.Option value='1'>Menu déroulant1</Select.Option>
                                    <Select.Option value='2'>Menu déroulant2</Select.Option>
                                </Select>
                            },
                            {
                                name: 'icon',
                                label: '',
                                input: <SelectBox>
                                    <Text weight='500' margin='0 20px 0 0'>Icon: </Text>
                                    <Select defaultValue='1'>
                                        <Select.Option value='1'>
                                            <SelectIcon>
                                                <FolderAddOutlined />
                                            </SelectIcon>
                                        </Select.Option>
                                        <Select.Option value='2'>
                                            <SelectIcon>
                                                <UserOutlined />
                                            </SelectIcon>
                                        </Select.Option>
                                    </Select>
                                </SelectBox>
                            },
                        ]}
                    />
                    <Button type='primary' style={{width: '150px'}}>
                        Ajouter
                    </Button>
                </Box>
            </Modal>
            <Box isWrap bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Espace Partenaire' />
                <PageBody>
                    <h3>
                        Kit de communication
                    </h3>
                    <Box isWrap margin='30px 0' padding='0' flexDirection='row' jsContent='space-between'>
                        <ProfileBox key='0'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <PlusOutlined onClick={() => {setAddKitModalVisible(true)}} />
                            </Box>
                            <Text weight='500'>
                                Ajouter un document
                            </Text>
                        </ProfileBox>
                        <ProfileBox key='1'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='2'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='3'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='4'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='5'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='6'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='7'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                    </Box>
                    <h3>
                        Recomondations
                    </h3>
                    <Box isWrap margin='15px 0' padding='0' flexDirection='row' jsContent='space-between'>
                        <Box isWrap width='190px' height='80px' margin='15px 0' padding='0' bgColor='#f5f5f5' jsContent='center'>
                            <PlusOutlined onClick={() => setAddRecModalVisible(true)} style={{ fontSize: '35px', color: '#6b7885', cursor: 'pointer' }} />
                        </Box>
                        <RecBox>
                            <Box isWrap key='1' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #fe6c6c' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Logement</span>
                                <h3>Location</h3>
                            </Box>
                            <Box isWrap key='2' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #fe6c6c' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Logement</span>
                                <h3>Aquisition</h3>
                            </Box>
                            <Box isWrap key='3' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #fe6c6c' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Logement</span>
                                <h3>Vente</h3>
                            </Box>
                            <Box isWrap key='4' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #ffd572' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Famille</span>
                                <h3>Mariage</h3>
                            </Box>
                            <Box isWrap key='5' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #b09fff' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Aléas de la vie</span>
                                <h3>Protection</h3>
                            </Box>
                            <Box isWrap key='6' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #fe6c6c' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Charges</span>
                                <h3>Charges</h3>
                            </Box>
                            <Box isWrap key='7' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #ffd572' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Famille</span>
                                <h3>Anglais</h3>
                            </Box>
                            <Box isWrap key='8' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #ffd572' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Famille</span>
                                <h3>Mariage</h3>
                            </Box>
                        </RecBox>
                    </Box>
                    <h3>
                        Ressources RSE
                    </h3>
                    <Box isWrap margin='15px 0' padding='0' flexDirection='row' jsContent='space-between'>
                        <Box isWrap width='100px' height='100px' margin='15px 0' padding='0' bgColor='#f5f5f5' jsContent='center'>
                            <PlusOutlined style={{ fontSize: '35px', color: '#6b7885', cursor: 'pointer' }} onClick={() => {setAddResourceModalVisible(true)}} />
                        </Box>
                        <ResBox>
                            <Box isWrap width='50%' flexDirection='row' jsContent='center' margin='15px 0' padding='0'>
                                <Box isWrap height='fit-content' width='initial' jsContent='center' bgColor='#f5f5f5' margin='0' padding='20px'>
                                    <ResourceImg />
                                </Box>
                                <Box isWrap margin='0' padding='0 30px'>
                                    <h2>
                                        Nom du document
                                    </h2>
                                    <Text margin='0 0 16px 0'>
                                        Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
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
                            <Box isWrap width='50%' flexDirection='row' jsContent='center' margin='15px 0' padding='0'>
                                <Box isWrap height='fit-content' width='initial' jsContent='center' bgColor='#f5f5f5' margin='0' padding='20px'>
                                    <ResourceImg />
                                </Box>
                                <Box isWrap margin='0' padding='0 30px'>
                                    <h2>
                                        Nom du document
                                    </h2>
                                    <Text margin='0 0 16px 0'>
                                        Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
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
                            <Box isWrap width='50%' flexDirection='row' jsContent='center' margin='15px 0' padding='0'>
                                <Box isWrap height='fit-content' width='initial' jsContent='center' bgColor='#f5f5f5' margin='0' padding='20px'>
                                    <ResourceImg />
                                </Box>
                                <Box isWrap margin='0' padding='0 30px'>
                                    <h2>
                                        Nom du document
                                    </h2>
                                    <Text margin='0 0 16px 0'>
                                        Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
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
                            <Box isWrap width='50%' flexDirection='row' jsContent='center' margin='15px 0' padding='0'>
                                <Box isWrap height='fit-content' width='initial' jsContent='center' bgColor='#f5f5f5' margin='0' padding='20px'>
                                    <ResourceImg />
                                </Box>
                                <Box isWrap margin='0' padding='0 30px'>
                                    <h2>
                                        Nom du document
                                    </h2>
                                    <Text margin='0 0 16px 0'>
                                        Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
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
                        </ResBox>
                    </Box>
                </PageBody>
            </Box>
        </Container>
    );
};

export default PartnerArea;