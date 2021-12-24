import React from 'react';
import styled from 'styled-components';
import Container from '../../Components/Container';
import Box from '../../Components/Box';
import ContactBox from '../../Components/ContactBox';
import GradientBox from '../../Components/GradientBox';
import ScheduleMeetingBox from '../../Components/ScheduleMettingBox';
import ProfileTitle from '../../Components/ProfileTitle';
import { Sizes } from '../../assets/MediaQuerySizes';
import { ReactComponent as Shield } from '../../assets/accompaniment_icons/shield_pink.svg';
import { ReactComponent as Code } from '../../assets/accompaniment_icons/binary_code.svg';
import { ReactComponent as Pasword } from '../../assets/accompaniment_icons/password.svg';
import { ReactComponent as Encrypted } from '../../assets/accompaniment_icons/encrypted.svg';
import { ReactComponent as Translate } from '../../assets/accompaniment_icons/translate.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const DigitalLife: React.FC = () => {
    const isTablet = Sizes().isMobile;
    const isMobile = Sizes().isTablet;

    return (
        <Container>
            <Box isWrap padding='30px 25px' margin='0 0 0 14%' bgColor='#e5e5e5'>
                <ProfileTitle title='Accompagnement - Vie numérique' />
                <PageBody>
                    <GradientBox title='Vie numérique' colors={['#fdb2ff', '#f77cf2']} icon={<Shield />} />
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0' jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Code />}
                            title='Problème numérique'
                            bgColor='#fef3fe'
                            text={<>
                                Cyber-attaque  → <br/>
                                Perte de données → <br/>
                                Problème matériel  → <br/>
                                Harcelement numérique →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<Pasword />}
                            title='Securité numérique'
                            bgColor='#fef3fe'
                            text={<>
                                Cyber assurance → <br/>
                                Disque dur → <br/>
                                Antivirus  → <br/>
                                Clé usb intelligente  → <br/>
                                Back up  →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    </Box>
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0'jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Encrypted />}
                            title='Protection des données'
                            bgColor='#fef3fe'
                            text={<>
                                CNIL → <br/>
                                RGPD →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<Translate />}
                            title='Bonnes pratiques'
                            bgColor='#fef3fe'
                            text={<>
                                Conseils →
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

export default DigitalLife;