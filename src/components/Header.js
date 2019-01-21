import React from 'react'

import { Box, Button, Heading } from 'grommet'

import { Code, Contract, Expand, Download } from 'grommet-icons'

const Header = props => (
  <Box
    justify="between"
    alignContent="stretch"
    tag="header"
    direction="row"
    fill
    align="center"
    background="dark-1"
    pad={{ left: 'medium', right: 'small', vertical: 'large' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  >
    <Heading level="3" margin="none" color="light-2">
      Resume Builder
    </Heading>
    <div>
      <Button
        icon={
          props.showSidebar ? (
            <Contract color="white" />
          ) : (
            <Expand color="white" />
          )
        }
        onClick={() => props.onClick}
        disabled
      />
      <Button icon={<Download color="white" />} onClick={props.onClick} />
    </div>
  </Box>
)

export default Header
