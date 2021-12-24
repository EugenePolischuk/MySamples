import React, { FC } from 'react';
import styled from 'styled-components';
import Box from '../Box';
import Text from '../Text';
import Button from '../Button';

interface ScheduleMeetingBoxProps {
    title: string,
    bgColor: string,
    icon: JSX.Element,
    text: JSX.Element,
    isMobile?: boolean,
    isTablet?: boolean,
}

const ButtonBox = styled.div`
  button {
    color: #5398df;
    background-color: #eef5fc;
    border-radius: 5px;
    border: none;
    width: 100%;
  }
`;

const ScheduleMeetingBox: FC<ScheduleMeetingBoxProps> = ({title, text, icon, bgColor, isMobile, isTablet}) => (
    <Box
        isWrap
        padding='15px'
        margin='30px 0 0 0'
        width={isTablet ? '100%' : '49%'}
        borderRadius='15px'
        bgColor='white'
        flexDirection={isMobile ? 'column' : 'row'}
        jsContent='space-between'
    >
        <Box
            isWrap
            padding={isMobile ? '30px' : '80px'}
            width='initial'
            jsContent='center'
            alignItems='center'
            bgColor={bgColor}
            borderRadius='15px'
        >
            {icon}
        </Box>
        <Box isWrap padding='0' width={isMobile ? '100%' : '50%'} jsContent='space-between'>
            <Box isWrap padding='0' margin={isMobile ? '20px 0' : 'none'}>
                <Text weight='600' size='18px' margin='0 0 10px 0'>
                    {title}
                </Text>
                <Text weight='400' size='14px' color='#6b7885'>
                    {text}
                </Text>
            </Box>
            <ButtonBox>
                <Button>
                    Planifier un rendez-vous
                </Button>
            </ButtonBox>
        </Box>
    </Box>
);

export default ScheduleMeetingBox;
