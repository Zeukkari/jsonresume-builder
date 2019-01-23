import React from 'react'

import { Box, Grommet, DataTable, Heading, Text } from 'grommet'

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
    <Box>
      <Box>
        <Heading> Skills </Heading>
      </Box>
      <Grommet>
        <Box>
          <DataTable columns={columns} data={renderItems} />
        </Box>
      </Grommet>
    </Box>
  )
}

Skills.defaultProps = {
  skills: [],
}

export default Skills
