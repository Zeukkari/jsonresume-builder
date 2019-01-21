import React from 'react'

import { Grommet, Box, DataTable, Heading, Text } from 'grommet'

import { ResumeSection, SubSection } from './common'

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
    const courses = item.courses.join()

    return { ...item, courses: courses }
  })

  return (
    <Box flex fill justify="between" direction="column">
      <SubSection>
        <Heading> Education </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </Box>
  )
}

Education.defaultProps = {
  education: [],
}

export default Education
