import React from 'react'

import { Box } from 'grommet'

export const ResumeSection = ({ children }) => (
  <Box
    border={{
      side: 'all',
      color: 'red',
      size: 'xsmall',
      style: 'dashed',
    }}
    margin="none"
    pad="none"
  >
    {children}
  </Box>
)
