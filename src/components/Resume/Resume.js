import React from 'react'

import { Box, Heading } from 'grommet'

import { ResumeSection } from './common'

import Awards from './Awards'
import Basics from './Basics'
import Education from './Education'
import Interests from './Interests'
import Languages from './Languages'
import Publications from './Publications'
import References from './References'
import Skills from './Skills'
import Volunteer from './Volunteer'
import Work from './Work'

const Placeholder = ({
  work,
  basics,
  volunteer,
  education,
  awards,
  publications,
  skills,
  languages,
  interests,
  references,
  isValid,
}) => {
  if (!isValid) {
    return (
      <Box
        flex
        fill
        justify="center"
        wrap={true}
        height="medium"
        overflow="scroll"
        border={{ color: 'status-error', size: 'large' }}
      >
        <Heading>Error rendering</Heading>
      </Box>
    )
  }

  const {
    name,
    label,
    picture,
    email,
    phone,
    website,
    summary,
    location,
    profiles,
  } = basics

  return (
    <Box
      flex
      fill
      direction="column"
      background="dark-4"
      align="center"
      justify="center"
      overflow="scroll"
      pad={{ horizontal: 'none', vertical: 'none' }}
      margin={{ horizontal: 'none', vertical: 'none' }}
      border={{
        side: 'all',
        color: 'border',
        size: 'xsmall',
        style: 'solid',
      }}
      elevation="medium"
      style={{ zIndex: '-11' }}
    >
      <ResumeSection>
        <Basics
          name={name}
          label={label}
          picture={picture}
          email={email}
          phone={phone}
          website={website}
          summary={summary}
          location={location}
          profiles={profiles}
        />
      </ResumeSection>

      <ResumeSection>
        <Work work={work} />
      </ResumeSection>
      <ResumeSection>
        <Skills skills={skills} />
      </ResumeSection>
      <ResumeSection>
        <Interests interests={interests} />
      </ResumeSection>
      <ResumeSection>
        <Education education={education} />
      </ResumeSection>
      <ResumeSection>
        <Languages languages={languages} />
      </ResumeSection>
      <ResumeSection>
        <Awards awards={awards} />
      </ResumeSection>
      <ResumeSection>
        <Publications publications={publications} />
      </ResumeSection>
      <ResumeSection>
        <References references={references} />
      </ResumeSection>
      <ResumeSection>
        <Volunteer volunteer={volunteer} />
      </ResumeSection>
    </Box>
  )
}

export default Placeholder
