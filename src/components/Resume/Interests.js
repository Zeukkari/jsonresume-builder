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
    property: 'keywords',
    header: 'Keywords',
  },
]

const Interests = ({ interests }) => {
  const renderItems = interests.map(item => {
    const keywords = item.keywords.join()

    return { ...item, keywords }
  })

  return (
    <ResumeSection>
      <SubSection>
        <Heading> Interests </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </ResumeSection>
  )
}

Interests.defaultProps = {
  language: [],
}

export default Interests
