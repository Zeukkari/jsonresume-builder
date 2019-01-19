import React from 'react';

import {
  Box,
  DataTable,
  Text,
} from 'grommet';


const columns = [
  {
    property: "name",
    header: <Text>Publication</Text>,
    primary: true,
  },
  {
    property: "publisher",
    header: "Company"
  },
  {
    property: "releaseDate",
    header: "Release Date"
  },
  {
    property: "website",
    header: "Website"
  },
  {
    property: "summary",
    header: "Summary"
  }
];

const References = ({ volunteer }) => {
  const renderItems = volunteer;


  return(
    <Box align="center" pad="large">
      <DataTable columns={columns} data={renderItems} />
    </Box>
  )
};

References.defaultProps = {
  volunteer: []
}

export default References;