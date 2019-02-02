import React from 'react'

import { Box } from 'grommet'

import { ResumeSection, SectionTitle, ResumeHeading } from './common'

const Languages = ({ languages }) => {
  const renderItems = languages.map(item => {
    return (
      <Box key={item.language}>
        <ResumeHeading>{`${item.language}: ${item.fluency}`}</ResumeHeading>
      </Box>
    )
  })

  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Languages</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Languages.defaultProps = {
  language: [],
}

export { Languages }
