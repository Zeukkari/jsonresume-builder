import React from 'react';

import {
  Box,
  Paragraph,
} from 'grommet';

const SkillsEntry = ({ name, level, keywords }) => (
  <Box key={name}>
    <Paragraph>
name:
      {name}
    </Paragraph>
    <Paragraph>
level:
      {level}
    </Paragraph>
    <ul>
      {keywords.map(item => <li key={item}>{item}</li>)}
    </ul>
  </Box>
);

const Skills = ({ skills }) => (
  <Box>
    {skills.map(item => (
      <SkillsEntry
        key={item.name}
        level={item.level}
        keywords={item.keywords}
      />
    ))}
  </Box>
);

export default Skills;