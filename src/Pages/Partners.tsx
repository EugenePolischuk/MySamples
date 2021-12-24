import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Button from '../Components/Button';
import CustomItem from '../Components/CustomFormItem';
import Box from '../Components/Box';
import Container from '../Components/Container';
import Text from '../Components/Text';
import { Form, Input } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import PartnersImg from '../assets/partners.svg';
import PartnerLogo1 from '../assets/partner_logo_1.svg';
import PartnerLogo2 from '../assets/partner_logo_2.svg';
import PartnerLogo3 from '../assets/partner_logo_3.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const FormBox = styled.div`
  form {
    display: flex;
    align-items: center;

    input {
      height: 40px;
      border-radius: 5px;
    }
  }
`;

const ButtonBox = styled.div`
  margin: 6px 0 0 15px;
  
  button {
    width: 100%;
    height: 40px;
  }
`;

const ImgBox = styled.div`
  width: 40%;
  height: 215px;
  border-radius: 5px;
  background-image: url(${PartnersImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LogoBox = styled.div`
  height: 85px;
  width: 16%;
  border-radius: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:nth-child(odd) {
    background-image: url(${PartnerLogo1});
  }
  &:nth-child(even) {
    background-image: url(${PartnerLogo2});
  }
`;

const FooterContainer = styled.div`
  img {
    height: 45px;
    margin-top: 20px;
  }
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

const InfoBox = styled.div`
  display: block !important;
  width: 45%;
  
  h4 {
    margin: 20px 0;
  }
`;

const Partners: React.FC = () => {
    const [form] = Form.useForm();

    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Parrainez Phare'/>
                <PageBody>
                    <Box primary padding='20px' flexDirection='row'>
                        <FormBox>
                            <h3>
                                Aidez nous à placer la RSE au coeur du débat
                            </h3>
                            <Text margin='20px 0 30px 0' width='80%'>
                                Toutes les entreprises méritent d’avoir un impact positif. En recommandant Phare, vous contribuez à démocratiser une démarche RSE et améliorer la qualité de vie de milliers de collaborateurs.
                            </Text>
                            <Form
                                form={form}
                                layout='vertical'
                                name='form_in_modal'
                            >
                                <CustomItem
                                    name='first_name'
                                    label='Envoyez votre lien de parrainnage : '
                                    rules={[{ required: true, message: 'Test wrong message!' }]}
                                >
                                    <Input placeholder='adresse@entreprise.com' />
                                </CustomItem>
                                <ButtonBox>
                                    <Button>
                                        Envoyer
                                    </Button>
                                </ButtonBox>
                            </Form>
                        </FormBox>
                        <ImgBox />
                    </Box>
                    <Box primary padding='20px' margin='30px 0 0 0' jsContent='space-between' flexDirection='row'>
                        <LogoBox />
                        <LogoBox />
                        <LogoBox />
                        <LogoBox />
                        <LogoBox />
                        <LogoBox />
                    </Box>
                    <FooterContainer>
                        <Box primary padding='20px' margin='30px 0 0 0' jsContent='space-between'>
                            <Row>
                                <h3>
                                    Phare dans les actualités
                                </h3>
                                <IconBox>
                                    <ArrowLeftOutlined/>
                                    <ArrowRightOutlined/>
                                </IconBox>
                            </Row>
                            <Row>
                                <InfoBox>
                                    <img src={PartnerLogo3} alt="logo"/>
                                    <h4>
                                        Phare dans les actualités
                                    </h4>
                                    <Text margin='0 0 16px 0'>
                                        Toutes les entreprises méritent d’avoir un impact positif. En recommandant Phare, vous contribuez à démocratiser une démarche RSE et améliorer la qualité de vie de milliers de collaborateurs.
                                    </Text>
                                    <Button>
                                        lire les nouvelles
                                    </Button>
                                </InfoBox>
                                <InfoBox>
                                    <img src={PartnerLogo3} alt="logo"/>
                                    <h4>
                                        Phare dans les actualités
                                    </h4>
                                    <Text margin='0 0 16px 0'>
                                        Toutes les entreprises méritent d’avoir un impact positif. En recommandant Phare, vous contribuez à démocratiser une démarche RSE et améliorer la qualité de vie de milliers de collaborateurs.
                                    </Text>
                                    <Button>
                                        lire les nouvelles
                                    </Button>
                                </InfoBox>
                            </Row>
                        </Box>
                    </FooterContainer>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Partners;