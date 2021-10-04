import React from 'react';

import { Banner } from './banner';

export default {
  title: 'Dtac/Banner',
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Signin = Template.bind({});
