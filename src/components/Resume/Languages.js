import React from 'react'

import { Grommet, DataTable, Heading, Text } from 'grommet'

import { ResumeSection, SubSection } from './common'

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
    <ResumeSection>
      <SubSection>
        <Heading> Languages </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </ResumeSection>
  )
}

Languages.defaultProps = {
  language: [],
}

export default Languages
