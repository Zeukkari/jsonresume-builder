import React from 'react'

import { Box } from 'grommet'

import {
  ResumeSection,
  SectionTitle,
  formatDate,
  ResumeDateSection,
  ResumeHeading,
  ResumeSubHeading,
  ResumeParagraph,
} from './common'

const Publications = ({ publications }) => {
  const renderItems = publications.map(item => {
    return (
      <Box key={item.company}>
        <ResumeHeading>{item.name}</ResumeHeading>
        <ResumeSubHeading>{item.publisher}</ResumeSubHeading>
        <ResumeDateSection>{formatDate(item.releaseDate)}</ResumeDateSection>
        <ResumeParagraph>{item.summary}</ResumeParagraph>
      </Box>
    )
  })
  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Publications</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Publications.defaultProps = {
  publications: [],
}

export { Publications }
