import React from 'react'

import { Grommet, Box, DataTable, Heading, Text } from 'grommet'

import { SubSection } from './common'

const columns = [
  {
    property: 'language',
    header: <Text>Language</Text>,
    primary: true,
  },
  {
    property: 'fluency',
    header: 'Fluency',
  },
]

const Languages = ({ languages }) => {
  const renderItems = languages

  return (
    <Box flex fill justify="between" direction="column">
      <SubSection>
        <Heading> Languages </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </Box>
  )
}

Languages.defaultProps = {
  language: [],
}

export default Languages
