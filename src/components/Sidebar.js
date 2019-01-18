import React from 'react';

import {
  Box,
  Collapsible,
  TextArea
} from 'grommet';

const SchemaReference = props => <TextArea value={props.value} {...props} fill readOnly />;

const Sidebar = props => (
  <Collapsible direction="horizontal" open={props.isOpen}>
    <Box
      flex
      width="large"
      background="light-2"
      elevation="small"
      align="stretch"
      justify="between"
    >
      <SchemaReference value={props.content} />
    </Box>
  </Collapsible>
)

export default Sidebar;