import Container from '../../Components/Container';
import Text from '../../Components/Text';
import styled from 'styled-components';
import Box from '../../Components/Box';
import '../../App.css';
import { PlusOutlined } from '@ant-design/icons';

const ContenContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: 14%;
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background-color: #e5e5e5;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 25px;
  background-color: white;
  width: 100%;
`;

interface BoxProps {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  width?: string;
  height?: string;
  color?: string;
  bRadius?: string;
}
type ProfileBoxProps = {
    width?: string;
}

const ProfileBox = styled.div<ProfileBoxProps>`
  width: ${props => (props.width || '100px')};
  
  & > div:first-child {
    font-size: 30px;
    align-items: center;
  }
`;

// const Box = styled.div<BoxProps>`
//   display: flex;
//   flex-direction: ${props => props.flexDirection || 'column'};
//   align-items: ${props => props.alignItems || 'normal'};
//   justify-content: ${props => props.justifyContent || 'flex-start'};
//   padding: ${props => props.padding || '40px 58px'};
//   background-color: ${props => props.color || 'white'};
//   width: ${props => props.width || '100%'};
//   height: ${props => props.height || 'auto'};
//   border-radius: ${props => props.bRadius || 0};
// `;

const GreyLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(236, 236, 236, 1);
  padding: 0 25px;
`;

const PageBody = styled.div`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  padding: 30px 50px;
  background: white;
`;

export const ContenuModifiablePartenaires = () => {
  return (
    <Container>
      <ContenContainer>
        <Header>
          <Box
            height='50px'
            padding='0'
            flexDirection='row'
            // justifyContent='start'
            alignItems='center'>
            <Box
              padding='0'
              flexDirection='row'
              width='400px'
            //   justifyContent='space-between'
              alignItems='center'>
              <Text size='16px' weight='700'>
                Espace Partenaire
              </Text>
            </Box>
          </Box>
        </Header>
        <GreyLine />
        <Header title='Espace Partenaire' />
                <PageBody>
                    <h3>
                        Kit de communication
                    </h3>
                    <Box isWrap margin='30px 0' padding='0' flexDirection='row' jsContent='space-between'>
                        <ProfileBox key='0'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <PlusOutlined onClick={() => true} />
                            </Box>
                            <Text weight='500'>
                                Ajouter un document
                            </Text>
                        </ProfileBox>
                        <ProfileBox key='1'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='2'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='3'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='4'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='5'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='6'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                        <ProfileBox key='7'>
                            <Box isWrap bgColor='#f5f5f5' height='100px' margin='0' padding='0' flexDirection='row' jsContent='center'>
                                <UserOutlined />
                            </Box>
                            <Text weight='500'>
                                Title <br/>
                                Text text text
                            </Text>
                            <ButtonBox>
                                <Button>
                                    <EditOutlined />
                                </Button>
                                <Button>
                                    <CloseOutlined />
                                </Button>
                            </ButtonBox>
                        </ProfileBox>
                    </Box>
                    <h3>
                        Recomondations
                    </h3>
                    <Box isWrap margin='15px 0' padding='0' flexDirection='row' jsContent='space-between'>
                        <Box isWrap width='190px' height='80px' margin='15px 0' padding='0' bgColor='#f5f5f5' jsContent='center'>
                            <PlusOutlined onClick={() => setAddRecModalVisible(true)} style={{ fontSize: '35px', color: '#6b7885', cursor: 'pointer' }} />
                        </Box>
                        <RecBox>
                            <Box isWrap key='1' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #fe6c6c' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Logement</span>
                                <h3>Location</h3>
                            </Box>
                            <Box isWrap key='2' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #fe6c6c' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Logement</span>
                                <h3>Aquisition</h3>
                            </Box>
                            <Box isWrap key='3' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #fe6c6c' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Logement</span>
                                <h3>Vente</h3>
                            </Box>
                            <Box isWrap key='4' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #ffd572' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Famille</span>
                                <h3>Mariage</h3>
                            </Box>
                            <Box isWrap key='5' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #b09fff' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Aléas de la vie</span>
                                <h3>Protection</h3>
                            </Box>
                            <Box isWrap key='6' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #fe6c6c' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Charges</span>
                                <h3>Charges</h3>
                            </Box>
                            <Box isWrap key='7' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #ffd572' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Famille</span>
                                <h3>Anglais</h3>
                            </Box>
                            <Box isWrap key='8' width='190px' jsContent='center' margin='15px 0' padding='0' border='1px solid #ffd572' borderRadius='2px'>
                                <CloseOutlined />
                                <span>Famille</span>
                                <h3>Mariage</h3>
                            </Box>
                        </RecBox>
                    </Box>
      </ContenContainer>
    </Container>
  );
};
