import React from 'react';

import {
  Box,
  DataTable,
  Text,
} from 'grommet';


const columns = [
  {
    property: "institution",
    header: <Text>University</Text>,
    primary: true,
  },
  {
    property: "area",
    header: "Department"
  },
  {
    property: "studyType",
    header: "Degree"
  },
  {
    property: "startDate",
    header: "Start"
  },
  {
    property: "endDate",
    header: "End"
  },
  {
    property: "gpa",
    header: "GPA"
  },
  {
    property: "courses",
    header: "Courses"
  }
];

const Education = ({ education }) => {
  const renderItems = education.map(item => {
    const courses = item.courses.join();

    return {...item, courses: courses};
  });

  return(
    <Box align="center" pad="large" border={{side: 'bottom', color: 'border', size: 'xsmall', style: 'dashed'}}>
      <DataTable columns={columns} data={renderItems} />
    </Box>
  )
};

Education.defaultProps = {
  education: []
}

export default Education;