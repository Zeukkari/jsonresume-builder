import React from 'react'

import { Grommet, DataTable, Heading, Text } from 'grommet'

import { ResumeSection, SubSection } from './common'

const columns = [
  {
    property: 'name',
    header: <Text>Publication</Text>,
    primary: true,
  },
  {
    property: 'publisher',
    header: 'Company',
  },
  {
    property: 'releaseDate',
    header: 'Release Date',
  },
  {
    property: 'website',
    header: 'Website',
  },
  {
    property: 'summary',
    header: 'Summary',
  },
]

const References = ({ publications }) => {
  const renderItems = publications

  return (
    <ResumeSection>
      <SubSection>
        <Heading> Publications </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </ResumeSection>
  )
}

References.defaultProps = {
  volunteer: [],
}

export default References
