import { useState, useMemo, useEffect } from 'react';

import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import { AuthContainer } from '../Components/AuthContainer/AuthContainer';
import { ReactComponent as Case } from '../assets/case.svg';
import { ReactComponent as Businessman } from '../assets/businessman.svg';

import { Link, useLocation } from 'react-router-dom';

interface TextProps {
  top: string;
  bottom: string;
  size: string;
}

const Text = styled.h2<TextProps>`
  font-size: ${props => props.size}px;
  margin-top: ${props => props.top}px;
  margin-bottom: ${props => props.bottom}px;
  font-family: Jost;
  font-style: normal;
  font-weight: 600;
`;

const ContainerSelect = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`;
const CardSelect = styled(Link)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 80px;
  width: 299px;
  height: 281px;
  background: #ffffff;
  box-shadow: 0px 3.98085px 39.8085px -3.18468px rgba(14, 104, 197, 0.05);
  border-radius: 10px;
  @media (max-width: 380px) {
    width: 238px;
    height: 216px;
  }
`;
const TextSelected = styled.p`
  text-align: center;
  font-family: Jost;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #000000;
  @media (max-width: 380px) {
    font-size: 16px;
  }
`;
interface IListData {
  id: string;
  text: string;
  Icon: typeof Case;
}

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

export const RedirectAuth = () => {
  const [listData] = useState<IListData[]>([
    {
      id: 'id-1',
      text: 'Partenaire Phare',
      Icon: Case
    },
    {
      id: 'id-2',
      text: 'Collaborateur <compagny>',
      Icon: Businessman
    }
  ]);

  const query = useQuery();
  const getTokens = (accessToken: string, refreshToken: string) => {
    return { accessToken, refreshToken };
  };
  useEffect(() => {
    getTokens(
      JSON.stringify(query.get('access_token')),
      JSON.stringify(query.get('refresh_token'))
    );
  }, [query]);
  return (
    <AuthContainer>
      <>
        <MediaQuery minWidth={381}>
          <Text size='30' top='100' bottom='60'>
            Je me connecte en tant que :
          </Text>
        </MediaQuery>
        <MediaQuery maxWidth={380}>
          <Text size='20' top='10' bottom='0'>
            You’d like to:
          </Text>
        </MediaQuery>
        <ContainerSelect>
          {listData.map(({ id, text, Icon }) => {
            return (
              <CardSelect to='/#' key={id}>
                <Icon />
                <TextSelected>{text}</TextSelected>
              </CardSelect>
            );
          })}
        </ContainerSelect>
      </>
    </AuthContainer>
  );
};
