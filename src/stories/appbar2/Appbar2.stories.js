import React from 'react';

import { MuiAppbar2 } from './appbar2';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
export default {
  title: 'Dtac/Appbar2',
  component: MuiAppbar2,
};

const Template = (args) => <MuiAppbar2 {...args} />;
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
const src = [{Id:"20E9B42D-B4C5-4C77-8821-E3FFD88C4CCF",ModuleName:"Database Query",Desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu"}]
export const Default = Template.bind({});
Default.args = {children :child,user:"Default User",ScreenName:'Default Screen',ScreenList:src}
