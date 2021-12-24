import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DatePickerWrapper } from '../../Components/DatePickerWrapper/DatePickerWrapper';

export default {
  title: 'Components/Date Picker',
  component: DatePickerWrapper
} as ComponentMeta<typeof DatePickerWrapper>;

const Template: ComponentStory<typeof DatePickerWrapper> = () => (
  <DatePickerWrapper onDateChange={action('Change date')} />
);

export const Default = Template.bind({});
Default.storyName = 'Default';
