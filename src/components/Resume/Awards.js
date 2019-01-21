import React from 'react'

import { Grommet, Box, Heading, DataTable, Text } from 'grommet'

import { ResumeSection, SubSection } from './common'

const columns = [
  {
    property: 'title',
    header: <Text>Award</Text>,
    primary: true,
  },
  {
    property: 'date',
    header: 'Date',
  },
  {
    property: 'awarder',
    header: 'Company',
  },
  {
    property: 'summary',
    header: 'Description',
  },
]

const Awards = ({ awards }) => {
  const renderItems = awards

  return (
    <Box flex fill justify="between" direction="column">
      <SubSection>
        <Heading> Awards </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </Box>
  )
}

Awards.defaultProps = {
  language: [],
}

export default Awards
