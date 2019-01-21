import React from 'react'

import { DataTable, Heading, Paragraph, Text } from 'grommet'

import { SubSection, ResumeSection } from './common'

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

const Basics = ({
  name,
  label,
  picture,
  email,
  phone,
  website,
  summary,
  location,
  profiles,
}) => {
  const locationString = `${location.address} ${location.postalCode} ${
    location.city
  } ${location.countryCode} ${location.region}`

  return (
    <ResumeSection>
      <SubSection>
        <Heading> Basics </Heading>
      </SubSection>

      <SubSection>
        <Paragraph> name: {name} </Paragraph>{' '}
      </SubSection>
      <SubSection>
        <Paragraph> label: {label} </Paragraph>{' '}
      </SubSection>
      <SubSection>
        <Paragraph> summary: {summary} </Paragraph>{' '}
      </SubSection>
      <SubSection>
        <Paragraph> email: {email} </Paragraph>{' '}
      </SubSection>
      <SubSection>
        <Paragraph> website: {website} </Paragraph>{' '}
      </SubSection>
      <SubSection>
        <Paragraph> Location: {locationString} </Paragraph>{' '}
      </SubSection>
      <SubSection>
        <Paragraph> Picture: {picture} </Paragraph>{' '}
      </SubSection>
      <SubSection>
        <Paragraph> Phone: {phone} </Paragraph>{' '}
      </SubSection>
      <SubSection>
        <DataTable columns={columns} data={profiles} />
      </SubSection>
    </ResumeSection>
  )
}

Basics.defaultProps = {
  name: 'N/A',
  label: 'N/A',
  summary: 'N/A',
  email: 'N/A',
  phone: 'N/A',
  website: 'N/A',
  picture: 'N/A',
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

export default Basics
