import React from 'react'

import { Box, Heading, Text } from 'grommet'

import { ResumeSection, SectionTitle, TagSection } from './common'

const Interests = ({ interests }) => {
  const renderItems = interests.map(item => {
    return (
      <Box key={item.name}>
        <Heading level={3}>{item.name}</Heading>
        <TagSection tags={item.keywords}>Keywords</TagSection>
      </Box>
    )
  })

  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Interests</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Interests.defaultProps = {
  language: [],
}

export { Interests }
