import React from 'react';
import styled from 'styled-components';
import Container from '../../Components/Container';
import Box from '../../Components/Box';
import GradientBox from '../../Components/GradientBox';
import ScheduleMeetingBox from '../../Components/ScheduleMettingBox';
import ProfileTitle from '../../Components/ProfileTitle';
import ContactBox from '../../Components/ContactBox';
import { Sizes } from "../../assets/MediaQuerySizes";
import { ReactComponent as Boy } from '../../assets/accompaniment_icons/boy.svg';
import { ReactComponent as Pram } from '../../assets/accompaniment_icons/pram.svg';
import { ReactComponent as Bag } from '../../assets/accompaniment_icons/bag.svg';
import { ReactComponent as Rings } from '../../assets/accompaniment_icons/rings.svg';
import { ReactComponent as Chair } from '../../assets/accompaniment_icons/rocking_chair.svg';
import { ReactComponent as Grave } from '../../assets/accompaniment_icons/grave.svg';
import { ReactComponent as Med } from '../../assets/accompaniment_icons/med.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Family: React.FC = () => {
    const isTablet = Sizes().isMobile;
    const isMobile = Sizes().isTablet;

    return (
        <Container>
            <Box isWrap padding='30px 25px' margin='0 0 0 14%' bgColor='#e5e5e5'>
                <ProfileTitle title='Accompagnement - Famille' />
                <PageBody>
                    <GradientBox title='Famille' colors={['#ffd572', '#febd38']} icon={<Boy />} />
                    <Box isWrap padding='0' flexDirection={isTablet ? 'column' : 'row'} jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Pram />}
                            title='Naissance'
                            bgColor='#fff9ee'
                            text={<>
                                Maternité → <br/>
                                Coaching paternité → <br/>
                                Demarches → <br/>
                                Renseignements →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<Bag />}
                            title='Scolarité/enfant'
                            bgColor='#fff9ee'
                            text={<>
                                Soutien scolaire →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    </Box>
                    <Box isWrap padding='0' flexDirection={isTablet ? 'column' : 'row'} jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Rings />}
                            title='Mariage/divorce'
                            bgColor='#fff9ee'
                            text={<>
                                Mariage → <br/>
                                Divorce →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<Chair />}
                            title='Vieillesse'
                            bgColor='#fff9ee'
                            text={<>
                                Accompagnement EPHAD →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    </Box>
                    <Box isWrap padding='0' flexDirection={isTablet ? 'column' : 'row'} jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Grave />}
                            title='Décès'
                            bgColor='#fff9ee'
                            text={<>
                                Pompes funèbres →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<Med />}
                            title='Santé/handicap'
                            bgColor='#fff9ee'
                            text={<>
                                Accidant corporel → <br/>
                                Consultation médicale →
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

export default Family;