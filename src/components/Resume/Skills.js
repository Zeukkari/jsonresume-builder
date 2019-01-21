import React from 'react'

import { Grommet, Box, DataTable, Heading, Text } from 'grommet'

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
    <Box flex fill justify="between" direction="column">
      <SubSection>
        <Heading> Skills </Heading>
      </SubSection>
      <Grommet>
        <SubSection>
          <DataTable columns={columns} data={renderItems} />
        </SubSection>
      </Grommet>
    </Box>
  )
}

Skills.defaultProps = {
  skills: [],
}

export default Skills
