import React from 'react';

import {
  Box,
  DataTable,
  Text,
} from 'grommet';


const columns = [
  {
    property: "name",
    header: <Text>Name</Text>,
    primary: true,
  },
  {
    property: "reference",
    header: "Reference"
  }
];

const References = ({ references }) => {
  const renderItems = references;


  return(
    <Box align="center" pad="large" border={{side: 'bottom', color: 'border', size: 'xsmall', style: 'dashed'}}>
      <DataTable columns={columns} data={renderItems} />
    </Box>
  )
};

References.defaultProps = {
  references: []
}

export default References;