import React from 'react';

import {
  Box,
  DataTable,
  Heading,
  Paragraph,
  Text,
} from 'grommet';

const columns = [
  {
    property: "network",
    header: <Text>Network</Text>,
    primary: true,
  },
  {
    property: "username",
    header: "Username"
  },
  {
    property: "url",
    header: "URL"
  }
];



const Basics = ({ name, label, picture, email, phone, website, summary, location, profiles }) => {

  const locationString = `${location.address} ${location.postalCode} ${location.city} ${location.countryCode} ${location.region}`

  return (
    <Box border={{side: 'bottom', color: 'border', size: 'xsmall', style: 'dashed'}}>
      <Heading> Basics </Heading>
      <Paragraph>name: {name}</Paragraph>
      <Paragraph>label: {label}</Paragraph>
      <Paragraph>Summary: {summary}</Paragraph>
      <Paragraph>summary: {summary}</Paragraph>
      <Paragraph>email: {email} </Paragraph>
      <Paragraph>website: {website}</Paragraph>
      <Paragraph>Location: {locationString}</Paragraph>
      <Paragraph>Picture: {picture}</Paragraph>
      <Paragraph>Phone: {phone}</Paragraph>
      <DataTable columns={columns} data={profiles}/>
    </Box>
  );
};

Basics.defaultProps = {
  name: 'N/A',
  label: 'N/A',
  summary: 'N/A',
  email: 'N/A',
  phone: 'N/A',
  website: 'N/A',
  picture: 'N/A',
  "location": {
    "address": "No address",
    "postalCode": "0",
    "city": "N/A",
    "countryCode": "FI",
    "region": "N/A"
  },
  "profiles": [{
    "network": "Twitter",
    "username": "john",
    "url": "about:blank"
  }]
}

export default Basics;