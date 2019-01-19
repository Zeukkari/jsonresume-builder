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
    property: "keywords",
    header: "Keywords"
  }
];

const Interests = ({ interests }) => {
  const renderItems = interests.map(item => {
    const keywords = item.keywords.join();

    return {...item, keywords};
  });

  return(
    <Box align="center" pad="large">
      <DataTable columns={columns} data={renderItems} />
    </Box>
  )
};

Interests.defaultProps = {
  language: []
}

export default Interests;