import React from 'react'

import { Button, Box, Heading } from 'grommet'

import Awards from './Awards'
import { Summary, Picture, Contact } from './Basics'
import Education from './Education'
import Interests from './Interests'
import Languages from './Languages'
import Publications from './Publications'
import References from './References'
import Skills from './Skills'
import Volunteer from './Volunteer'
import Work from './Work'

import {
  ResumeLayout,
  TopLayout,
  LeftColumnLayout,
  RightColumnLayout,
} from './Layout'

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
    <ResumeLayout>
      <TopLayout>
        <Box align="center" justify="center">
          <Picture picture={picture} />
        </Box>

        <Summary name={name} label={label} summary={summary} />

        <Contact
          email={email}
          phone={phone}
          website={website}
          location={location}
          profiles={profiles}
        />
      </TopLayout>

      <LeftColumnLayout>
        <Box>
          <Work work={work} />
        </Box>

        <Box>
          <Education education={education} />
        </Box>
      </LeftColumnLayout>

      <RightColumnLayout>
        <Box>
          <Skills skills={skills} />
        </Box>
        <Box>
          <Interests interests={interests} />
        </Box>

        <Box>
          <Awards awards={awards} />
        </Box>

        <Box>
          <Volunteer volunteer={volunteer} />
        </Box>

        <Box>
          <Publications publications={publications} />
        </Box>
        <Box>
          <Languages languages={languages} />
        </Box>
        <Box>
          <References references={references} />
        </Box>
      </RightColumnLayout>
    </ResumeLayout>
  )
}

export default Placeholder
