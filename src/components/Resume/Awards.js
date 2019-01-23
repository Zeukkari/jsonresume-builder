import React from 'react'

import { Box, Paragraph, Heading, Text } from 'grommet'

import { ResumeSection } from './common'

const Awards = ({ awards }) => {
  const renderItems = awards.map(item => {
    return (
      <Box key={item.title}>
        <Heading>{item.title}</Heading>
        <Heading>{item.awarder}</Heading>
        <Text>{item.date}</Text>
        <Paragraph>{item.summary}</Paragraph>
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
          <Text>Awards</Text>
        </Heading>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Awards.defaultProps = {
  awards: [],
}

export default Awards
