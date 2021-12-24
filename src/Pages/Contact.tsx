import React, {useState} from 'react';
import styled from 'styled-components';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Box from '../Components/Box';
import Button from '../Components/Button';
import Text from '../Components/Text';
import CustomForm from '../Components/CustomForm';
import Modal from '../Components/Modal';
import { Form, Input } from 'antd';


const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Contact: React.FC = () => {
    const [planModalVisible, setPlanModalVisible] = useState(false);
    const [form] = Form.useForm();

    return (
        <Container>
            <Modal
                width='400px'
                visible={planModalVisible}
                title='Planification d’un RDV'
                footer={[]}
                onCancel={() => setPlanModalVisible(false)}
            >
                <>
                    <CustomForm
                        form={form}
                        layout='vertical'
                        name='form_in_modal'
                        items={[
                            {
                                name: 'name',
                                label: 'Nom',
                                input: <Input placeholder='Nom' />
                            },
                            {
                                name: 'tel',
                                label: 'Téléphone',
                                input: <Input placeholder='Téléphone' />
                            },
                        ]}
                    />
                    <Button type='primary' style={{width: '100%'}}>
                        Envoyer
                    </Button>
                </>
            </Modal>
            <Box isWrap bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Contact' />
                <PageBody>
                    <Box isWrap margin='0' padding='20px' bgColor='white' flexDirection='row' jsContent='space-between'>
                        <Box isWrap margin='0' padding='0' width='39%'>
                            <h2>
                                Contacter Phare
                            </h2>
                            <Text margin='10px 0'>
                                Pour nous indiquer un changement d’information, une problématique particulière sur un dossier ou tout autre demande
                            </Text>
                            <Text>
                                <span style={{opacity: '.5', marginRight: 20}}>Téléphone : </span>
                                01 xx xx xx xx
                            </Text>
                            <Text>
                                <span style={{opacity: '.5', marginRight: 20}}>Courriel : </span>
                                contact@phare.com
                            </Text>
                        </Box>
                        <Box isWrap margin='0' padding='0' width='39%'>
                            <h2>
                                Demander à être rappelé
                            </h2>
                            <Button type='primary' style={{width: '100px'}} onClick={() => setPlanModalVisible(true)}>
                                Valider
                            </Button>
                        </Box>
                    </Box>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Contact;