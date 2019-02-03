import React from 'react'

import { Text, Box, Heading, Paragraph } from 'grommet'

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
    fill
    flex
    border={{
      side: 'all',
      color: 'red',
      size: 'xsmall',
      style: 'dashed',
    }}
    margin="none"
    pad="none"
    gap="none"
  >
    {children}
  </Box>
)

export const SectionTitle = ({ children }) => (
  <Heading level={1} size="small" align="center" textAlign="start">
    {children}
  </Heading>
)

export const ResumeHeading = ({ children }) => (
  <Heading level={3} size="small">
    {children}
  </Heading>
)

export const ResumeSubHeading = ({ children }) => (
  <Heading level={4}>{children}</Heading>
)

export const ResumeParagraph = ({ children }) => (
  <Paragraph>{children}</Paragraph>
)

export const ResumeDateSection = ({ children }) => (
  <Text weight="bold" size="medium">
    {children}
  </Text>
)

export const TagHeading = ({ children }) => (
  <Text weight="bold" size="medium">
    {children}
  </Text>
)

export const TagSection = ({ tags, children }) => {
  if (tags) {
    return (
      <Box>
        <TagHeading>{children}</TagHeading>
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
