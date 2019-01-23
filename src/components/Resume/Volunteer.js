import React from 'react'

import { Box, Paragraph, Heading, Text } from 'grommet'

import { ResumeSection } from './common'

const Volunteer = ({ volunteer }) => {
  const renderItems = volunteer.map(item => {
    return (
      <Box key="item.company">
        <Heading>{item.company}</Heading>
        <Heading>{item.position}</Heading>
        <Box direction="row">
          {item.startDate} - {item.endDate}
        </Box>
        <Paragraph>{item.summary}</Paragraph>
        <Text>Highlights</Text>
        <Box direction="column">
          {item.highlights.map(highlight => (
            <Text key={highlight}>{highlight}</Text>
          ))}
        </Box>
      </Box>
    )
  })
  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <Heading
          level={3}
          size="medium"
          align="center"
          alignSelf="center"
          textAlign="center"
          margin="none"
          pad="none"
        >
          <Text>Volunteer</Text>
        </Heading>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Volunteer.defaultProps = {
  volunteer: [],
}

export default Volunteer
