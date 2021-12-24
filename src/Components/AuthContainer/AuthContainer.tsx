import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
`
const TopBar = styled.div`
    height: 82px;
    width: 100%;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1.5px solid rgba(0,0,0,0.07);
`
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #F9F9F9;
    align-items: center;
    overflow-y: auto;
`;

const LogoText = styled.div`
    font-family: Jost;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: ${props => props.color};
`
type Props = {
    children: JSX.Element
}
export const AuthContainer = ({children}: Props) => {
   return (
       <MainContainer>
       
        <Container>
        <TopBar>
            <LogoText color="#374483">
                 Phare
            </LogoText>      
            <LogoText color="#66A182">.</LogoText>
        </TopBar>
                {children}
        </Container>
      </MainContainer>
   )
}