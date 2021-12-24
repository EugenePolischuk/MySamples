import { FC, useState } from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';
import { QuestionCircleOutlined } from '@ant-design/icons';

const QuestionMark = styled(QuestionCircleOutlined)`
  cursor: help;
`;

const SwitchContainer = styled.div`
  margin-top: 23px;
  .ant-switch:not(.o):not(.o):not(.o):not(.o) {
    background-color: #1890ff;
  }
`;

const Topic = styled.span<{ isActive: boolean }>`
  color: #262626;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`;

interface ICustomSwitchProps {
  onChange: (checked: boolean) => void;
}

export const CustomSwitch: FC<ICustomSwitchProps> = props => {
  const [isActive, setIsActive] = useState(true);
  const { onChange } = props;

  const handleOnChange = (checked: boolean) => {
    setIsActive(checked);
    onChange(checked);
  };
  return (
    <SwitchContainer>
      <Topic isActive={!isActive}>
        Par période <QuestionMark />
      </Topic>
      <Switch
        checked={isActive}
        size='small'
        onChange={handleOnChange}
        defaultChecked
        style={{ margin: '0 10px' }}
      />
      <Topic isActive={isActive}>Total</Topic>
    </SwitchContainer>
  );
};
