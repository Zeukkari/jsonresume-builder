import React from 'react';

import {
  Box,
  Button,
  Heading
} from 'grommet';

import { Code, Contract, Expand } from 'grommet-icons';

const Header = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    gridArea="header"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
  >
    <Heading level="3" margin="none">
      Resume Builder
    </Heading>
    <div>
      <Button
        icon={props.showSidebar ? (<Contract color="white" />) : (<Expand color="white" />)}
        onClick={props.toggleSidebar}
      />
      <Button
        icon={<Code color="white" />}
        onClick={props.togglePreview}
      />
    </div>
  </Box>
)

export default Header;