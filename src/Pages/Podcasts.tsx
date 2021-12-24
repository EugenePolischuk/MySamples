import React from 'react';
import styled from 'styled-components';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Box from '../Components/Box';
import Text from '../Components/Text';
import Button from '../Components/Button';
import { CloseOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { ReactComponent as PodcastImg } from '../assets/podcast.svg';

const PageBody = styled.div`
  width: 100%;
  margin-top: 1px;
`;

const ResBox = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  display: flex;
  
  button {
    color: black;
    width: 45px;
    border: none;
    padding: 4px 10px;
    background-color: #f5f5f5;
  }
  & > button:first-child {
    margin-right: 10px;
  }
`;

const Podcasts: React.FC = () => {
    return (
        <Container>
            <Box isWrap bgColor='#e5e5e5' padding='30px 25px' margin='0 0 0 14%'>
                <Header title='Podcasts' />
                <PageBody>
                    <Box isWrap margin='0' padding='20px' bgColor='white' flexDirection='row' jsContent='space-between' borderRadius='0'>
                        <Box isWrap margin='0' padding='0' flexDirection='row' jsContent='space-between'>
                            <Box isWrap width='100px' height='100px' margin='15px 0' padding='0' bgColor='#f5f5f5' jsContent='center'>
                                <PlusOutlined style={{ fontSize: '35px', color: '#6b7885', cursor: 'pointer' }} />
                            </Box>
                            <ResBox>
                                <Box isWrap width='50%' flexDirection='row' jsContent='center' margin='15px 0' padding='0'>
                                    <Box isWrap height='fit-content' width='initial' jsContent='center' bgColor='#f5f5f5' margin='0' padding='5px'>
                                        <PodcastImg />
                                    </Box>
                                    <Box isWrap margin='0' padding='0 30px'>
                                        <h2>
                                            Nom du podcasts
                                        </h2>
                                        <Text margin='0 0 16px 0'>
                                            Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement.
                                        </Text>
                                        <ButtonBox>
                                            <Button>
                                                <EditOutlined />
                                            </Button>
                                            <Button>
                                                <CloseOutlined />
                                            </Button>
                                        </ButtonBox>
                                    </Box>
                                </Box>
                                <Box isWrap width='50%' flexDirection='row' jsContent='center' margin='15px 0' padding='0'>
                                    <Box isWrap height='fit-content' width='initial' jsContent='center' bgColor='#f5f5f5' margin='0' padding='5px'>
                                        <PodcastImg />
                                    </Box>
                                    <Box isWrap margin='0' padding='0 30px'>
                                        <h2>
                                            Nom du podcasts
                                        </h2>
                                        <Text margin='0 0 16px 0'>
                                            Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement.
                                        </Text>
                                        <ButtonBox>
                                            <Button>
                                                <EditOutlined />
                                            </Button>
                                            <Button>
                                                <CloseOutlined />
                                            </Button>
                                        </ButtonBox>
                                    </Box>
                                </Box>
                                <Box isWrap width='50%' flexDirection='row' jsContent='center' margin='15px 0' padding='0'>
                                    <Box isWrap height='fit-content' width='initial' jsContent='center' bgColor='#f5f5f5' margin='0' padding='5px'>
                                        <PodcastImg />
                                    </Box>
                                    <Box isWrap margin='0' padding='0 30px'>
                                        <h2>
                                            Nom du podcasts
                                        </h2>
                                        <Text margin='0 0 16px 0'>
                                            Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement.
                                        </Text>
                                        <ButtonBox>
                                            <Button>
                                                <EditOutlined />
                                            </Button>
                                            <Button>
                                                <CloseOutlined />
                                            </Button>
                                        </ButtonBox>
                                    </Box>
                                </Box>
                                <Box isWrap width='50%' flexDirection='row' jsContent='center' margin='15px 0' padding='0'>
                                    <Box isWrap height='fit-content' width='initial' jsContent='center' bgColor='#f5f5f5' margin='0' padding='5px'>
                                        <PodcastImg />
                                    </Box>
                                    <Box isWrap margin='0' padding='0 30px'>
                                        <h2>
                                            Nom du podcasts
                                        </h2>
                                        <Text margin='0 0 16px 0'>
                                            Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement.
                                        </Text>
                                        <ButtonBox>
                                            <Button>
                                                <EditOutlined />
                                            </Button>
                                            <Button>
                                                <CloseOutlined />
                                            </Button>
                                        </ButtonBox>
                                    </Box>
                                </Box>
                                <Box isWrap width='50%' flexDirection='row' jsContent='center' margin='15px 0' padding='0'>
                                    <Box isWrap height='fit-content' width='initial' jsContent='center' bgColor='#f5f5f5' margin='0' padding='5px'>
                                        <PodcastImg />
                                    </Box>
                                    <Box isWrap margin='0' padding='0 30px'>
                                        <h2>
                                            Nom du podcasts
                                        </h2>
                                        <Text margin='0 0 16px 0'>
                                            Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement.
                                        </Text>
                                        <ButtonBox>
                                            <Button>
                                                <EditOutlined />
                                            </Button>
                                            <Button>
                                                <CloseOutlined />
                                            </Button>
                                        </ButtonBox>
                                    </Box>
                                </Box>
                                <Box isWrap width='50%' flexDirection='row' jsContent='center' margin='15px 0' padding='0'>
                                    <Box isWrap height='fit-content' width='initial' jsContent='center' bgColor='#f5f5f5' margin='0' padding='5px'>
                                        <PodcastImg />
                                    </Box>
                                    <Box isWrap margin='0' padding='0 30px'>
                                        <h2>
                                            Nom du podcasts
                                        </h2>
                                        <Text margin='0 0 16px 0'>
                                            Vous êtes très souvent sollicités sur des sujets auxquels vous êtes étrangers. Le rapport d’impact vous de mesurer directement.
                                        </Text>
                                        <ButtonBox>
                                            <Button>
                                                <EditOutlined />
                                            </Button>
                                            <Button>
                                                <CloseOutlined />
                                            </Button>
                                        </ButtonBox>
                                    </Box>
                                </Box>
                            </ResBox>
                        </Box>
                    </Box>
                </PageBody>
            </Box>
        </Container>
    );
};

export default Podcasts;