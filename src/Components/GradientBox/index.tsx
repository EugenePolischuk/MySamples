import React, { FC } from 'react';
import styled from 'styled-components';
import Box from '../Box';
import Text from '../Text';
import MediaQuery from 'react-responsive';

interface GradientBoxProps {
    title: string,
    icon: JSX.Element,
    colors: Array<string>,
}

const Container = styled.div<GradientBoxProps>`
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  background-image: ${props => 'linear-gradient(to right, ' + props.colors[0] + ', ' + props.colors[1] + ')'};
`;

const GradientBox: FC<GradientBoxProps> = ({icon, colors, title}) => (
    <>
        <MediaQuery maxWidth={710}>
            <Container icon={icon} colors={colors} title={title} style={{flexDirection: 'column', }}>
                <Box isWrap padding='0' flexDirection='row'>
                    <Box isWrap margin='0 10px 10px 0' padding='10px' width='45px' height='45px' bgColor='white' borderRadius='50%' jsContent='center' alignItems='center'>
                        {icon}
                    </Box>
                    <Text color='white' size='25px' weight='500'>
                        {title}
                    </Text>
                </Box>
                <Text color='white' width='100%' align='left'>
                    Vous avez besoin d’une formation ? Faites vous accompagner par des experts pour toutes vos problématiques
                </Text>
            </Container>
        </MediaQuery>
        <MediaQuery minWidth={711}>
            <Container icon={icon} colors={colors} title={title} style={{flexDirection: 'row', alignItems: 'center'}}>
                <Box isWrap padding='0' jsContent='center'>
                    <Text color='white' size='30px' weight='500'>
                        {title}
                    </Text>
                    <Text color='white' width='420px'>
                        Vous avez besoin d’une formation ? Faites vous accompagner par des experts pour toutes vos problématiques
                    </Text>
                </Box>
                <Box isWrap padding='10px' width='90px' height='80px' bgColor='white' borderRadius='50%' jsContent='center' alignItems='center'>
                    {icon}
                </Box>
            </Container>
        </MediaQuery>
    </>
);

export default GradientBox;
