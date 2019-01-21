import React from 'react'

import { Grommet, DataTable, Heading, Text } from 'grommet'

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
    <ResumeSection>
      <SubSection>
        <Heading> References </Heading>
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
  references: [],
}

export default References
