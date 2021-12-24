import React from 'react';
import Text from '../Text';
import styled from 'styled-components';

type InformativeMessageProps = {
  title: string,
  icon?: JSX.Element,
  type: 'warning' | 'ok'
}

const Message = styled.div<InformativeMessageProps>`
  width: 100%;
  display: flex;
  margin: 30px 0;
  background: ${props => props.type === 'warning' ? '#fff3d5' : props.type === 'ok' ? '#f2fbef' : ''};
  border-radius: 2px;
  padding: 24px 51px 22px 24px;
`;

const InformativeMessage: React.FC<InformativeMessageProps> = ({ title, icon, type }) => {
  return (
    <Message icon={icon} title={title} type={type}>
      {icon}
      <Text size='16px' weight='400' height='24px'>
        {title}
      </Text>
    </Message>
  );
};

export default InformativeMessage;
