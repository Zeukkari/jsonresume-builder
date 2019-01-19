import React from 'react';

import {
  Box,
  DataTable,
  Text,
} from 'grommet';


const columns = [
  {
    property: "company",
    header: <Text>Company</Text>,
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

const Work = ({ work }) => {
  const renderItems = work.map(item => {
    const highlights = item.highlights.join();
    return {...item, highlights };
  });


  return(
    <Box align="center" pad="large">
      <DataTable columns={columns} data={renderItems} />
    </Box>
  )
};

Work.defaultProps = {
  work: []
}

export default Work;