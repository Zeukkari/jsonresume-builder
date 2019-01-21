import React from 'react'

import { Grommet, Box, DataTable, Heading, Text } from 'grommet'

import { ResumeSection, SubSection } from './common'

const columns = [
  {
    property: 'name',
    header: <Text>Name</Text>,
    primary: true,
  },
  {
    property: 'reference',
    header: 'Reference',
  },
]

const References = ({ references }) => {
  const renderItems = references

  return (
    <Box flex fill justify="between" direction="column">
      <SubSection>
        <Heading> References </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </Box>
  )
}

References.defaultProps = {
  references: [],
}

export default References
