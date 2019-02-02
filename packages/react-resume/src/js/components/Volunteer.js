import React from 'react'

import { Box } from 'grommet'

import {
  ResumeSection,
  ResumeDateSection,
  ResumeHeading,
  ResumeSubHeading,
  ResumeParagraph,
  SectionTitle,
  TagSection,
  formatDateRange,
} from './common'

const Volunteer = ({ volunteer }) => {
  const renderItems = volunteer.map(item => {
    return (
      <Box key={item.company}>
        <ResumeHeading>{item.company}</ResumeHeading>
        <ResumeSubHeading>{item.position}</ResumeSubHeading>
        <Box direction="row">
          <ResumeDateSection>
            {formatDateRange(item.startDate, item.endDate)}
          </ResumeDateSection>
        </Box>
        <ResumeParagraph>{item.summary}</ResumeParagraph>
        <TagSection tags={item.highlights}>Highlights</TagSection>
      </Box>
    )
  })
  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Volunteer</SectionTitle>

        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Volunteer.defaultProps = {
  volunteer: [],
}

export { Volunteer }
