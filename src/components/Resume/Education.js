import React from 'react'

import { Box, DataTable, Heading, Text } from 'grommet'

const columns = [
  {
    property: 'institution',
    header: <Text> University </Text>,
    primary: true,
  },
  {
    property: 'area',
    header: 'Department',
  },
  {
    property: 'studyType',
    header: 'Degree',
  },
  {
    property: 'startDate',
    header: 'Start',
  },
  {
    property: 'endDate',
    header: 'End',
  },
  {
    property: 'gpa',
    header: 'GPA',
  },
  {
    property: 'courses',
    header: 'Courses',
  },
]

const Education = ({ education }) => {
  const renderItems = education.map(item => {
    return (
      <Box key={item.startDate}>
        <Heading>{item.institution}</Heading>
        <Heading>{item.area}</Heading>
        <Box direction="row">
          {item.startDate} - {item.endDate}
        </Box>
        <Text>{`gpa: ${item.gap}`}</Text>
        <Text>{`gpa: ${item.studyType}`}</Text>
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
      <Box
        border={{
          side: 'all',
          color: 'red',
          size: 'xsmall',
          style: 'dashed',
        }}
        margin="none"
        pad="none"
      >
        <Heading
          level={3}
          size="medium"
          align="center"
          alignSelf="center"
          textAlign="center"
          margin="none"
          pad="none"
        >
          <Text>Education</Text>
        </Heading>
        <Box>{renderItems}</Box>
      </Box>
    </Box>
  )
}

Education.defaultProps = {
  education: [],
}

export default Education
