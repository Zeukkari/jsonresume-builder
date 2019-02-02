import React from 'react'

import { Box, Heading } from 'grommet'

import moment from 'moment'

export function formatDateRange(startDate, endDate) {
  const start = moment(startDate, 'YYYY-MM-DD').format('MMM YYYY')
  const end = moment(endDate, 'YYYY-MM-DD').format('MMM YYYY')

  return `${start} - ${end}`
}

export const ResumeSection = ({ children }) => (
  <Box
    flex
    basis="auto"
    border={{
      side: 'all',
      color: 'red',
      size: 'xsmall',
      style: 'dashed',
    }}
    margin="none"
    pad="none"
    overflow="hidden"
  >
    {children}
  </Box>
)

export const SectionTitle = ({ children }) => (
  <Heading level={1} size="medium" align="center" textAlign="center">
    {children}
  </Heading>
)
