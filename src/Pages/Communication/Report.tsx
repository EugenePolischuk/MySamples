import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Box from '../../Components/Box';
import Container from '../../Components/Container';
import Text from '../../Components/Text';
import {ThunderboltFilled} from '@ant-design/icons';
import { ReactComponent as DocsImg } from '../../assets/docs.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  
  &:nth-child(2) {
    margin-top: 30px;
  }
`;

const InfoBox = styled.div`
  background: white;
  width: 32%;
  padding: 15px;
  border-radius: 2px;
  min-height: 180px;

  h5 {
    font-weight: 600;
    margin-top: 0;
  }
`;

const Col = styled.div`
  width: 49%;
  padding: 20px;
  background: white;
  border-radius: 2px;

  .btn {
    padding: 0;
  }
  h4 {
    font-weight: 600;
    margin-top: 0;
  }
  span:not(button span) {
    margin-right: 10px;
    color: #FFD572;
  }
`;

const ImgBox = styled.div`
  background: white;
  width: 49%;
  border-radius: 2px;
`;

const Report: React.FC = () => {
    return (
        <Container>
            <Box bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='CommPhare - Report d’Impact'/>
                <PageBody>
                    <FlexBox>
                        <Col>
                            <h4>
                                Report d’Impact
                            </h4>
                            <Text margin='0 0 16px 0'>
                                <ThunderboltFilled/>
                                Synthèse complète de votre action
                            </Text>
                            <Text margin='0 0 16px 0'>
                                <ThunderboltFilled/>
                                xx indicateurs clés
                            </Text>
                            <Text margin='0 0 16px 0'>
                                <ThunderboltFilled/>
                                xx indicateurs clés
                            </Text>
                            <div className="btn">
                                <Button type='primary'>
                                    Obtenir
                                </Button>
                            </div>
                        </Col>
                        <ImgBox>
                            <DocsImg width='100%' />
                        </ImgBox>
                    </FlexBox>
                    <FlexBox>
                        <InfoBox>
                            <h4>
                                Pourquoi le Report à Impact ?
                            </h4>
                            <Text margin='0 0 16px 0'>
                                Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement l’étendue de votre contribution à la qualité de vie de vos salariés.
                            </Text>
                        </InfoBox>
                        <InfoBox>
                            <h4>
                                Comment le lire ?
                            </h4>
                            <Text margin='0 0 16px 0'>
                                Ce rapport vous présente 12 indicateurs clés pour quantifier l’impact de votre dispositif Phare.
                            </Text>
                        </InfoBox>
                        <InfoBox>
                            <h4>
                                Et ensuite ?
                            </h4>
                            <Text margin='0 0 16px 0'>
                                Ce Report d’Impact RSE vous donne un résumé des points clés de votre action et établit des recommandations concrètes pour votre société. Intégrez ces recommandations à votre plan d’action pour maximiser votre impact.
                            </Text>
                        </InfoBox>
                    </FlexBox>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Report;