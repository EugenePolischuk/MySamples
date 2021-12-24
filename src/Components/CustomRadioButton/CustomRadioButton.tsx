import styled from 'styled-components';
import { Radio } from 'antd';
import { FC, ForwardRefExoticComponent, useState } from 'react';

interface IGroup {
  backgroundColor?: string;
  border?: string;
  isActive?: boolean;
}

interface IButton {
  marginLeft?: number;
  marginRight?: number;
}

interface ICustomRadioButtonPorps extends IButton, IGroup {
  values: {
    id: string;
    name: string;
    icon?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ForwardRefExoticComponent<any>
      | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    color?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }[];
  onChange?: (id: string) => void;
  activeButtonId?: string;
}

const Group = styled(Radio.Group)<IGroup>`
  .ant-radio-button-wrapper:not(:first-child):not(.o):not(.o)::before {
    display: none;
  }
  .ant-radio-button-wrapper:not(.o):not(.o):not(.o):not(.o) {
    border: none;
    padding-right: 10px;
    padding-left: 10px;
    text-align: center;
    background-color: transparent;
    border-radius: 5px;
  }
  .ant-radio-button-wrapper:not(.o):not(.o):not(.o):not(.o) {
    background-color: #f5f5f5;
  }
  .ant-radio-button-wrapper:not(.o):not(.o):not(.o):not(.o).active {
    background-color: #fff;
    border: 1px solid #5398df;
    color: #262626;
  }
`;

const Button = styled(Radio.Button)<IButton>`
  margin-left: ${props => props.marginLeft}px;
  margin-right: ${props => props.marginRight}px;
`;

export const CustomRadioButton: FC<ICustomRadioButtonPorps> = props => {
  const {
    values,
    marginLeft = 0,
    marginRight = 0,
    backgroundColor = '#fff',
    border = 'none',
    onChange = () => '',
    activeButtonId
  } = props;
  const [activeButton, setActiveButton] = useState<typeof activeButtonId>(
    activeButtonId
  );

  const handleOnClick = (id: string) => {
    setActiveButton(id);
    if (onChange) onChange(id);
  };

  return (
    <Group backgroundColor={backgroundColor} border={border}>
      {values.map(el => (
        <Button
          key={el.id}
          value={el.name}
          marginLeft={marginLeft}
          marginRight={marginRight}
          className={activeButton === el.id ? 'active' : ''}
          onClick={() => handleOnClick(el.id)}>
          {el.icon && <el.icon style={{ marginRight: 10, color: el.color }} />}
          {el.name}
        </Button>
      ))}
    </Group>
  );
};
