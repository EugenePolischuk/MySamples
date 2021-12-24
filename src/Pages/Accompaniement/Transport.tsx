import React from 'react';
import styled from 'styled-components';
import Container from '../../Components/Container';
import Box from '../../Components/Box';
import ContactBox from '../../Components/ContactBox';
import GradientBox from '../../Components/GradientBox';
import ScheduleMeetingBox from '../../Components/ScheduleMettingBox';
import ProfileTitle from '../../Components/ProfileTitle';
import { Sizes } from '../../assets/MediaQuerySizes';
import { ReactComponent as Car } from '../../assets/accompaniment_icons/car.svg';
import { ReactComponent as Tablet } from '../../assets/accompaniment_icons/tablet.svg';
import { ReactComponent as EcoCar } from '../../assets/accompaniment_icons/eco_car_blue.svg';
import { ReactComponent as Card } from '../../assets/accompaniment_icons/card.svg';
import { ReactComponent as CarCrush } from '../../assets/accompaniment_icons/car_crash.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Transport: React.FC = () => {
    const isTablet = Sizes().isMobile;
    const isMobile = Sizes().isTablet;

    return (
        <Container>
            <Box isWrap padding='30px 25px' margin='0 0 0 14%' bgColor='#e5e5e5'>
                <ProfileTitle title='Accompagnement - Transport' />
                <PageBody>
                    <GradientBox title='Transport' colors={['#90c6fd', '#5398df']} icon={<Car />} />
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0' jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Tablet />}
                            title='Demarches'
                            bgColor='#f3f8fe'
                            text={<>
                                Assurance Auto - Moto → <br/>
                                Controle technique → <br/>
                                Carte grise → <br/>
                                Immatriculation →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<EcoCar />}
                            title='Mobilité verte'
                            bgColor='#f3f8fe'
                            text={<>
                                Forfaits mobilité durable (conseil) → <br/>
                                Vélos éléctriques → <br/>
                                Bornes et voiture éléctriques → <br/>
                                Subventions et aides →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    </Box>
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0' jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Card />}
                            title='Permis de conduire'
                            bgColor='#f3f8fe'
                            text={<>
                                Permis de conduire → <br/>
                                Récupération des points →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<CarCrush />}
                            title='Accident de la route'
                            bgColor='#f3f8fe'
                            text={<>
                                Accident au travail → <br/>
                                Responsabilité sinistre → <br/>
                                Boitier secours intelligent → <br/>
                                Application motard securité → <br/>
                                E-constat gratuit →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    </Box>
                    <ContactBox isMobile={isMobile} />
                </PageBody>
            </Box>
        </Container>
    );
};

export default Transport;