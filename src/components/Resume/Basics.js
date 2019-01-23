import React from 'react'

import {
  Box,
  Button,
  Grommet,
  DataTable,
  Heading,
  Paragraph,
  Text,
} from 'grommet'

const columns = [
  {
    property: 'network',
    header: <Text> Network </Text>,
    primary: true,
  },
  {
    property: 'username',
    header: 'Username',
  },
  {
    property: 'url',
    header: 'URL',
  },
]

export const Picture = ({ picture }) => (
  <Box align="center" justify="center">
    <Button label={`KUVA ${picture}`} onClick={() => {}} primary />
  </Box>
)
Picture.defaultProps = {
  picture: 'N/A',
}

export const Contact = ({ email, phone, location, website, profiles }) => {
  const locationString = `${location.address} ${location.postalCode} ${
    location.city
  } ${location.countryCode} ${location.region}`

  return (
    <Box
      align="center"
      justify="between"
      direction="row"
      background="brand"
      pad={{ vertical: 'small', horizontal: 'large' }}
    >
      <Text> email: {email} </Text>

      <Text> website: {website} </Text>

      <Text> Location: {locationString} </Text>

      <Text> Phone: {phone} </Text>

      {/*
      <Grommet>
        <Box>
          <DataTable columns={columns} data={profiles} />
        </Box>
      </Grommet>
      */}
    </Box>
  )
}
Contact.defaultProps = {
  email: 'N/A',
  phone: 'N/A',
  website: 'N/A',

  location: {
    address: 'No address',
    postalCode: '0',
    city: 'N/A',
    countryCode: 'FI',
    region: 'N/A',
  },
  profiles: [
    {
      network: 'Twitter',
      username: 'john',
      url: 'about:blank',
    },
  ],
}

export const Summary = ({ name, label, summary }) => {
  return (
    <Box flex wrap background={{ color: 'light-2' }}>
      <Heading level={1} size="small" margin="xsmall">
        {name}
      </Heading>
      <Heading level={2} size="small" margin="xsmall">
        {label}
      </Heading>
      <Paragraph size="small">{summary}</Paragraph>
    </Box>
  )
}
Summary.defaultProps = {
  name: 'N/A',
  label: 'N/A',
  summary: 'N/A',
}
