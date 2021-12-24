import { FC } from 'react';
import { ConfigProvider, DatePicker, Space } from 'antd';
import moment from 'moment';
import 'moment/locale/fr';
import locale from 'antd/lib/locale/fr_FR';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { RangePicker } = DatePicker;

const dateFormat = 'll';
moment.locale('fr-FR');

const Separator = styled.span`
  padding: 0;
  margin: 0 1px;
`;

const Wrapper = styled.div`
  margin-left: auto;
`;
interface IDatePickerWrapperProps {
  onDateChange: () => void;
}

export const DatePickerWrapper: FC<IDatePickerWrapperProps> = props => {
  const { onDateChange } = props;
  return (
    <Wrapper>
      <ConfigProvider locale={locale}>
        <Space direction='vertical' size={12} style={{ color: '#262626' }}>
          <RangePicker
            bordered={false}
            suffixIcon={<DownOutlined style={{ color: '#262626' }} />}
            separator={<Separator>-</Separator>}
            style={{ width: 235 }}
            onChange={onDateChange}
            format={dateFormat}
          />
        </Space>
      </ConfigProvider>
    </Wrapper>
  );
};
