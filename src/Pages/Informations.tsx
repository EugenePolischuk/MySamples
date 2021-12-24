import React from 'react';
import styled from 'styled-components';
import Box from '../Components/Box';
import Container from '../Components/Container';
import ProfileTitle from '../Components/ProfileTitle';
import Text from '../Components/Text';
import { Sizes } from '../assets/MediaQuerySizes';

import {
    ClockCircleOutlined,
    CoffeeOutlined,
    AuditOutlined,
    MedicineBoxOutlined,
    TeamOutlined
} from '@ant-design/icons';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  background: white;
  border-radius: 15px;
`;

const WrapContainer = styled.div`
  & > div {
    flex-wrap: wrap;
  }
`;

const IconContainer = styled.div`
  height: 40px;
  width: 50px;
  border-radius: 50%;
  background-color: #eef5fc;
  color: #579be1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 20px;
`;

const Informations: React.FC = () => {
    const isMobile = Sizes().isTablet;

    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <ProfileTitle title='Mon entreprise' />
                <PageBody>
                    <Text weight='500' size='17px'>
                        Informations
                    </Text>
                    <WrapContainer>
                        <Box isWrap padding='0' flexDirection={isMobile ? 'column' : 'row'}>
                            <Box isWrap width={isMobile ? '100%' : '24%'} padding='0' margin='20px 0 0 0' flexDirection='row'>
                                <IconContainer>
                                    <MedicineBoxOutlined />
                                </IconContainer>
                                <Box isWrap padding='0'>
                                    <h4>
                                        Médecine du Travail
                                    </h4>
                                    <Text>
                                        Disponible 5j/5 <br/>
                                        01 xx xx xx xx
                                    </Text>
                                </Box>
                            </Box>
                            <Box isWrap width={isMobile ? '100%' : '24%'} padding='0' margin='20px 0 0 0' flexDirection='row'>
                                <IconContainer>
                                    <TeamOutlined />
                                </IconContainer>
                                <Box isWrap padding='0'>
                                    <h4>
                                        Convention collective
                                    </h4>
                                    <Text>
                                        Visualiser <br/>
                                        Télécharger
                                    </Text>
                                </Box>
                            </Box>
                            <Box isWrap width={isMobile ? '100%' : '24%'} padding='0' margin='20px 0 0 0' flexDirection='row'>
                                <IconContainer>
                                    <AuditOutlined />
                                </IconContainer>
                                <Box isWrap padding='0'>
                                    <h4>
                                        Permanences CSE
                                    </h4>
                                    <Text>
                                        Disponible 5j/5 <br/>
                                        01 xx xx xx xx
                                    </Text>
                                </Box>
                            </Box>
                            <Box isWrap width={isMobile ? '100%' : '24%'} padding='0' margin='20px 0 0 0' flexDirection='row'>
                                <IconContainer>
                                    <CoffeeOutlined />
                                </IconContainer>
                                <Box isWrap padding='0'>
                                    <h4>
                                        Congés payés
                                    </h4>
                                </Box>
                            </Box>
                            <Box isWrap width={isMobile ? '100%' : '24%'} padding='0' margin='20px 0 0 0' flexDirection='row'>
                                <IconContainer>
                                    <ClockCircleOutlined />
                                </IconContainer>
                                <Box isWrap padding='0'>
                                    <h4>
                                        Horaires collectifs de travail
                                    </h4>
                                    <Text>
                                        Lun-Ven : 10:00 – 19:00 <br/>
                                        Sam - Dim : repos
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </WrapContainer>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Informations;