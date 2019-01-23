import React from 'react'

import { Box, Heading, Text, Paragraph } from 'grommet'

import { ResumeSection } from './common'

const References = ({ references }) => {
  const renderItems = references.map(item => {
    return (
      <Box key="item.name">
        <Text>{item.name}</Text>
        <Paragraph>{item.reference}</Paragraph>
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
          <Text>References</Text>
        </Heading>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

References.defaultProps = {
  references: [],
}

export default References
