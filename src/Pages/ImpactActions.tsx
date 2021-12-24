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
        <Header title='Action à impact' />
        <PageBody>
          <NotifySection>
            <Text margin='15px'>
              Afin d’augmenter votre impact RSE (prévention des risques psychosociaux, qualité de vie au
              travail,
              économies pour vos salariés, engagement des collaborateurs...), et de maximiser les retombées,
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
                Mise à disposition de l’outil pour tous les collaborateurs
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous configuré un ou plusieurs noms de domaines de messagerie ?
              </Text>
              <Button style={SuccessButtonStyle}>
                Terminé
              </Button>
              <Button type='ghost'>
                Passer à l’action
              </Button>
            </ButtonBox>
            <MarkedBox>
              <Text color='white' margin='0'>
                Démographie de l’entreprise
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous uploadé votre fichier collaborateurs ?
              </Text>
              <Button style={WarningButtonStyle}>
                Renseigné
              </Button>
              <Button type='primary'>
                Passer à l’action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                Configurez un ou plusieurs domaines de messagerie pour permettre à tous vos collaborateurs
                détenteurs
                d’un compte de messagerie d’accéder à l’interface Phare. En configurant ce réglage, vous
                maximisez le
                nombre d’utilisateurs et décuplez les possibilités d’accompagner tous vos collaborateurs.
              </Text>
            </Recs>
            <MarkedBox>
              <Text color='white' margin='0'>
                Nouveaux collaborateurs
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Les nouveaux collaborateurs (sur les 3 derniers mois) ont-ils été ajoutés au fichier pour
                bénéficier de
                l’interface Phare ?
              </Text>
              <Button style={DangerButtonStyle}>
                Non mis en œuvre
              </Button>
              <Button type='primary'>
                Passer à l’action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                Regroupez les nouveaux collaborateurs dans un fichier et uploadez le à la démographie
                actuelle pour leur
                permettre de bénéficier de l’accès à la plateforme Phare.
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
                Avez-vous affiché les informations obligatoires à destination de vos collaborateurs ?
              </Text>
              <Button style={SuccessButtonStyle}>
                Terminé
              </Button>
              <Button type='ghost'>
                Passer à l’action
              </Button>
            </ButtonBox>
            <MarkedBox>
              <Text color='white' margin='0'>
                Utilisation des communications
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Diffusez-vous des communications RSE à destination de vos collaborateurs ?
              </Text>
              <Button style={DangerButtonStyle}>
                Non mis en œuvre
              </Button>
              <Button type='primary'>
                Passer à l’action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                Lancez des campagnes de communication RSE directement via l’outil Phare et permettez à
                tous les
                collaborateurs de les découvrir sur leur espace personnel. Vous pouvez aussi communiquer
                indépendamment
                par email à propos de la plateforme pour maximiser l’engagement des collaborateurs.
              </Text>
            </Recs>
          </CommuniSection>
          <RecsSection>
            <h3>
              Recommandations
            </h3>
            <MarkedBox>
              <Text color='white' margin='0'>
                Sessions de sensibilisation, permanences d’experts
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous planifié des sessions collectives de sensibilisation et de permanences pour vos
                collaborateurs
                ?
              </Text>
              <Button style={DangerButtonStyle}>
                Non mis en œuvre
              </Button>
              <Button type='primary'>
                Passer à l’action
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
                permettez de monter en compétence et de pouvoir répondre à leurs problématiques
                personnelles. Grâce aux
                indicateurs, vous pouvez cerner leurs préoccupations et planifier des interventions
                d’experts selon les
                différents besoins.
              </Text>
            </Recs>
            <MarkedBox>
              <Text color='white' margin='0'>
                Protection des collaborateurs
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Des modules de protection complémentaires peuvent être importants pour vos salariés
                suivant votre
                activité.
                Les avez-vous découverts ?
              </Text>
              <Button style={WarningButtonStyle}>
                Renseigné
              </Button>
              <Button type='primary'>
                Passer à l’action
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
                supplémentaires. Avez vous pris connaissance des différentes solutions pour protéger vos
                collaborateurs
                ? Phare peut vous aider à découvrir plusieurs options de protection.
              </Text>
            </Recs>
            <MarkedBox>
              <Text color='white' margin='0'>
                Entretiens Référent
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous planifié vos 2 entretiens annuels pour évaluer votre dispositf Phare ?
              </Text>
              <Button style={DangerButtonStyle}>
                Non mis en œuvre
              </Button>
              <Button type='primary'>
                Passer à l’action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                L’équipe Phare est à votre écoute et vous accompagne pour optimiser le dispositif et
                impacter vos
                collaborateurs au maximum. Planifiez vos rendez-vous avec votre référent pour discuter
                ensemble des
                actions à venir et des résultats obtenus.
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
                Avez-vous recommandé la plateforme Phare à d’autres entreprises ou CSE ?
              </Text>
              <Button style={SuccessButtonStyle}>
                Terminé
              </Button>
              <Button type='ghost'>
                Passer à l’action
              </Button>
            </ButtonBox>
            <MarkedBox>
              <Text color='white' margin='0'>
                Rapport Impact RSE
              </Text>
            </MarkedBox>
            <ButtonBox>
              <Text width='48%' margin='0'>
                Avez-vous visualisé votre rapport d’impact RSE ?
              </Text>
              <Button style={DangerButtonStyle}>
                Non mis en œuvre
              </Button>
              <Button type='primary'>
                Passer à l’action
              </Button>
            </ButtonBox>
            <Recs>
              <h4>
                Recommandations
              </h4>
              <hr />
              <Text margin='20px 0 0 0'>
                Visualisez ou téléchargez votre rapport personnalisé pour avoir une vue d’ensemble de
                votre impact RSE.
                Grâce à ce rapport, vous pourrez optimiser vos actions et définir de nouveaux objectifs
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