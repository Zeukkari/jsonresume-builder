import React from 'react';

import {
  Box,
  Heading,
  Paragraph,
} from 'grommet';

const Basics = ({ basics }) => {
  const name = basics.name || 'N/A';
  const label = basics.label || 'N/A';
  const summary = basics.summary || 'N/A';
  const email = basics.email || 'N/A';
  const website = basics.website || 'N/A';
  // const picture = basics.picture || 'N/A';
  // const profiles = basics.profiles || [];


  return (
    <Box>
      <Heading> Basics </Heading>
      <Paragraph>name: {name}</Paragraph>
      <Paragraph>label: {label}</Paragraph>
      <Paragraph>summary: {summary}</Paragraph>
      <Paragraph>email: {email} </Paragraph>
      <Paragraph>website: {website}</Paragraph>
    </Box>
  );
};

export default Basics;