import React from 'react';

import {
  Box,
  DataTable,
  Text,
} from 'grommet';


const columns = [
  {
    property: "language",
    header: <Text>Language</Text>,
    primary: true,
  },
  {
    property: "fluency",
    header: "Fluency"
  }
];

const Languages = ({ languages }) => {
  const renderItems = languages;

  return(
    <Box align="center" pad="large">
      <DataTable columns={columns} data={renderItems} />
    </Box>
  )
};

Languages.defaultProps = {
  language: []
}

export default Languages;