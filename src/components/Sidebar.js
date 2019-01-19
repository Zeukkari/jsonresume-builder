import React from 'react';

import {
  Grommet,
  Heading,
  Box,
  TextArea
} from 'grommet';

const customTheme = {
  global: {
    colors: {
      'text': 'brand'
    }
  }
};

const SchemaReference = props => <TextArea value={props.value} {...props} fill readOnly  pad="large" color="red" resize={false} />;

const Sidebar = props => (
  <Grommet theme={customTheme} >
  <Box flex fill alignSelf="stretch"  border={{ color: 'brand', size: 'medium' }} >
    <Heading size="small">Schema reference</Heading>
    <Box flex background={{color: 'status-disabled'}}>
      <SchemaReference value={props.content} />
    </Box>
  </Box>
  </Grommet>
)

export default Sidebar;