import React from 'react';

import {
  Heading,
  Box,
  TextArea
} from 'grommet';

const SchemaReference = props => <TextArea value={props.value} {...props} fill readOnly  pad="large" resize={false} />;

const Sidebar = props => (
  <Box flex fill alignSelf="stretch" border={{ color: 'brand', size: 'medium' }} >
    <Heading size="small">Schema</Heading>
    <SchemaReference value={props.content} />
  </Box>
)

export default Sidebar;