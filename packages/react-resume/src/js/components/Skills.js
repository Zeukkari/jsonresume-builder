import React from 'react'

import { Box } from 'grommet'

import { SectionTitle, TagSection, ResumeSection } from './common'

const Skills = ({ skills }) => {
  const renderItems = skills.map(item => {
    return (
      <Box
        key={item.name}
        border={{
          side: 'all',
          color: 'red',
          size: 'xsmall',
          style: 'dashed',
        }}
        pad={{ bottom: 'medium' }}
      >
        <Box>{item.name}</Box>
        <Box>
          <Box direction="row">{item.level}</Box>
          <TagSection tags={item.keywords}>Keywords</TagSection>
        </Box>
      </Box>
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
