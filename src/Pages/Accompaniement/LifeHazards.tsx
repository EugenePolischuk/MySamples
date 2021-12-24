import React from 'react';
import styled from 'styled-components';
import Container from '../../Components/Container';
import Box from '../../Components/Box';
import ContactBox from '../../Components/ContactBox';
import GradientBox from '../../Components/GradientBox';
import ScheduleMeetingBox from '../../Components/ScheduleMettingBox';
import ProfileTitle from '../../Components/ProfileTitle';
import { Sizes } from '../../assets/MediaQuerySizes';
import { ReactComponent as MedBox } from '../../assets/accompaniment_icons/med_box.svg';
import { ReactComponent as Taxes } from '../../assets/accompaniment_icons/taxes.svg';
import { ReactComponent as Bomb } from '../../assets/accompaniment_icons/bomb.svg';
import { ReactComponent as Shield } from '../../assets/accompaniment_icons/shield.svg';
import { ReactComponent as Hammer } from '../../assets/accompaniment_icons/hammer.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const LifeHazards: React.FC = () => {
    const isTablet = Sizes().isMobile;
    const isMobile = Sizes().isTablet;

    return (
        <Container>
            <Box isWrap padding='30px 25px' margin='0 0 0 14%' bgColor='#e5e5e5'>
                <ProfileTitle title='Accompagnement - Aléas de la vie' />
                <PageBody>
                    <GradientBox title='Aléas de la vie' colors={['#b09fff', '#8d79f6']} icon={<MedBox />} />
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0' jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Taxes />}
                            title='Impots'
                            bgColor='#f2fbef'
                            text={<>
                                Impôts/démarches administratives → <br/>
                                Redressement fiscal → <br/>
                                Pinel et autres →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<Bomb />}
                            title='Surendettement'
                            bgColor='#f2fbef'
                            text={<>
                                Accompagnement →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    </Box>
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0' jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Shield />}
                            title='Securité individuelle'
                            bgColor='#f2fbef'
                            text={<>
                                Securité de personne →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<Hammer />}
                            title='Litiges'
                            bgColor='#f2fbef'
                            text={<>
                                Soutien juridique →
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

export default LifeHazards;