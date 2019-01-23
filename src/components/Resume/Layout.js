import React from 'react'

import { Grid, Box } from 'grommet'

export const TopLayout = ({ children }) => {
  return (
    <Grid
      areas={[
        { name: 'left', start: [0, 0], end: [1, 0] },
        { name: 'right', start: [1, 0], end: [2, 0] },
        { name: 'footer', start: [0, 1], end: [2, 1] },
      ]}
      columns={['small', 'large']}
      rows={['auto', 'xsmall']}
      gap="small"
    >
      <Box gridArea="left" background="red" margin="auto">
        {children[0]}
      </Box>

      <Box gridArea="right" background="brand">
        {children[1]}
      </Box>

      <Box gridArea="footer" background="green">
        {children[2]}
      </Box>
    </Grid>
  )
}

export const LeftColumnLayout = ({ children }) => {
  return <Box direction="column">{children}</Box>
}

export const RightColumnLayout = ({ children }) => {
  return <Box direction="column">{children}</Box>
}

export const ResumeLayout = ({ children }) => {
  if (children && children.length && children.length != 3) {
    throw 'Invalid layout children'
  }

  return (
    <Grid
      areas={[
        { name: 'header', start: [0, 0], end: [2, 0] },
        { name: 'left', start: [0, 1], end: [1, 1] },
        { name: 'right', start: [1, 1], end: [2, 1] },
      ]}
      columns={['1/2', '1/2']}
      rows={['small', 'large']}
      gap="small"
    >
      <Box gridArea="header" background="red">
        {children[0]}
      </Box>

      <Box gridArea="left" background="brand">
        {children[1]}
      </Box>

      <Box gridArea="right" background="green">
        {children[2]}
      </Box>
    </Grid>
  )
}
