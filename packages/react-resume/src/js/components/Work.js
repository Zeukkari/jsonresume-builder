import React from 'react'

import { Box } from 'grommet'
import { Card } from 'grommet-controls'

import {
  ResumeSection,
  ResumeDateSection,
  ResumeParagraph,
  SectionTitle,
  TagSection,
  formatDateRange,
} from './common'

const Work = ({ work }) => {
  const renderItems = work.map(item => {
    return (
      <Card gap="medium" key={item.company}>
        <Card.CardTitle>{item.company}</Card.CardTitle>
        <Card.CardContent>
          <Box direction="row">
            <ResumeDateSection>
              {formatDateRange(item.startDate, item.endDate)}
            </ResumeDateSection>
          </Box>
          <ResumeParagraph>{item.summary}</ResumeParagraph>
          <TagSection tags={item.highlights}>Highlights</TagSection>
        </Card.CardContent>
      </Card>
    )
  })
  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Work</SectionTitle>
        <Box direction="column">{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Work.defaultProps = {
  work: [],
}

export { Work }
