import React from 'react';
import styled from 'styled-components';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Box from '../Components/Box';
import CustomForm from '../Components/CustomForm';
import {Button, Form, Input, Select, Table, Upload} from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';
import Text from '../Components/Text';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
  
  .ant-form-item-control-input-content span {
    display: flex;
    align-items: center;
  }
  .ant-upload-list-item {
    margin-top: 0;
  }
`;

const onSearch = (value:string) => console.log(value);

const CreateAction: React.FC = () => {
    const [form] = Form.useForm();
    const columns = [
        {
            title: 'Nom de l’action',
            dataIndex: 'name',
            align: 'center' as const,
        },
        {
            title: 'Nb salariés',
            dataIndex: 'salary',
            align: 'center' as const,
        },
        {
            title: 'Catégorie',
            dataIndex: 'category',
            align: 'center' as const,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            align: 'center' as const,
        },
        {
            title: 'Budget',
            dataIndex: 'budget',
            align: 'center' as const,
        },
        {
            title: 'Commentaire',
            dataIndex: 'comment',
            align: 'center' as const,
        },
    ];
    const fixedData = [
        {
            key: 1,
            name: 'Nom Prénom',
            salary: 346375,
            category: 'name@gmail.com',
            date: new Date().toLocaleDateString(),
            budget: '100 €',
            comment: 'Comment...',
        },
        {
            key: 2,
            name: 'Nom Prénom',
            salary: 346375,
            category: 'name@gmail.com',
            date: new Date().toLocaleDateString(),
            budget: '100 €',
            comment: 'Comment...',
        },
        {
            key: 3,
            name: 'Nom Prénom',
            salary: 346375,
            category: 'name@gmail.com',
            date: new Date().toLocaleDateString(),
            budget: '100 €',
            comment: 'Comment...',
        },
        {
            key: 4,
            name: 'Nom Prénom',
            salary: 346375,
            category: 'name@gmail.com',
            date: new Date().toLocaleDateString(),
            budget: '100 €',
            comment: 'Comment...',
        },
        {
            key: 5,
            name: 'Nom Prénom',
            salary: 346375,
            category: 'name@gmail.com',
            date: new Date().toLocaleDateString(),
            budget: '100 €',
            comment: 'Comment...',
        },
    ];

    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Créer l’action' />
                <PageBody>
                    <Box isWrap margin='0' padding='20px' bgColor='white'>
                        Cet espace est dédié à la création,  consolidation et mesure de vos actions sociales à la destination de vos salariés
                    </Box>
                    <Box isWrap margin='30px 0' padding='20px 10px' bgColor='white'>
                        <CustomForm
                            form={form}
                            layout='vertical'
                            name='form'
                            items={[
                                {
                                    name: 'name',
                                    label: '',
                                    input: <Box isWrap margin='0' padding='0 10px'>
                                        <Text weight='500' margin='0 0 5px 0'>Nom de l’action</Text>
                                        <Input placeholder='Nom de l’action' />
                                    </Box>
                                },
                                {
                                    name: 'group',
                                    label: '',
                                    input: <Box isWrap margin='0' padding='0' flexDirection='row'>
                                        <Box isWrap margin='0' padding='0 10px'>
                                            <Text weight='500' margin='0 0 5px 0'>Nombre de collaborateurs</Text>
                                            <Input type='number' placeholder='20' />
                                        </Box>
                                        <Box isWrap margin='0' padding='0 10px'>
                                            <Text weight='500' margin='0 0 5px 0'>Catégories</Text>
                                            <Select defaultValue='1'>
                                                <Select.Option value='1'>Plusieurs choix</Select.Option>
                                                <Select.Option value='2'>HR</Select.Option>
                                                <Select.Option value='3'>User</Select.Option>
                                            </Select>
                                        </Box>
                                        <Box isWrap margin='0' padding='0 10px'>
                                            <Text weight='500' margin='0 0 5px 0'>Budget depensé</Text>
                                            <Input type='number' placeholder='10000 €' />
                                        </Box>
                                        <Box isWrap margin='0' padding='0 10px'>
                                            <Text weight='500' margin='0 0 5px 0'>Date</Text>
                                            <Input type='date' />
                                        </Box>
                                    </Box>
                                },
                                {
                                    name: 'comments',
                                    label: '',
                                    input: <Box isWrap margin='0' padding='0 10px'>
                                        <Text weight='500' margin='0 0 5px 0'>Commentaire</Text>
                                        <Input.TextArea style={{height: '120px'}} placeholder='Écrivez votre commentaire' />
                                    </Box>
                                },
                                {
                                    name: 'file',
                                    label: '',
                                    input: <Upload>
                                        <Button type='default' style={{margin: '0 10px'}} icon={<PaperClipOutlined />} />
                                    </Upload>
                                }
                            ]}
                        />
                        <Button type='primary' style={{width: '150px', margin: '0 10px'}}>
                            Créer l’action
                        </Button>
                    </Box>
                    <Box isWrap margin='0' padding='20px' bgColor='white'>
                        <h3>
                            Répertoire d’actions
                        </h3>
                        <Box isWrap margin='0' padding='0' flexDirection='row' jsContent='flex-end'>
                            <Input.Search size='large' placeholder='Recherche' style={{margin: '20px 0'}} onSearch={onSearch} />
                        </Box>
                        <Table
                            columns={columns}
                            dataSource={fixedData}
                            pagination={false}
                            size='small'
                            // title={() => 'Header'}
                        />
                    </Box>
                </PageBody>
            </Box>
        </Container>
    );
};

export default CreateAction;