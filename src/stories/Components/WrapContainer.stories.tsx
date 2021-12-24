import { ComponentMeta, ComponentStory } from '@storybook/react';
import WrapContainer from '../../Components/WrapContainer';
import styled from 'styled-components';

const TestBox = styled.div`
  border: 1px solid black;
  height: 100px;
  width: 36%;
  background-color: #1ea7fd;
`;

const TestBox2 = styled.div`
  border: 1px solid black;
  height: 100px;
  width: 25%;
  background-color: rosybrown;
`;


export default {
  title: 'WrapContainer',
  component: WrapContainer
} as ComponentMeta<typeof WrapContainer>;

const Template: ComponentStory<typeof WrapContainer> = (args) => (
  <WrapContainer {...args} />
);


export const WrapContainerCard = Template.bind({});
WrapContainerCard.storyName = 'Default';
WrapContainerCard.args = {
  margin: '20px',
  children: <>
    <TestBox />
    <TestBox2 />
    <TestBox />
    <TestBox />
    <TestBox />
    <TestBox2 />
    <TestBox />
    <TestBox2 />
    <TestBox2 />
  </>

};
