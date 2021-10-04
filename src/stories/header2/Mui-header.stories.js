import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { MuiHeader } from './mui-header';

export default {
  title: 'Dtac/MuiHeader',
  component: MuiHeader,
};

const Template = (args) => <MuiHeader {...args} />;
const child = (<Container>
  <Box my={2}>
    {[...new Array(100)]
      .map(
        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
      )
      .join('\n')}
  </Box>
</Container>)
export const Default = Template.bind({});
Default.args = {children :child,user:"Default User"}
