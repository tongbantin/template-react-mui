import React from 'react';

import { MuiAppbar } from './appbar';

export default {
  title: 'Dtac/Appbar',
  component: MuiAppbar,
};

const Template = (args) => <MuiAppbar {...args} />;

export const Signin = Template.bind({});
