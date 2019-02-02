import React from 'react'

import { Box, Button, Heading, Paragraph, Text, Image } from 'grommet'

import { TopLayout } from './Layout'

import { ResumeSection } from './common'

export const Picture = ({ picture }) => (
  <Box align="center" justify="center">
    <Image src={picture} size="large" />
  </Box>
)
Picture.defaultProps = {
  picture: null,
}

const Profiles = ({ profiles }) => {
  const profileButtons = profiles.map(profile => (
    <Button label={profile.network} key={profile.network} />
  ))

  return <Box direction="row">{profileButtons}</Box>
}

export const Contact = ({ email, phone, location, website, profiles }) => {
  const locationString = `${location.address} ${location.postalCode} ${
    location.city
  } ${location.countryCode}`

  return (
    <Box
      flex
      align="center"
      justify="between"
      direction="row"
      pad="none"
      margin="none"
      border={{
        side: 'all',
        color: 'red',
        size: 'small',
        style: 'groove',
      }}
    >
      <Text> email: {email} </Text>

      <Text> website: {website} </Text>

      <Text> Location: {locationString} </Text>

      <Text> Phone: {phone} </Text>

      <Profiles profiles={profiles} />
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
    <Box
      align="center"
      border={{
        side: 'all',
        color: 'red',
        size: 'xsmall',
        style: 'dashed',
      }}
    >
      <ResumeSection>
        <Heading level={1} size="small" margin="xsmall" textAlign="center">
          {name}
        </Heading>
        <Heading level={2} size="small" margin="xsmall" textAlign="center">
          {label}
        </Heading>
        <Box>
          <Paragraph size="medium">{summary}</Paragraph>
        </Box>
      </ResumeSection>
    </Box>
  )
}
Summary.defaultProps = {
  name: 'N/A',
  label: 'N/A',
  summary: 'N/A',
}

export const Basics = ({
  name,
  label,
  summary,
  email,
  phone,
  location,
  website,
  profiles,
  picture,
}) => (
  <TopLayout>
    {picture && (
      <Box align="center" justify="center">
        <Picture picture={picture} />
      </Box>
    )}

    <Summary name={name} label={label} summary={summary} />

    <Contact
      email={email}
      phone={phone}
      website={website}
      location={location}
      profiles={profiles}
    />
  </TopLayout>
)
