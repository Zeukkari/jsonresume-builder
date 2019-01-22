import React from 'react'

import { Box } from 'grommet'

export const ResumeSection = ({ children }) => (
  <Box
    align="center"
    justify="center"
    direction="column"
    style={{ zIndex: '99' }}
  >
    {children}
  </Box>
)

export const SubSection = ({ children }) => (
  <Box
    direction="column"
    background="dark-2"
    border={{ side: 'all', color: 'border', size: 'xsmall', style: 'dashed' }}
    pad={{ horizontal: 'none', vertical: 'none' }}
    margin={{ horizontal: 'none', vertical: 'none' }}
    style={{ zIndex: '100' }}
  >
    {children}
  </Box>
)
