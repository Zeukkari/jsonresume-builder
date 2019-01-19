import React from 'react';

import {
  Box,
  DataTable,
  Text,
} from 'grommet';


const columns = [
  {
    property: "title",
    header: <Text>Award</Text>,
    primary: true,
  },
  {
    property: "date",
    header: "Date"
  },
  {
    property: "awarder",
    header: "Company"
  },
  {
    property: "summary",
    header: "Description"
  }
];

const Awards = ({ awards }) => {
  const renderItems = awards;

  return(
    <Box align="center" pad="large">
      <DataTable columns={columns} data={renderItems} />
    </Box>
  )
};

Awards.defaultProps = {
  language: []
}

export default Awards;