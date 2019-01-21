import React from 'react'

import { Grommet, DataTable, Heading, Text } from 'grommet'

import { SubSection, ResumeSection } from './common'

const columns = [
  {
    property: 'company',
    header: <Text>Company</Text>,
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

const Work = ({ work }) => {
  const renderItems = work.map(item => {
    const highlights = item.highlights.join()
    return { ...item, highlights }
  })

  return (
    <ResumeSection>
      <SubSection>
        <Heading> Work </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </ResumeSection>
  )
}

Work.defaultProps = {
  work: [],
}

export default Work
