import { Form, Input, Button, notification 
} from 'antd';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContainer } from '../Components/AuthContainer/AuthContainer';


const CardAuth = styled.div`
    margin-top: 150px;
    width: 477px;
    background: #FFFFFF;
    box-shadow: 0px 3.98085px 39.8085px -3.18468px rgba(14, 104, 197, 0.05);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 42px 42px 0 42px;
`;
const Text = styled.h2`
    font-family: Jost;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 49px; 
`
const InputMail = styled(Input)`
    width: 354px;
    height: 53px;
    border: 1px solid #EAEBED;
    box-sizing: border-box;
    border-radius: 5px;
`
const ButtonAuth = styled(Button)`
    width: 354px;
    height: 53px;
    background: #374483;
    border-radius: 5px;
    margin-bottom: 20px;
`
const TextInf = styled.p`
    width: 247px;
    font-family: Jost;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: #6B7885;
`
const FormItem = styled(Form.Item)`
    width: 354px;
    margin-bottom: 25px;
`
const HelpCard = styled.div`
    margin-top: 20px;
    width: 249px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

`

const LinkAuth = styled(Link)`
    font-family: Jost;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #374483;
`

const Line = styled.div`
    width: 20px;
    height: 0px;
    opacity: 0.1;
    margin: 0 10px;
    border: 1px solid #000000;
    transform: rotate(90deg);
`

export const Authentification = () => {

      const openNotificationWithIcon = (type: string) => {
        if(type === 'success' || type === 'error')
            notification[type]({ message: "Notification title", description: "Interactively monetize corporate alignments and fully tested niche markets."});
        return;
    };
   
   return (
    <AuthContainer>
        <>
            <CardAuth>
                <Text>
                    Authentification
                </Text>
                <Form>
                <FormItem label="Adresse mail"  name="EMAIL" rules={[
                        {
                            required: true,
                            message: 'Votre entreprise n’est pas adhérée au service Phare sauf l’erreur!',
                        },
                    ]} 
                    tooltip="This is a required field"
                >
                    <InputMail type="email" placeholder="john.golt@company.com" />
                </FormItem >
                <ButtonAuth htmlType="submit"
                    type="primary" 
                    onClick={() => openNotificationWithIcon('error')}
                >
                    S’identifier
                </ButtonAuth>
                </Form>
                <TextInf>
                    Vous aller recevoir un lien qui va vous diriger vers la platephorme Phare 
                </TextInf>
            </CardAuth>
            <HelpCard>
                <LinkAuth to="#" >Je n’ai pas reçu de lien</LinkAuth> 
                    <Line /> 
                <LinkAuth to="#" >Souscription</LinkAuth> 
            </HelpCard>
        </>
    </AuthContainer>
   )
}