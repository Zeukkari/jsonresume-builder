import React from 'react'

import { Box, Heading, Text } from 'grommet'

import { ResumeSection } from './common'

const Languages = ({ languages }) => {
  const renderItems = languages.map(item => {
    return (
      <Box key="item.language">
        <Heading>{item.language}</Heading>
        <Heading>{item.fluency}</Heading>
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
          <Text>Languages</Text>
        </Heading>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Languages.defaultProps = {
  language: [],
}

export default Languages
