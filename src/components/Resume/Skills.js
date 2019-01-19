import React from 'react';

import {
  Box,
  DataTable,
  Text,
} from 'grommet';


const columns = [
  {
    property: "name",
    header: <Text>Skill</Text>,
    primary: true,
  },
  {
    property: "level",
    header: "Level"
  },
  {
    property: "keywords",
    header: "Keywords"
  }
];

const Skills = ({ skills }) => {

  const renderSkills = skills.map(skill => {
    const name = skill.name;
    const level = skill.level;
    const keywords = skill.keywords.join();

    return {name, level, keywords};
  });

  return (
    <Box align="center" pad="large">
      <DataTable columns={columns} data={renderSkills} />
    </Box>
  );
};

Skills.defaultProps = {
  skills: []
}

export default Skills;