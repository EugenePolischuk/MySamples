import React from 'react';
import styled from 'styled-components';
import Container from '../../Components/Container';
import Box from '../../Components/Box';
import ContactBox from '../../Components/ContactBox';
import GradientBox from '../../Components/GradientBox';
import ScheduleMeetingBox from '../../Components/ScheduleMettingBox';
import ProfileTitle from '../../Components/ProfileTitle';
import { Sizes } from '../../assets/MediaQuerySizes';
import { ReactComponent as Leaf } from '../../assets/accompaniment_icons/leaf.svg';
import { ReactComponent as Car } from '../../assets/accompaniment_icons/eco_car.svg';
import { ReactComponent as Forest } from '../../assets/accompaniment_icons/forest.svg';
import { ReactComponent as Calendar } from '../../assets/accompaniment_icons/calendar.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Ecology: React.FC = () => {
    const isTablet = Sizes().isMobile;
    const isMobile = Sizes().isTablet;

    return (
        <Container>
            <Box isWrap padding='30px 25px' margin='0 0 0 14%' bgColor='#e5e5e5'>
                <ProfileTitle title='Accompagnement - Ecology' />
                <PageBody>
                    <GradientBox title='Ecologie' colors={['#78d85b', '#5ab83d']} icon={<Leaf />} />
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0' jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Car />}
                            title='Mobilité verte'
                            bgColor='#f2fbef'
                            text={<>
                                Forfaits mobilité durable (conseil) → <br/>
                                Eco-tourisme → <br/>
                                Vélos éléctriques → <br/>
                                Bornes et voiture éléctriques → <br/>
                                Subventions et aides →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<Forest />}
                            title='Habitat vert'
                            bgColor='#f2fbef'
                            text={<>
                                Panneaux solaires → <br/>
                                Isolation thermique → <br/>
                                Récuperateur d`eau → <br/>
                                Rénovation énergétique →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    </Box>
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0' jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Calendar />}
                            title='Gestes au quotidien'
                            bgColor='#f2fbef'
                            text={<>
                                Épurateurs d`air éco-responsables → <br/>
                                Recyclage/vieilles affaires → <br/>
                                Consommation responsable gaspillage →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<Forest />}
                            title='Suivi impact'
                            bgColor='#f2fbef'
                            text={<>
                                Application de suivi gratuite →
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

export default Ecology;