import React from 'react'

import { Box, Text } from 'grommet'
import { Card } from 'grommet-controls'

import { ResumeSection, SectionTitle, TagSection } from './common'

const Skills = ({ skills }) => {
  const renderItems = skills.map(item => {
    return (
      <Card gap="medium" key={item.name}>
        <Card.CardTitle>{item.name}</Card.CardTitle>
        <Card.CardContent>
          <Box direction="row">
            <Text>{item.level}</Text>
          </Box>
          <TagSection tags={item.keywords}>Keywords</TagSection>
        </Card.CardContent>
      </Card>
    )
  })

  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Skills</SectionTitle>
        <Box direction="column">{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Skills.defaultProps = {
  skills: [],
}

export { Skills }
