import React from 'react';
import { child } from "./../parameter";
import { BaseContainer } from './BaseContainer';

export default {
  title: 'Dtac/BaseContainer',
  component: BaseContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <BaseContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: child,
};

