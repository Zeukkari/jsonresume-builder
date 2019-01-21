import React from 'react'

import { Grommet, Box, DataTable, Heading, Text } from 'grommet'

import { SubSection } from './common'

const columns = [
  {
    property: 'organization',
    header: <Text> Organization </Text>,
    primary: true,
  },
  {
    property: 'website',
    header: 'Website',
  },
  {
    property: 'position',
    header: 'Position',
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
    property: 'summary',
    header: 'Summary',
  },
  {
    property: 'highlights',
    header: 'Highlights',
  },
]

const Volunteer = ({ volunteer }) => {
  const renderItems = volunteer.map(item => {
    const highlights = item.highlights.join()
    return { ...item, highlights }
  })

  return (
    <Box flex fill justify="between" direction="column">
      <SubSection>
        <Heading> Volunteer </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </Box>
  )
}

Volunteer.defaultProps = {
  volunteer: [],
}

export default Volunteer
