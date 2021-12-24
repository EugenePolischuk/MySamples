import React from 'react';
import styled from 'styled-components';
import Container from '../../Components/Container';
import Box from '../../Components/Box';
import ContactBox from '../../Components/ContactBox';
import GradientBox from '../../Components/GradientBox';
import ScheduleMeetingBox from '../../Components/ScheduleMettingBox';
import ProfileTitle from '../../Components/ProfileTitle';
import { Sizes } from '../../assets/MediaQuerySizes';
import { ReactComponent as Key } from '../../assets/accompaniment_icons/key.svg';
import { ReactComponent as House } from '../../assets/accompaniment_icons/house.svg';
import { ReactComponent as BuyHome } from '../../assets/accompaniment_icons/buy_home.svg';
import { ReactComponent as MoneyHouse } from '../../assets/accompaniment_icons/money_house.svg';
import { ReactComponent as Bank } from '../../assets/accompaniment_icons/bank.svg';
import { ReactComponent as LoveHome } from '../../assets/accompaniment_icons/home_love.svg';
import { ReactComponent as ColorRoll } from '../../assets/accompaniment_icons/color_roll.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Housing: React.FC = () => {
    const isTablet = Sizes().isMobile;
    const isMobile = Sizes().isTablet;

    return (
        <Container>
            <Box isWrap padding='30px 25px' margin='0 0 0 14%' bgColor='#e5e5e5'>
                <ProfileTitle title='Accompagnement - Logement' />
                <PageBody>
                    <GradientBox title='Logement' colors={['#fe6c6c', '#fe464b']} icon={<House />} />
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0' jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<Key />}
                            title='Location'
                            bgColor='#ffefef'
                            text={<>
                                Recherche de location → <br/>
                                Mise en location et géstion → <br/>
                                Garant →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<BuyHome />}
                            title='Acquisition'
                            bgColor='#ffefef'
                            text={<>
                                Recherche de bien → <br/>
                                Notaire → <br/>
                                Architecte → <br/>
                                VEFA →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    </Box>
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0' jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<MoneyHouse />}
                            title='Vente'
                            bgColor='#ffefef'
                            text={<>
                                Accompagnement → <br/>
                                Estimation → <br/>
                                Diagnostic →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<Bank />}
                            title='Pret immo'
                            bgColor='#ffefef'
                            text={<>
                                Étude de faisabilité → <br/>
                                Rachat → <br/>
                                Négociation →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    </Box>
                    <Box isWrap flexDirection={isTablet ? 'column' : 'row'} padding='0' jsContent='space-between'>
                        <ScheduleMeetingBox
                            icon={<LoveHome />}
                            title='Assurance'
                            bgColor='#ffefef'
                            text={<>
                                Habitation → <br/>
                                Dommages ouvrages → <br/>
                                Pret →
                            </>}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                        <ScheduleMeetingBox
                            icon={<ColorRoll />}
                            title='Travaux/aménagements'
                            bgColor='#ffefef'
                            text={<>
                                Déménagement  → <br/>
                                Dispositifs d`aides à la rénovation → <br/>
                                Aménagements →
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

export default Housing;