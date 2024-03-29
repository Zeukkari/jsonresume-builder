import React from 'react'

import { Grid, Box } from 'grommet'

export const TopLayout = ({ children }) => {
  return (
    <Grid
      fill
      areas={[
        { name: 'left', start: [0, 0], end: [1, 0] },
        { name: 'right', start: [1, 0], end: [2, 0] },
        { name: 'footer', start: [0, 1], end: [2, 1] },
      ]}
      columns={['xsmall', 'medium']}
      rows={['flex', 'auto']}
      pad="none"
      margin="none"
      gap="none"
    >
      <Box gridArea="left" margin="auto">
        {children[0]}
      </Box>

      <Box gridArea="right">{children[1]}</Box>

      <Box gridArea="footer">{children[2]}</Box>
    </Grid>
  )
}

export const LeftColumnLayout = ({ children }) => {
  return (
    <Box direction="column" pad="none" margin="none" gap="none">
      {children}
    </Box>
  )
}

export const RightColumnLayout = ({ children }) => {
  return (
    <Box direction="column" pad="none" margin="none" gap="none">
      {children}
    </Box>
  )
}

const multiplier = 1.5
const pageSizeA4 = {
  height: `calc(${multiplier}*297mm)`,
  width: `calc(${multiplier}*210mm)`,
}

export const ResumeLayout = ({ children }) => {
  if (children && children.length && children.length != 3) {
    throw 'Invalid layout children'
  }

  return (
    <Box
      width={pageSizeA4.width}
      // height={pageSizeA4.height}
    >
      <Grid
        fill
        areas={[
          { name: 'header', start: [0, 0], end: [2, 0] },
          { name: 'left', start: [0, 1], end: [1, 1] },
          { name: 'right', start: [1, 1], end: [2, 1] },
        ]}
        columns={['1/2', '1/2']}
        rows={['auto', 'flex']}
        pad="none"
        margin="none"
        gap="none"
      >
        <Box gridArea="header">{children[0]}</Box>

        <Box gridArea="left">{children[1]}</Box>

        <Box gridArea="right">{children[2]}</Box>
      </Grid>
    </Box>
  )
}
