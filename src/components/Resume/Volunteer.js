import React from 'react'

import { Box, Paragraph, Heading, Text } from 'grommet'

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
      </Box>
    </Box>
  )
}

Volunteer.defaultProps = {
  volunteer: [],
}

export default Volunteer
