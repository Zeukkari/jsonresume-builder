import React from 'react'

import { Box } from 'grommet'

import {
  ResumeSection,
  ResumeHeading,
  ResumeSubHeading,
  ResumeParagraph,
  ResumeDateSection,
  SectionTitle,
  formatDate,
} from './common'

const Awards = ({ awards }) => {
  const renderItems = awards.map(item => {
    return (
      <Box key={item.title}>
        <ResumeHeading>{item.title}</ResumeHeading>
        <ResumeSubHeading>{item.awarder}</ResumeSubHeading>
        <ResumeDateSection>{formatDate(item.date)}</ResumeDateSection>
        <ResumeParagraph>{item.summary}</ResumeParagraph>
      </Box>
    )
  })

  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Awards</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Awards.defaultProps = {
  awards: [],
}

export { Awards }
