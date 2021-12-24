import React, {useState} from 'react';
import styled from 'styled-components';
import Container from '../Components/Container';
import Box from '../Components/Box';
import Button from '../Components/Button';
import Text from '../Components/Text';
import CustomForm from '../Components/CustomForm';
import Modal from '../Components/Modal';
import { ReactComponent as BoyIcon } from '../assets/accompaniment_icons/boy.svg';
import {
    Collapse,
    Form,
    Input,
    Upload,
    message
} from 'antd';
import {
    HomeFilled,
    DownOutlined,
    PlusCircleOutlined,
    PlusOutlined,
    UploadOutlined,
    LoadingOutlined
} from '@ant-design/icons';


const PageBody = styled.div`
  width: 100%;
  border-top: 1px solid #eaeaea;
  
  .ant-collapse {
    border: none;
    width: 100%;
  }
  .ant-collapse-header, .ant-collapse-content-box {
    padding: 0 !important;
  }
  .ant-collapse-content-box > div {
    align-items: center;
  }
  .ant-upload {
    width: 100%;
    button {
      width: 100%;
    }
  }
  h4 {
    margin: 0;
  }
  h3 {
    margin-bottom: 20px;
  }
  hr {
    margin: 40px 0;
    color: #262626;
    opacity: .2;
  }
`;

const ButtonOutLine = styled.div`
  button {
    background: transparent;
    border: 1px solid #5398df;
    color: #5398df;
  }
`;

const BtnBordered = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
`;

const Catalog: React.FC = () => {
    const [addCategoryModalVisible, setAddCategoryModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [form] = Form.useForm();

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const getBase64 = (img: Blob, callback: any) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const beforeUpload = (file: Blob) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true );
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (imgUrl: string) => {
                setImgUrl(imgUrl);
                setLoading(false);
                }
            );
        }
    };

    return (
        <Container>
            <Modal
                visible={addCategoryModalVisible}
                title='Ajouter une  sous-categorie'
                onCancel={() => setAddCategoryModalVisible(false)}
                footer={[]}
            >
                <Box isWrap margin='0' padding='0' jsContent='space-between' flexDirection='row'>
                    <Box isWrap margin='0' padding='0' height='110px' width='110px'>
                        <Upload
                            name='avatar'
                            listType='picture-card'
                            className='avatar-uploader'
                            showUploadList={false}
                            // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Box>
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
                                    input: <Upload style={{display: 'flex', width: '100%'}}>
                                        <Button><UploadOutlined /> Document</Button>
                                    </Upload>
                                }
                            ]}
                        />
                        <Button type='primary'>
                            Ajouter
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <Box isWrap padding='30px 25px' margin='0 0 0 14%' bgColor='#e5e5e5'>
                <Box isWrap margin='0' padding='15px' bgColor='white' flexDirection='row' jsContent='space-between' alignItems='center' borderRadius='0'>
                    <Text weight='500' size='15px'>Contenu Modifiable - Salariés - Catalog</Text>
                    <Button type='primary' style={{width: '250px'}} onClick={() => setAddCategoryModalVisible(true)}>
                        <PlusCircleOutlined />
                        Ajouter une sous-catéegorie
                    </Button>
                </Box>
                <PageBody>
                    <Box isWrap margin='0' padding='30px' bgColor='white' borderRadius='0'>
                        <Collapse
                            defaultActiveKey={['1']}
                            expandIcon={() => <DownOutlined style={{color: 'white'}} />}
                            expandIconPosition='right'
                        >
                            <Collapse.Panel header={
                                <Box isWrap margin='0' padding='10px' bgColor='#fe6c6c' flexDirection='row' alignItems='center' borderRadius='0'>
                                    <Box isWrap margin='0 20px 0 0' padding='10px' width='50px' bgColor='white' height='50px' borderRadius='50%' jsContent='center'>
                                        <HomeFilled style={{color: '#fe6c6c'}} />
                                    </Box>
                                    <Text weight='500' color='white'>Logement</Text>
                                </Box>
                            } key='1'>
                                <Box isWrap margin='0' padding='15px' bgColor='#f5f5f5' flexDirection='row' jsContent='space-between' alignItems='center' borderRadius='0'>
                                    <h4>Location</h4>
                                    <ButtonOutLine>
                                        <Button>
                                            Ajouter un service
                                        </Button>
                                    </ButtonOutLine>
                                </Box>
                                <Box isWrap margin='0' padding='15px' flexDirection='row' alignItems='center'>
                                    <Text weight='500' margin='0 20px 0 0'>Litiges Propriétaires</Text>
                                    <Text weight='500' margin='0 20px 0 0'>Litiges Voisins</Text>
                                    <Text weight='500' margin='0 20px 0 0'>Recherche de location</Text>
                                </Box>
                                <Box isWrap margin='0' padding='15px' bgColor='#f5f5f5' flexDirection='row' jsContent='space-between' alignItems='center' borderRadius='0'>
                                    <h4>Acquisition</h4>
                                    <ButtonOutLine>
                                        <Button>
                                            Ajouter un service
                                        </Button>
                                    </ButtonOutLine>
                                </Box>
                                <Box isWrap margin='0' padding='15px' flexDirection='row' alignItems='center' borderRadius='0'>
                                    <Text weight='500' margin='0 20px 0 0'>Recherche d’un bien</Text>
                                    <Text weight='500' margin='0 20px 0 0'>Noraire</Text>
                                    <Text weight='500' margin='0 20px 0 0'>Architecte</Text>
                                </Box>
                                <BtnBordered>
                                    <Button type='primary' style={{width: '250px'}} onClick={() => setAddCategoryModalVisible(true)}>
                                        <PlusCircleOutlined />
                                        Ajouter une sous-catéegorie
                                    </Button>
                                </BtnBordered>
                            </Collapse.Panel>
                            {/*<Collapse.Panel header={<b>Question 2</b>} key='2'>*/}
                            {/*</Collapse.Panel>*/}
                        </Collapse>
                        <Collapse
                            defaultActiveKey={['1']}
                            expandIcon={() => <DownOutlined style={{color: 'white'}} />}
                            expandIconPosition='right'
                            style={{marginTop: '50px'}}
                        >
                            <Collapse.Panel header={
                                <Box isWrap margin='0' padding='10px' bgColor='#ffd572' flexDirection='row' alignItems='center' borderRadius='0'>
                                    <Box isWrap margin='0 20px 0 0' padding='15px' width='50px' bgColor='white' height='50px' borderRadius='50%' jsContent='center' alignItems='center'>
                                        <BoyIcon />
                                    </Box>
                                    <Text weight='500' color='white'>Famille</Text>
                                </Box>
                            } key='1'>
                                <Box isWrap margin='0' padding='15px' bgColor='#f5f5f5' flexDirection='row' jsContent='space-between' alignItems='center' borderRadius='0'>
                                    <h4>Location</h4>
                                    <ButtonOutLine>
                                        <Button>
                                            Ajouter un service
                                        </Button>
                                    </ButtonOutLine>
                                </Box>
                                <Box isWrap margin='0' padding='15px' flexDirection='row' alignItems='center'>
                                    <Text weight='500' margin='0 20px 0 0'>Litiges Propriétaires</Text>
                                    <Text weight='500' margin='0 20px 0 0'>Litiges Voisins</Text>
                                    <Text weight='500' margin='0 20px 0 0'>Recherche de location</Text>
                                </Box>
                                <Box isWrap margin='0' padding='15px' bgColor='#f5f5f5' flexDirection='row' jsContent='space-between' alignItems='center' borderRadius='0'>
                                    <h4>Acquisition</h4>
                                    <ButtonOutLine>
                                        <Button>
                                            Ajouter un service
                                        </Button>
                                    </ButtonOutLine>
                                </Box>
                                <Box isWrap margin='0' padding='15px' flexDirection='row' alignItems='center' borderRadius='0'>
                                    <Text weight='500' margin='0 20px 0 0'>Recherche d’un bien</Text>
                                    <Text weight='500' margin='0 20px 0 0'>Noraire</Text>
                                    <Text weight='500' margin='0 20px 0 0'>Architecte</Text>
                                </Box>
                                <BtnBordered>
                                    <Button type='primary' style={{width: '250px'}} onClick={() => setAddCategoryModalVisible(true)}>
                                        <PlusCircleOutlined />
                                        Ajouter une sous-catéegorie
                                    </Button>
                                </BtnBordered>
                            </Collapse.Panel>
                            {/*<Collapse.Panel header={<b>Question 2</b>} key='2'>*/}
                            {/*</Collapse.Panel>*/}
                        </Collapse>
                    </Box>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Catalog;