import React, {CSSProperties} from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Button from '../Components/Button';
import { BellFilled } from '@ant-design/icons';
import Box from '../Components/Box';
import Container from '../Components/Container';
import Text from '../Components/Text';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const SectionTemplate = styled.div`
  padding: 20px;
  margin-top: 30px;
  border-radius: 2px;
  background: white;

  h3 {
    font-weight: 400;
    margin: 0 0 30px 0;
  }
`;

const NotifySection = styled.div`
  padding: 10px;
  background-color: white;
  margin-bottom: 30px;
  border-radius: 2px;
`;

// todo check if should be buttons
const NotifyBtns = styled.div`
  margin: 20px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 33%;
  }
`;

const BellIcon = styled(BellFilled)`
  cursor: pointer;
  color: #6B7885;
`;

const CollabsSection = styled(SectionTemplate)``;

const MarkedBox = styled.div`
  padding: 15px;
  background-color: #6B7885;
  border-radius: 5px;
`;

const ButtonBox = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Recs = styled.div`
  padding: 15px;
  background-color: #e4ffef;
  border-radius: 5px;
  margin-bottom: 30px;

  h4 {
    font-weight: 500;
    margin: 0 0 20px 0;
  }
`;

const SuccessButtonStyle:CSSProperties = {
  width: '150px',
  backgroundColor: '#e4ffef',
  color: '#78d85b',
  border: 'none'
}

const WarningButtonStyle:CSSProperties = {
  width: '150px',
  backgroundColor: '#fff3d5',
  color: '#febd38',
  border: 'none'
}

const DangerButtonStyle:CSSProperties = {
  backgroundColor: '#ffe7e7',
  color: '#fe464b',
  border: 'none'
}

const CommuniSection = styled(SectionTemplate)``;

const RecsSection = styled(SectionTemplate)``;

const ImpactSection = styled(SectionTemplate)``;

const ImpactActions: React.FC = () => {
  return (
    <Container>
      <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
        <Header title='Action ?? impact' />
        <PageBody>
          <NotifySection>
            <Text margin='15px'>
              Afin d???augmenter votre impact RSE (pr??vention des risques psychosociaux, qualit?? de vie au
              travail,
              ??conomies pour vos salari??s, engagement des collaborateurs...), et de maximiser les retomb??es,
              nous vous
              conseillons de suivre les recommandations ci-dessous.
            </Text>
            <NotifyBtns>
              <div>
                <BellIcon />
                Nouveaux collaborateurs
              </div>
              <div>
                <BellIcon />
                Nouveaux collaborateurs
              </div>
              <div>
                <BellIcon />
                Nouveaux collaborateurs
              </div>
            </NotifyBtns>
          </NotifySection>
          <CollabsSection>
            <h3>
              Collaborateurs
            </h3>
            <MarkedBox>
              <Text color='white' margin='0'>
                Mise ?? disposition de l???outil pour tous les collaborateurs
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous configur?? un ou plusieurs noms de domaines de messagerie ?
              </Text>
              <Button style={SuccessButtonStyle}>
                Termin??
              </Button>
              <Button type='ghost'>
                Passer ?? l???action
              </Button>
            </ButtonBox>
            <MarkedBox>
              <Text color='white' margin='0'>
                D??mographie de l???entreprise
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous upload?? votre fichier collaborateurs ?
              </Text>
              <Button style={WarningButtonStyle}>
                Renseign??
              </Button>
              <Button type='primary'>
                Passer ?? l???action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                Configurez un ou plusieurs domaines de messagerie pour permettre ?? tous vos collaborateurs
                d??tenteurs
                d???un compte de messagerie d???acc??der ?? l???interface Phare. En configurant ce r??glage, vous
                maximisez le
                nombre d???utilisateurs et d??cuplez les possibilit??s d???accompagner tous vos collaborateurs.
              </Text>
            </Recs>
            <MarkedBox>
              <Text color='white' margin='0'>
                Nouveaux collaborateurs
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Les nouveaux collaborateurs (sur les 3 derniers mois) ont-ils ??t?? ajout??s au fichier pour
                b??n??ficier de
                l???interface Phare ?
              </Text>
              <Button style={DangerButtonStyle}>
                Non mis en ??uvre
              </Button>
              <Button type='primary'>
                Passer ?? l???action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                Regroupez les nouveaux collaborateurs dans un fichier et uploadez le ?? la d??mographie
                actuelle pour leur
                permettre de b??n??ficier de l???acc??s ?? la plateforme Phare.
              </Text>
            </Recs>
          </CollabsSection>
          <CommuniSection>
            <h3>
              Communication
            </h3>
            <MarkedBox>
              <Text color='white' margin='0'>
                Communications obligatoires
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous affich?? les informations obligatoires ?? destination de vos collaborateurs ?
              </Text>
              <Button style={SuccessButtonStyle}>
                Termin??
              </Button>
              <Button type='ghost'>
                Passer ?? l???action
              </Button>
            </ButtonBox>
            <MarkedBox>
              <Text color='white' margin='0'>
                Utilisation des communications
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Diffusez-vous des communications RSE ?? destination de vos collaborateurs ?
              </Text>
              <Button style={DangerButtonStyle}>
                Non mis en ??uvre
              </Button>
              <Button type='primary'>
                Passer ?? l???action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                Lancez des campagnes de communication RSE directement via l???outil Phare et permettez ??
                tous les
                collaborateurs de les d??couvrir sur leur espace personnel. Vous pouvez aussi communiquer
                ind??pendamment
                par email ?? propos de la plateforme pour maximiser l???engagement des collaborateurs.
              </Text>
            </Recs>
          </CommuniSection>
          <RecsSection>
            <h3>
              Recommandations
            </h3>
            <MarkedBox>
              <Text color='white' margin='0'>
                Sessions de sensibilisation, permanences d???experts
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous planifi?? des sessions collectives de sensibilisation et de permanences pour vos
                collaborateurs
                ?
              </Text>
              <Button style={DangerButtonStyle}>
                Non mis en ??uvre
              </Button>
              <Button type='primary'>
                Passer ?? l???action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                En planifiant des sessions de sensibilisation et de formation pour vos collaborateurs,
                vous leur
                permettez de monter en comp??tence et de pouvoir r??pondre ?? leurs probl??matiques
                personnelles. Gr??ce aux
                indicateurs, vous pouvez cerner leurs pr??occupations et planifier des interventions
                d???experts selon les
                diff??rents besoins.
              </Text>
            </Recs>
            <MarkedBox>
              <Text color='white' margin='0'>
                Protection des collaborateurs
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Des modules de protection compl??mentaires peuvent ??tre importants pour vos salari??s
                suivant votre
                activit??.
                Les avez-vous d??couverts ?
              </Text>
              <Button style={WarningButtonStyle}>
                Renseign??
              </Button>
              <Button type='primary'>
                Passer ?? l???action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                Optmisez la protection de vos collaborateurs en leur proposant des assurances et des
                garanties
                suppl??mentaires. Avez vous pris connaissance des diff??rentes solutions pour prot??ger vos
                collaborateurs
                ? Phare peut vous aider ?? d??couvrir plusieurs options de protection.
              </Text>
            </Recs>
            <MarkedBox>
              <Text color='white' margin='0'>
                Entretiens R??f??rent
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous planifi?? vos 2 entretiens annuels pour ??valuer votre dispositf Phare ?
              </Text>
              <Button style={DangerButtonStyle}>
                Non mis en ??uvre
              </Button>
              <Button type='primary'>
                Passer ?? l???action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                L?????quipe Phare est ?? votre ??coute et vous accompagne pour optimiser le dispositif et
                impacter vos
                collaborateurs au maximum. Planifiez vos rendez-vous avec votre r??f??rent pour discuter
                ensemble des
                actions ?? venir et des r??sultats obtenus.
              </Text>
            </Recs>
          </RecsSection>
          <ImpactSection>
            <h3>
              IMPACT +
            </h3>
            <MarkedBox>
              <Text color='white' margin='0'>
                Recommandation
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous recommand?? la plateforme Phare ?? d???autres entreprises ou CSE ?
              </Text>
              <Button style={SuccessButtonStyle}>
                Termin??
              </Button>
              <Button type='ghost'>
                Passer ?? l???action
              </Button>
            </ButtonBox>
            <MarkedBox>
              <Text color='white' margin='0'>
                Rapport Impact RSE
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous visualis?? votre rapport d???impact RSE ?
              </Text>
              <Button style={DangerButtonStyle}>
                Non mis en ??uvre
              </Button>
              <Button type='primary'>
                Passer ?? l???action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                Visualisez ou t??l??chargez votre rapport personnalis?? pour avoir une vue d???ensemble de
                votre impact RSE.
                Gr??ce ?? ce rapport, vous pourrez optimiser vos actions et d??finir de nouveaux objectifs
                RSE.
              </Text>
            </Recs>
          </ImpactSection>
        </PageBody>
      </Box>
    </Container>
  );


};

export default ImpactActions;