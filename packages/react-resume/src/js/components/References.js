import React from 'react'

import { Box } from 'grommet'

import {
  ResumeSection,
  SectionTitle,
  ResumeHeading,
  ResumeParagraph,
} from './common'

const References = ({ references }) => {
  const renderItems = references.map(item => {
    return (
      <Box key={item.name}>
        <ResumeHeading>{item.name}</ResumeHeading>
        <ResumeParagraph>{item.reference}</ResumeParagraph>
      </Box>
    )
  })

  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>References</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

References.defaultProps = {
  references: [],
}

export { References }
