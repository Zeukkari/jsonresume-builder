import React from 'react'

import { Box, Heading, Text } from 'grommet'

import { ResumeSection, SectionTitle, formatDateRange } from './common'

const Education = ({ education }) => {
  const renderItems = education.map(item => {
    return (
      <Box key={item.startDate}>
        <Heading level={3}>{item.institution}</Heading>
        <Heading level={4}>
          {item.studyType} / {item.area}
        </Heading>
        <Box direction="row">
          {formatDateRange(item.startDate, item.endDate)}
        </Box>
        <Text weight="bold" size="medium">{`gpa: ${item.gap}`}</Text>

        <Box direction="column">
          {item.courses.map(course => (
            <Text key={course}>{course}</Text>
          ))}
        </Box>
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
