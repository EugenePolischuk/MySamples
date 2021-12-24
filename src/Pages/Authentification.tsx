import { Form, Input, Button, notification } from 'antd';
import { InitialStateAuth, fetchAuth } from '../Redux/Reducers/AuthSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContainer } from '../Components/AuthContainer/AuthContainer';

const CardAuth = styled.div`
  margin-top: 150px;
  width: 477px;
  background: #ffffff;
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
`;
const InputMail = styled(Input)`
  width: 354px;
  height: 53px;
  border: 1px solid #eaebed;
  box-sizing: border-box;
  border-radius: 5px;
`;
const ButtonAuth = styled(Button)`
  width: 354px;
  height: 53px;
  background: #374483;
  border-radius: 5px;
  margin-bottom: 20px;
`;
const TextInf = styled.p`
  width: 247px;
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #6b7885;
`;
const FormItem = styled(Form.Item)`
  width: 354px;
  margin-bottom: 25px;
`;
const HelpCard = styled.div`
  margin-top: 20px;
  width: 249px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkAuth = styled(Link)`
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #374483;
`;

const Line = styled.div`
  width: 20px;
  height: 0px;
  opacity: 0.1;
  margin: 0 10px;
  border: 1px solid #000000;
  transform: rotate(90deg);
`;
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!'
  }
};
export const Authentification = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(
    (e: { auth: InitialStateAuth }) => e.auth
  );

  const onFinish = (values: { mail: string }) => {
    dispatch(fetchAuth(values.mail));
  };

  useEffect(() => {
    const onFinishFailed = () => {
      notification['error']({
        message: 'Notification title',
        description:
          'Interactively monetize corporate alignments and fully tested niche markets.'
      });
    };
    const successAnswer = () => {
      notification['success']({
        message: 'success',
        description: 'send to mail.'
      });
    };
    if (!loading) {
      if (error !== null) {
        onFinishFailed();
      }
      if (data !== null) {
        data ? successAnswer() : onFinishFailed();
      }
    }
  }, [error, data, loading]);
  return (
    <AuthContainer>
      <>
        <CardAuth>
          <Text>Authentification</Text>
          <Form
            initialValues={{ mail: 'ttestovich359@gmail.com' }}
            onFinish={onFinish}
            validateMessages={validateMessages}>
            <FormItem
              label='Adresse mail'
              name='mail'
              // for testing notification['error'], comment the line -> rules={[{ type: 'email' }]}
              tooltip='This is a required field'>
              <InputMail placeholder='john.golt@company.com' />
            </FormItem>
            <ButtonAuth htmlType='submit' type='primary'>
              S’identifier
            </ButtonAuth>
          </Form>
          <TextInf>
            Vous aller recevoir un lien qui va vous diriger vers la platephorme
            Phare
          </TextInf>
        </CardAuth>
        <HelpCard>
          <LinkAuth to='#'>Je n’ai pas reçu de lien</LinkAuth>
          <Line />
          <LinkAuth to='#'>Souscription</LinkAuth>
        </HelpCard>
      </>
    </AuthContainer>
  );
};
