import React, { useState } from 'react';
import styled from 'styled-components';
import { Empty, Form, Input } from 'antd';
import {
  BookFilled,
  CarryOutFilled,
  MessageFilled,
  StarFilled,
  WarningFilled
} from '@ant-design/icons';
import '../App.css';
import Header from '../Components/Header';
import Box from '../Components/Box';
import Text from '../Components/Text';
import { ReactComponent as AccLogo } from '../assets/logo_acc.svg';
import Button from '../Components/Button';
import ButtonRedirect from '../Components/ButtonRedirect';
import { PieChartCard } from '../Components/PieChartCard/PieChartCard';
import Modal from '../Components/Modal';
import { CrookedChartCard } from '../Components/CrookedChartCard/CrookedChartCard';
import { ProgressChart } from '../Components/ProgressChart/ProgressChart';
import { ReactComponent as arrowLeft } from '../assets/arrowLeft.svg';
import { ReactComponent as arrowRight } from '../assets/arrowRight.svg';
import { ReactComponent as miniBook } from '../assets/miniBook.svg';
import Container from '../Components/Container';
import WrapContainer from '../Components/WrapContainer';
import CustomForm from '../Components/CustomForm';
import { CrookedComparisonCard } from '../Components/CrookedComparisonCard/CrookedComparisonCard';
import { useToggle } from 'react-use';
import { ChartAnalysisOfRequests } from '../Components/AnalyseDesSolicitations/ChartAnalyseDesSolicitations';

type IconProps = {
  blue?: boolean;
};


type Values = {
  first_name: string;
  second_name: string;
  phone: string;
  needs: string;
};

type CustomLi = {
  margin: string;
};

type NavigationButtonProps = {
  grey?: boolean;
  click?: boolean;
  onClick?: () => void;
};

// // todo del TempMenu after adding normal Menu
// const TempMenu = styled.div`
//   width: 14%;
// `;

// todo del TempChart after adding normal Chart
const TempChart = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 25px;
  background-color: white;
  margin-bottom: 30px;
  border-radius: 5px;
`;

const DashboardContainer = styled.div`
  width: 100%;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;

const DashboardBody = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  align-items: flex-start;
`;

const AccountContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DoubleChartContainer = styled.div`
  display: flex;
`;

const AccountInfo = styled.div`
  display: flex;
  height: 65px;
  margin-bottom: 16px;
`;

const AccountLogo = styled(AccLogo)`
  margin-right: 25px;
`;

const AccountName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const GreyLine = styled.div`
  width: calc(100% + 50px);
  height: 2px;
  background-color: rgba(236, 236, 236, 1);
  margin: 0 -25px;
`;

const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 27px 0;
`;

const GreySpan = styled.span`
  color: gray;
  font-size: 16px;
  line-height: 20px;
`;

const StarIcon = styled(StarFilled)`
  color: #febd38;
  font-size: 16px;
  margin-left: 8px;
`;

const WarnIcon = styled(WarningFilled)`
  color: #f7c457;
  font-size: 22px;
  margin-right: 10px;
`;

const MessageIcon = styled(MessageFilled)`
  color: #54a444;
  font-size: 22px;
  margin-right: 10px;
`;

const CalendarIcon = styled(CarryOutFilled)`
  color: #e44b50;
  font-size: 22px;
  margin-right: 10px;
`;

const BookIcon = styled(BookFilled)`
  color: #8476e0;
  font-size: 22px;
  margin-right: 10px;
`;

const ArrowLeftIcon = styled(arrowLeft)<IconProps>`
  fill: ${props => (props.blue ? '#5398DF' : '#FFFFFF')};
`;

const ArrowRightIcon = styled(arrowRight)<IconProps>`
  fill: ${props => (props.blue ? '#5398DF' : '#FFFFFF')};
`;

const MiniBookIcon = styled(miniBook)``;

const Rating = styled.div`
  display: flex;
  margin-top: 9px;
  align-items: center;
`;

const ReportButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;

const ReferentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 22px 0;
`;

const BoxSpaceBetween = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OverflowBox = styled.div`
  margin: 15px 0 0 0;
  overflow-y: scroll;
  max-height: 200px;
`;

const CustomLi = styled.li<CustomLi>`
  &:not(last-child) {
    margin-bottom: ${props => props.margin};
  }
`;

const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavigationButton = styled.div<NavigationButtonProps>`
  width: 31px;
  height: 31px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.grey ? '#F5F5F5' : '#5398DF')};
  cursor: ${props => (props.click ? 'pointer' : 'not-allowed')};

  &:nth-child(2) {
    margin-left: 6px;
  }
`;

const BookContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const BookDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const Dashboard: React.FC = () => {
  const [form] = Form.useForm();
  const ratingData = false;
  const [modalVisible, toggle] = useToggle(false);
  const [tempDate, setTempDate] = useState<Values>();
  const testSubmit = (values: Values) => {
    setTempDate(values);
    toggle(false);
  };
  const [currentPage, setCurrentPage] = useState<number>(1);
  const nextPage = () => {
    if (currentPage !== 4) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container>
      <Modal
        width='400px'
        visible={modalVisible}
        title='Planification d’un RDV'
        footer={[
          <Button
            type='primary'
            key='submit'
            onClick={() => {
              form
                .validateFields()
                .then(values => {
                  form.resetFields();
                  testSubmit(values);
                })
                .catch(info => {
                  console.log('Validate Failed:', info);
                });
            }}>
            Envoyer
          </Button>
        ]}
        onCancel={toggle}>
        <CustomForm
          form={form}
          layout='vertical'
          name='form_in_modal'
          items={[
            {
              name: 'first_name',
              label: 'Nom',
              rules: [{ required: true, message: 'Test wrong message!' }],
              input: <Input />
            },
            {
              name: 'second_name',
              label: 'Prenom',
              rules: [{ required: true, message: 'Test wrong message!' }],
              input: <Input />
            },
            {
              name: 'phone',
              label: 'Téléphone',
              rules: [{ required: true, message: 'Test wrong message!' }],
              input: <Input />
            },
            {
              name: 'needs',
              label: 'Votre besoin',
              rules: [{ required: true, message: 'Test wrong message!' }],
              input: <Input.TextArea rows={3} />
            }
          ]}
        />
      </Modal>
      <DashboardContainer>
        <Header title='Tableau de bord' />
        <DashboardBody>
          <ChartContainer>
            <CrookedChartCard />
            <DoubleChartContainer>
              <CrookedComparisonCard width='calc(50% - 15px)' height='407px' />
              <PieChartCard
                width='calc(50% - 15px)'
                title='Classement des pages consultées'
                margin='0 0 30px 0'
                pieChartSize={219}
              />
            </DoubleChartContainer>
            <TempChart >
              <ButtonRedirect />
              <ChartAnalysisOfRequests />
            </TempChart>
            <WrapContainer>
              <Box primary isWrap width='calc(50% - 15px)' height='185px'>
                <ButtonRedirect />
                <Text size='18px' weight='500' height='22px'>
                  <WarnIcon />          
                  Action a impact
                </Text>
                <OverflowBox>
                  <ul>
                    <CustomLi margin='16px'>
                      <Text size='16px' weight='400' height='20px'>
                        Planifier vos communications avec Phare
                      </Text>
                      <Text size='12px' weight='500' height='15px' color='grey'>
                        Court texte narratif
                      </Text>
                    </CustomLi>
                    <CustomLi margin='16px'>
                      <Text size='16px' weight='400' height='20px'>
                        Uploadez votre démographie
                      </Text>
                      <Text size='12px' weight='500' height='15px' color='grey'>
                        Court texte narratif
                      </Text>
                    </CustomLi>
                    <CustomLi margin='16px'>
                      <Text size='16px' weight='400' height='20px'>
                        Planifier vos communications avec Phare
                      </Text>
                      <Text size='12px' weight='500' height='15px' color='grey'>
                        Court texte narratif
                      </Text>
                    </CustomLi>
                    <CustomLi margin='16px'>
                      <Text size='16px' weight='400' height='20px'>
                        Uploadez votre démographie
                      </Text>
                      <Text size='12px' weight='500' height='15px' color='grey'>
                        Court texte narratif
                      </Text>
                    </CustomLi>
                    <CustomLi margin='16px'>
                      <Text size='16px' weight='400' height='20px'>
                        Planifier vos communications avec Phare
                      </Text>
                      <Text size='12px' weight='500' height='15px' color='grey'>
                        Court texte narratif
                      </Text>
                    </CustomLi>
                    <CustomLi margin='16px'>
                      <Text size='16px' weight='400' height='20px'>
                        Uploadez votre démographie
                      </Text>
                      <Text size='12px' weight='500' height='15px' color='grey'>
                        Court texte narratif
                      </Text>
                    </CustomLi>
                    <CustomLi margin='16px'>
                      <Text size='16px' weight='400' height='20px'>
                        Planifier vos communications avec Phare
                      </Text>
                      <Text size='12px' weight='500' height='15px' color='grey'>
                        Court texte narratif
                      </Text>
                    </CustomLi>
                    <CustomLi margin='16px'>
                      <Text size='16px' weight='400' height='20px'>
                        Uploadez votre démographie
                      </Text>
                      <Text size='12px' weight='500' height='15px' color='grey'>
                        Court texte narratif
                      </Text>
                    </CustomLi>
                  </ul>
                </OverflowBox>
              </Box>
              <Box primary isWrap width='calc(50% - 15px)' height='185px'>
                <Text size='18px' weight='500' height='22px'>
                  <MessageIcon />
                  Communication
                </Text>
                <Text
                  size='16px'
                  weight='400'
                  height='20px'
                  color='grey'
                  margin='0 0 0 35px'>
                  News actives
                </Text>
                <OverflowBox>
                  <ul>
                    <CustomLi margin='9px'>Campagne 1</CustomLi>
                    <CustomLi margin='9px'>Campagne 1</CustomLi>
                    <CustomLi margin='9px'>Campagne 1</CustomLi>
                    <CustomLi margin='9px'>Campagne 1</CustomLi>
                    <CustomLi margin='9px'>Campagne 1</CustomLi>
                    <CustomLi margin='9px'>Campagne 1</CustomLi>
                    <CustomLi margin='9px'>Campagne 1</CustomLi>
                  </ul>
                </OverflowBox>
              </Box>
              <Box primary isWrap width='calc(50% - 15px)' height='185px'>
                <Text size='18px' weight='500' height='22px'>
                  <CalendarIcon />
                  Employeur engagé
                </Text>
                <OverflowBox>
                  <ul>
                    <CustomLi margin='14px'>
                      <Text size='16px' weight='400' height='20px'>
                        Sensibilisation sensibilis - 19/04
                      </Text>
                      <Text
                        size='12px'
                        weight='500'
                        height='14px'
                        color='#5398DF'>
                        Ajouter au Google Agenda
                      </Text>
                    </CustomLi>
                    <CustomLi margin='14px'>
                      <Text size='16px' weight='400' height='20px'>
                        Sensibilisation sensibilis - 21/04
                      </Text>
                      <Text
                        size='12px'
                        weight='500'
                        height='14px'
                        color='#5398DF'>
                        Ajouter au Google Agenda
                      </Text>
                    </CustomLi>
                    <CustomLi margin='14px'>
                      <Text size='16px' weight='400' height='20px'>
                        Sensibilisation sensibilis - 23/04
                      </Text>
                      <Text
                        size='12px'
                        weight='500'
                        height='14px'
                        color='#5398DF'>
                        Ajouter au Google Agenda
                      </Text>
                    </CustomLi>
                    <CustomLi margin='14px'>
                      <Text size='16px' weight='400' height='20px'>
                        Sensibilisation sensibilis - 24/04
                      </Text>
                      <Text
                        size='12px'
                        weight='500'
                        height='14px'
                        color='#5398DF'>
                        Ajouter au Google Agenda
                      </Text>
                    </CustomLi>
                    <CustomLi margin='14px'>
                      <Text size='16px' weight='400' height='20px'>
                        Sensibilisation sensibilis - 26/04
                      </Text>
                      <Text
                        size='12px'
                        weight='500'
                        height='14px'
                        color='#5398DF'>
                        Ajouter au Google Agenda
                      </Text>
                    </CustomLi>
                    <CustomLi margin='14px'>
                      <Text size='16px' weight='400' height='20px'>
                        Sensibilisation sensibilis - 29/04
                      </Text>
                      <Text
                        size='12px'
                        weight='500'
                        height='14px'
                        color='#5398DF'>
                        Ajouter au Google Agenda
                      </Text>
                    </CustomLi>
                    <CustomLi margin='14px'>
                      <Text size='16px' weight='400' height='20px'>
                        Sensibilisation sensibilis - 30/04
                      </Text>
                      <Text
                        size='12px'
                        weight='500'
                        height='14px'
                        color='#5398DF'>
                        Ajouter au Google Agenda
                      </Text>
                    </CustomLi>
                  </ul>
                </OverflowBox>
              </Box>
              <Box primary isWrap width='calc(50% - 15px)' height='185px'>
                <BoxTitle>
                  <Text size='18px' weight='500' height='22px'>
                    <BookIcon />
                    Ressources RSE
                  </Text>
                  <NavigationContainer>
                    <NavigationButton
                      grey={currentPage === 1}
                      click={currentPage !== 1}
                      onClick={previousPage}>
                      <ArrowLeftIcon blue={currentPage === 1} />
                    </NavigationButton>

                    <NavigationButton
                      grey={currentPage === 4}
                      click={currentPage !== 4}
                      onClick={nextPage}>
                      <ArrowRightIcon blue={currentPage === 4} />
                    </NavigationButton>
                  </NavigationContainer>
                </BoxTitle>
                {currentPage === 1 ? (
                  <BookContainer>
                    <MiniBookIcon />
                    <BookDescription>
                      <Text size='16px' weight='500' height='20px'>
                        Book name 1
                      </Text>
                      <Text
                        size='12px'
                        weight='300'
                        height='16px'
                        color='grey'
                        margin='5px 0 0 0 '>
                        Configurez un ou plusieurs domaines de messagerie pour
                        permettre à tous vos pour permettre
                      </Text>
                    </BookDescription>
                  </BookContainer>
                ) : currentPage === 2 ? (
                  <BookContainer>
                    <MiniBookIcon />
                    <BookDescription>
                      <Text size='16px' weight='500' height='20px'>
                        Book name 2
                      </Text>
                      <Text
                        size='12px'
                        weight='300'
                        height='16px'
                        color='grey'
                        margin='5px 0 0 0 '>
                        Configurez un ou plusieurs domaines de messagerie pour
                        permettre à tous vos pour permettre
                      </Text>
                    </BookDescription>
                  </BookContainer>
                ) : currentPage === 3 ? (
                  <BookContainer>
                    <MiniBookIcon />
                    <BookDescription>
                      <Text size='16px' weight='500' height='20px'>
                        Book name 3
                      </Text>
                      <Text
                        size='12px'
                        weight='300'
                        height='16px'
                        color='grey'
                        margin='5px 0 0 0 '>
                        Configurez un ou plusieurs domaines de messagerie pour
                        permettre à tous vos pour permettre
                      </Text>
                    </BookDescription>
                  </BookContainer>
                ) : (
                  <BookContainer>
                    <MiniBookIcon />
                    <BookDescription>
                      <Text size='16px' weight='500' height='20px'>
                        Book name 4
                      </Text>
                      <Text
                        size='12px'
                        weight='300'
                        height='16px'
                        color='grey'
                        margin='5px 0 0 0 '>
                        Configurez un ou plusieurs domaines de messagerie pour
                        permettre à tous vos pour permettre
                      </Text>
                    </BookDescription>
                  </BookContainer>
                )}
              </Box>
            </WrapContainer>
          </ChartContainer>
          <AccountContainer>
            <Box primary>
              <AccountInfo>
                <AccountLogo />
                <AccountName>
                  <Text
                    size='18px'
                    height='22px'
                    weight='600'
                    margin='0 0 4px 0'>
                    Alexandre Pavlov
                  </Text>
                  <Text>SAS Cycover</Text>
                </AccountName>
              </AccountInfo>
              <GreyLine />
              <AccountDetails>
                <Text>
                  <GreySpan>Secteur :</GreySpan> Assurance
                </Text>
                <Text>
                  <GreySpan>SIRET :</GreySpan> 1234 4321 4567 43
                </Text>
                <Text>
                  <GreySpan>Nombre de salariés :</GreySpan> 1200
                </Text>
              </AccountDetails>
              <Button>Ma démographie</Button>
            </Box>
            <ProgressChart value={78} />
            <Box primary flexDirection={ratingData ? 'row' : 'column'}>
              {ratingData ? (
                <BoxSpaceBetween>
                  <Text size='14px' weight='600' height='16px'>
                    Satisfaction client
                  </Text>
                  <Empty
                    style={{ margin: '0' }}
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                  />
                </BoxSpaceBetween>
              ) : (
                <>
                  <ButtonRedirect />
                  <Text size='14px' weight='600' height='16px'>
                    Satisfaction client
                  </Text>
                  <Rating>
                    <Text size='35px' weight='400' height='42px'>
                      4.7
                    </Text>
                    <StarIcon />
                  </Rating>
                </>
              )}
            </Box>
            <Box primary>
              <Text size='14px' weight='500' height='17px'>
                Rapport d’impact RSE
              </Text>
              <ReportButtonContainer>
                <Button type='primary'>Télécharger</Button>
                <Button>Visualiser</Button>
              </ReportButtonContainer>
            </Box>
            <Box primary>
              <Text size='18px' weight='500' height='22px'>
                Référent
              </Text>
              <ReferentContainer>
                <Text>
                  <GreySpan>Prénom :</GreySpan> {tempDate?.first_name}
                </Text>
                <Text>
                  <GreySpan>Nom :</GreySpan> {tempDate?.second_name}
                </Text>
                <Text>
                  <GreySpan>Téléphone :</GreySpan> {tempDate?.phone}
                </Text>
                <Text>
                  <GreySpan>Email :</GreySpan> {tempDate?.needs}
                </Text>
              </ReferentContainer>
              <Button onClick={toggle}>Planifier un rendez-vous</Button>
            </Box>
          </AccountContainer>
        </DashboardBody>
      </DashboardContainer>
    </Container>
  );
};

export default Dashboard;
