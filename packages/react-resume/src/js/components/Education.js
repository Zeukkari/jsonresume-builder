import React from 'react'

import { Box } from 'grommet'

import {
  ResumeSection,
  ResumeDateSection,
  ResumeHeading,
  ResumeSubHeading,
  TagHeading,
  SectionTitle,
  TagSection,
  formatDateRange,
} from './common'

const Education = ({ education }) => {
  const renderItems = education.map(item => {
    return (
      <Box key={item.startDate}>
        <ResumeHeading>{item.institution}</ResumeHeading>
        <ResumeSubHeading>
          {`
          ${item.studyType} / ${item.area}`}
        </ResumeSubHeading>
        <Box direction="row">
          <ResumeDateSection>
            {formatDateRange(item.startDate, item.endDate)}
          </ResumeDateSection>
        </Box>
        <TagHeading>{`gpa: ${item.gpa}`}</TagHeading>

        <TagSection tags={item.courses}> Courses </TagSection>
      </Box>
    )
  })

  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Education</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Education.defaultProps = {
  education: [],
}

export { Education }
