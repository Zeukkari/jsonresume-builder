import React from 'react'

import { Box } from 'grommet'

export const ResumeSection = ({ children }) => (
  <Box flex fill justify="between" direction="column">
    {children}
  </Box>
)

export const SubSection = ({ children }) => (
  <Box
    basis="1/2"
    background="light-4"
    elevation="medium"
    align="center"
    justify="center"
    overflow="hidden"
    border={{ side: 'all', color: 'border', size: 'xsmall', style: 'dashed' }}
  >
    {children}
  </Box>
)
