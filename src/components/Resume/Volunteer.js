import React from 'react';

import {
  Box,
  DataTable,
  Text,
} from 'grommet';


const columns = [
  {
    property: "organization",
    header: <Text>Organization</Text>,
    primary: true,
  },
  {
    property: "website",
    header: "Website"
  },
  {
    property: "position",
    header: "Position"
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
    property: "summary",
    header: "Summary"
  },
  {
    property: "highlights",
    header: "Highlights"
  }
];

const Volunteer = ({ volunteer }) => {
  const renderItems = volunteer.map(item => {
    const highlights = item.highlights.join();
    return {...item, highlights };
  });


  return(
    <Box align="center" pad="large">
      <DataTable columns={columns} data={renderItems} />
    </Box>
  )
};

Volunteer.defaultProps = {
  volunteer: []
}

export default Volunteer;