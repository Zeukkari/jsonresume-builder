import React from 'react'

import { Box, Heading, Text } from 'grommet'

import { ResumeSection } from './common'

const Interests = ({ interests }) => {
  const renderItems = interests.map(item => {
    return (
      <Box key="item.name">
        <Heading>{item.name}</Heading>
        <Text>Keywords</Text>
        <Box direction="column">
          {item.keywords.map(keyword => (
            <Text key={keyword}>{keyword}</Text>
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
          <Text>Interests</Text>
        </Heading>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Interests.defaultProps = {
  language: [],
}

export default Interests
