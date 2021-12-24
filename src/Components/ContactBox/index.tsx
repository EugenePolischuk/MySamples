import React, { FC } from 'react';
import styled from 'styled-components';
import Box from '../Box';
import Text from '../Text';
import Button from '../Button';
import { MessageOutlined } from '@ant-design/icons';

type ContactBoxProps = {
    isMobile?: boolean,
}

const MsgIcon = styled.div`
  span {
    background: #f2fbef;
    padding: 20px;
    color: #78d85b;
    border-radius: 15px;
    font-size: 20px;
    margin: 0 20px 0 0;
  }
`;

const ButtonBox = styled.div`
  button {
    color: #5398df;
    background-color: #eef5fc;
    border-radius: 5px;
    border: none;
    width: 100%;
  }
`;

const ContactBox: FC<ContactBoxProps> = ({isMobile}) => (
    <Box isWrap margin='30px 0 0 0' padding='10px' flexDirection={isMobile ? 'column' : 'row'} jsContent='space-between' alignItems='center' bgColor='white' borderRadius='15px'>
        <Box isWrap padding='0' flexDirection='row' alignItems='center'>
            <MsgIcon>
                <MessageOutlined />
            </MsgIcon>
            <Text weight='500'>
                Une idée ? Un besoin personnel ? Ou tout simplement l’envie d’aider vos collaborateur ?
            </Text>
        </Box>
        <ButtonBox style={{marginTop: isMobile ? '20px' : '0', width: isMobile ? '100%' : 'initial'}}>
            <Button>
                Suggerer un service
            </Button>
        </ButtonBox>
    </Box>
);

export default ContactBox;
