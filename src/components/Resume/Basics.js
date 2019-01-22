import React from 'react'

import { Grommet, DataTable, Heading, Paragraph, Text } from 'grommet'

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

      <Grommet>
        <SubSection>
          <SubSection>
            <Paragraph alignSelf="stretch"> name: {name} </Paragraph>{' '}
          </SubSection>
        </SubSection>
        <SubSection>
          <SubSection>
            <Paragraph alignSelf="stretch"> label: {label} </Paragraph>{' '}
          </SubSection>
        </SubSection>
        <SubSection>
          <SubSection>
            <Paragraph alignSelf="stretch"> summary: {summary} </Paragraph>{' '}
          </SubSection>
        </SubSection>
        <SubSection>
          <SubSection alignSelf="stretch">
            <Paragraph> email: {email} </Paragraph>{' '}
          </SubSection>
        </SubSection>
        <SubSection>
          <SubSection alignSelf="stretch">
            <Paragraph> website: {website} </Paragraph>{' '}
          </SubSection>
        </SubSection>
        <SubSection>
          <SubSection alignSelf="stretch">
            <Paragraph> Location: {locationString} </Paragraph>{' '}
          </SubSection>
        </SubSection>
        <SubSection>
          <SubSection alignSelf="stretch">
            <Paragraph> Picture: {picture} </Paragraph>{' '}
          </SubSection>
        </SubSection>
        <SubSection>
          <SubSection alignSelf="stretch">
            <Paragraph> Phone: {phone} </Paragraph>{' '}
          </SubSection>
        </SubSection>
        <SubSection>
          <SubSection alignSelf="stretch">
            <DataTable columns={columns} data={profiles} />
          </SubSection>
        </SubSection>
      </Grommet>
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
