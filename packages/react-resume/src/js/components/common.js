import React from 'react'

import { Text, Box, Heading } from 'grommet'

import moment from 'moment'

export function formatDateRange(startDate, endDate) {
  const start = moment(startDate, 'YYYY-MM-DD').format('MMM YYYY')
  const end = moment(endDate, 'YYYY-MM-DD').format('MMM YYYY')

  return `${start} - ${end}`
}

export function formatDate(date) {
  return moment(date, 'YYYY-MM-DD').format('MMM YYYY')
}

export const ResumeSection = ({ children }) => (
  <Box
    flex
    width="100%"
    border={{
      side: 'all',
      color: 'cyan',
      size: 'large',
      style: 'dashed',
    }}
    margin="none"
    pad="none"
    gap="none"
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

export const TagSection = ({ tags, children }) => {
  if (tags) {
    return (
      <Box>
        <Text weight="bold" size="medium">
          {children}
        </Text>
        <Box direction="column">
          {tags.map(item => (
            <Text key={item}>{item}</Text>
          ))}
        </Box>
      </Box>
    )
  }
  return <></> // meh
}
