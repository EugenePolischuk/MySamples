import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Button from '../Components/Button';
import Box from '../Components/Box';
import Container from '../Components/Container';
import Text from '../Components/Text';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  span {
    color: #696969;
  }
`;

const InfoBox = styled.div`
  border-radius: 5px;
  padding: 20px;
  background: white;
  
  &:first-child {
    width: 66%;
  }
  &:last-child {
    width: 31%;
  }
`;

const PrivacyPolicy: React.FC = () => {
    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Politique de confidentialité'/>
                <PageBody>
                    <InfoBox>
                        <h3>
                            Qu’est-ce qu’un cookie ?
                        </h3>
                        <Text margin='0 0 16px 0'>
                            L’expression « jardin à la française » désigne un style de jardin raffiné et très organisé. Ses caractéristiques : des formes symétriques, des effets géométriques et des jeux d’eau presque magiques ! Au détour des allées et des pelouses impeccables surgissent des fontaines extravagantes. Les buis sculptés cachent des statuts inspirés de l’Antiquité. Véritable architecture végétale, le jardin à la française symbolise la domestication de la nature.
                            <br/>
                            <br/>
                            C’est Le Nôtre, le jardinier de Louis XIV qui popularise en France ce style d’origine italienne. Après avoir aménagé les jardins du Château de Versailles il est imité dans toute l’Europe.
                            <br/>
                            Qu’est-ce qu’un cookie ?
                        </Text>
                        <h3>
                            Qu`est-ce qu-un cookie ?
                        </h3>
                        <Text margin='0 0 16px 0'>
                            <b>1. </b>C’est Le Nôtre, le jardinier de Louis XIV qui popularise en France ce style d’origine italienne. Après avoir aménagé les jardins du Château de Versailles il est imité dans toute l’Europe.
                            <br/>
                            <b>2. </b>C’est Le Nôtre, le jardinier de Louis XIV qui popularise en France ce style d’origine italienne. Après avoir aménagé les jardins du Château de Versailles il est imité dans toute l’Europe.
                            <br/>
                            Qu’est-ce qu’un cookie ?
                        </Text>
                        <h3>
                            Qu`est-ce qu-un cookie ?
                        </h3>
                        <Text margin='0 0 16px 0'>
                            C’est Le Nôtre, le jardinier de Louis XIV qui popularise en France ce style d’origine italienne. Après avoir aménagé les jardins du Château de Versailles il est imité dans toute l’Europe.
                            <br/>
                            <br/>
                            Malgré son apparence rigoureuse le jardin à la française n’est pas dénué de la fantaisie. Il peut jouer avec la perspective, les lignes et les motifs. Aujourd’hui encore, on entretient les jardins de ce style dans plusieurs châteaux. On les oppose souvent aux parcs à l’anglaise, lieux romantiques, tout en courbes et en foisonnement végétal. Et au fait, quels sont les autres types de jardins ? De nombreuses traditions se sont développées au fil du temps et dans les différentes régions du monde. Jardin médiéval dans les monastères européens, jardin zen en Asie, jardin mural dans les villes… Il y en a pour tous les goûts.
                            <br/>
                            <br/>
                            Et toi, quel style de jardin préfères-tu ? A moins que tu ne préfères la nature à l’état sauvage. L’expression « jardin à la française » désigne un style de jardin raffiné et très organisé. Ses caractéristiques : des formes symétriques, des effets géométriques et des jeux d’eau presque magiques ! Au détour des allées et des pelouses impeccables surgissent des fontaines extravagantes. Les buis sculptés cachent des statuts inspirés de l’Antiquité. Véritable architecture végétale, le jardin à la française symbolise la domestication de la nature.
                            <br/>
                            <br/>
                            C’est Le Nôtre, le jardinier de Louis XIV qui popularise en France ce style d’origine italienne. Après avoir aménagé les jardins du Château de Versailles il est imité dans toute l’Europe.
                            <br/>
                            <br/>
                            Malgré son apparence rigoureuse le jardin à la française n’est pas dénué de la fantaisie. Il peut jouer avec la perspective, les lignes et les motifs. Aujourd’hui encore, on entretient les jardins de ce style dans plusieurs châteaux. On les oppose souvent aux parcs à l’anglaise, lieux romantiques, tout en courbes et en foisonnement végétal. Et au fait, quels sont les autres types de jardins ? De nombreuses traditions se sont développées au fil du temps et dans les différentes régions du monde. Jardin médiéval dans les monastères européens, jardin zen en Asie, jardin mural dans les villes… Il y en a pour tous les goûts.
                            <br/>
                            <br/>
                            Et toi, quel style de jardin préfères-tu ? A moins que tu ne préfères la nature à l’état sauvage.
                        </Text>
                    </InfoBox>
                    <InfoBox>
                        <h3>
                            Référent
                        </h3>
                        <Text margin='0 0 16px 0'>
                            <span>Prénom :</span> Marc
                        </Text>
                        <Text margin='0 0 16px 0'>
                            <span>Nom :</span> Jean
                        </Text>
                        <Text margin='0 0 16px 0'>
                            <span>Téléphone :</span> 33 1 42 96 70 34
                        </Text>
                        <Text margin='0 0 16px 0'>
                            <span>Email :</span> example@gmail.com
                        </Text>
                        <Button style={{width: '100%'}}>
                            Planifier un rendez-vous
                        </Button>
                    </InfoBox>
                </PageBody>
            </Box>
        </Container>
    );
};

export default PrivacyPolicy;