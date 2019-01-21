import React from 'react'

import { Grommet, DataTable, Heading, Text } from 'grommet'

import { ResumeSection, SubSection } from './common'

const columns = [
  {
    property: 'name',
    header: <Text>Skill</Text>,
    primary: true,
  },
  {
    property: 'level',
    header: 'Level',
  },
  {
    property: 'keywords',
    header: 'Keywords',
  },
]

const Skills = ({ skills }) => {
  const renderItems = skills.map(skill => {
    const name = skill.name
    const level = skill.level
    const keywords = skill.keywords.join()

    return { name, level, keywords }
  })

  return (
    <ResumeSection>
      <SubSection>
        <Heading> Skills </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </ResumeSection>
  )
}

Skills.defaultProps = {
  skills: [],
}

export default Skills
