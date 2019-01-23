import React from 'react'

import { Box, Heading, Text } from 'grommet'

const Skills = ({ skills }) => {
  const renderItems = skills.map(item => {
    return (
      <Box key="item.name">
        <Heading>{item.name}</Heading>
        <Heading>{item.level}</Heading>

        <Text>Highlights</Text>
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
          <Text>Skills</Text>
        </Heading>
        <Box direction="column">{renderItems}</Box>
      </Box>
    </Box>
  )
}

Skills.defaultProps = {
  skills: [],
}

export default Skills
