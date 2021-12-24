import React, { FC } from 'react';
import Box from '../Box';
import Text from '../Text';
import MediaQuery from 'react-responsive';
import { ReactComponent as ProfilePic } from '../../assets/profile_pic.svg';

type ProfileTitleProps = {
    title: string,
}

const ProfileTitle: FC<ProfileTitleProps> = ({title}) => (
    <Box isWrap margin='0' padding='15px' bgColor='white' flexDirection='row' jsContent='space-between' alignItems='center' borderRadius='15px'>
        <Text weight='500' size='15px'>
            {title}
        </Text>
        <MediaQuery minWidth={711}>
            <Box isWrap padding='0' width='initial' flexDirection='row' alignItems='center'>
                <ProfilePic />
                <Text weight='500' margin='0 30px 0 15px'>JaneSmith@gmail.com</Text>
                <Text color='#6b7885'>World Company</Text>
            </Box>
        </MediaQuery>
    </Box>
);

export default ProfileTitle;
