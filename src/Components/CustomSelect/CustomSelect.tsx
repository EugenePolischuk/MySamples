import styled from 'styled-components';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { FC } from 'react';

const { Option } = Select;

interface ICustomBoxProps {
  options: { id: string; value: string }[];
  backdroundColor?: string;
  color?: string;
  border?: string;
  marginLeft?: number;
  marginRight?: number;
}

const CustomBox = styled(Select)<ICustomBoxProps>`
  color: ${props => props.color};
  margin-left: ${props => props.marginLeft}px;
  margin-right: ${props => props.marginRight}px;

  .ant-select-selection-item:not(.o):not(.o):not(.o):not(.o) {
    font-size: 12px;
  }

  .ant-select-selector:not(.o):not(.o):not(.o):not(.o) {
    border: ${props => props.border};
    background-color: ${props => props.backdroundColor};
    border-radius: 5px;
    padding: 0 14px;
  }
  .ant-select-arrow:not(.o):not(.o):not(.o):not(.o) {
    color: ${props => props.color};
  }
`;

export const CustomSelect: FC<ICustomBoxProps> = props => {
  const {
    backdroundColor = '#fff',
    color = '#262626',
    border = 'none',
    options,
    marginLeft = 0,
    marginRight = 0
  } = props;
  return (
    <CustomBox
      defaultValue={options[0].value}
      backdroundColor={backdroundColor}
      color={color}
      border={border}
      options={options}
      marginLeft={marginLeft}
      marginRight={marginRight}>
      {options.map(el => (
        <Option key={el.id} value={el.value}>
          {el.value}
        </Option>
      ))}
    </CustomBox>
  );
};
