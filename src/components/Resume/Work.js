import React from 'react'

import { Box, Heading, Text, Paragraph } from 'grommet'

const Work = ({ work }) => {
  const renderItems = work.map(item => {
    return (
      <Box key="item.company">
        <Heading>{item.company}</Heading>
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
          <Text>Work</Text>
        </Heading>
        <Box>{renderItems}</Box>
      </Box>
    </Box>
  )
}

Work.defaultProps = {
  work: [],
}

export default Work
