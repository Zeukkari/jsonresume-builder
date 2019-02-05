import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet, Box, Button } from 'grommet'
import { grommet, dark } from 'grommet/themes'
import {
  black,
  materiallight,
  materialdark,
  metro,
  light,
} from 'grommet-controls/themes'
import { aruba } from 'grommet-theme-aruba'
import { dxc } from 'grommet-theme-dxc'
import { hp } from 'grommet-theme-hp'
import { hpe } from 'grommet-theme-hpe'
import { v1 } from 'grommet-theme-v1'

import { Resume, Loading } from '../src/js/components/Resume'

import { Awards } from '../src/js/components/Awards'
import { Picture, Summary, Contact } from '../src/js/components/Basics'
import { Education } from '../src/js/components/Education'
import { Interests } from '../src/js/components/Interests'
import { Languages } from '../src/js/components/Languages'
import { Publications } from '../src/js/components/Publications'
import { References } from '../src/js/components/References'
import { Skills } from '../src/js/components/Skills'
import { Volunteer } from '../src/js/components/Volunteer'
import { Work } from '../src/js/components/Work'
import {
  ResumeLayout,
  TopLayout,
  LeftColumnLayout,
  RightColumnLayout,
} from '../src/js/components/Layout'

// import defaultResume from './resume.json'
import defaultResume from './defaultResume.json'

console.log("dark: ", dark)

storiesOf('Resume', module)
  .add('Default', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={grommet}
    />
  ))
  .add('Dark', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={dark}
    />
  ))
  .add('Black', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={black}
    />
  ))
  .add('Material Light', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={materiallight}
    />
  ))
  .add('Material Dark', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={materialdark}
    />
  ))
  .add('Metro', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={metro}
    />
  ))
  .add('Light', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={light}
    />
  ))
  .add('Aruba', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={aruba}
    />
  ))
  .add('DXC', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={dxc}
    />
  ))
  .add('HP', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={hp}
    />
  ))
  .add('HPE', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={hpe}
    />
  ))
  .add('V1 Theme', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={v1}
    />
  ))
  .add('Resume loading', () => (
    <Grommet full>
      <Loading />
    </Grommet>
  ))
  .add('Invalid resume', () => (
    <Grommet full>
      <Resume state="" />
    </Grommet>
  ))

storiesOf('Layout/Default', module).add('Default', () => {
  const Top = () => (
    <Box
      fill
      align="center"
      pad="large"
      margin="none"
      gap="none"
      background="accent-1"
    >
      <Button label="Header" onClick={() => {}} primary />
    </Box>
  )

  const Left = () => (
    <Box
      fill
      align="center"
      pad="large"
      margin="none"
      gap="none"
      background="accent-2"
    >
      <Button label="Left column" onClick={() => {}} primary />
    </Box>
  )

  const Right = () => (
    <Box
      fill
      align="center"
      pad="large"
      margin="none"
      gap="none"
      background="accent-4"
    >
      <Button label="Right column" onClick={() => {}} primary />
    </Box>
  )

  return (
    <ResumeLayout>
      <Top />
      <Left />
      <Right />
    </ResumeLayout>
  )
})

storiesOf('Layout/Header', module).add('Default', () => {
  const Left = () => (
    <Box align="center" pad="large" background="accent-1">
      <Button label="Avatar" onClick={() => {}} primary />
    </Box>
  )

  const Right = () => (
    <Box align="center" pad="large" background="accent-2">
      <Button label="Name + label + summar" onClick={() => {}} primary />
    </Box>
  )

  const Bottom = () => (
    <Box align="center" pad="large" background="accent-4">
      <Button label="Contact + Profiles" onClick={() => {}} primary />
    </Box>
  )

  return (
    <TopLayout>
      <Left />
      <Right />
      <Bottom />
    </TopLayout>
  )
})

storiesOf('Layout/Left Column', module).add('Default', () => {
  return (
    <LeftColumnLayout>
      <Box align="center" pad="large" border="all" background="accent-1">
        <Button label="Work" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all" background="accent-2">
        <Button label="Education" onClick={() => {}} primary />
      </Box>
    </LeftColumnLayout>
  )
})

storiesOf('Layout/Right Column', module).add('Default', () => {
  return (
    <RightColumnLayout>
      <Box align="center" pad="large" border="all" background="accent-1">
        <Button label="Skills" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all" background="accent-2">
        <Button label="Interests" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all" background="accent-3">
        <Button label="Organizations" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all" background="accent-4">
        <Button label="Awards" onClick={() => {}} primary />
      </Box>
    </RightColumnLayout>
  )
})

storiesOf('Resume/Basics section', module).add('Default', () => (
  <TopLayout>
    <Box align="center" justify="center">
      <Picture picture={defaultResume.basics.picture} />
    </Box>

    <Summary
      name={defaultResume.basics.name}
      label={defaultResume.basics.label}
      summary={defaultResume.basics.summary}
    />

    <Contact
      email={defaultResume.basics.email}
      phone={defaultResume.basics.phone}
      website={defaultResume.basics.website}
      location={defaultResume.basics.location}
      profiles={defaultResume.basics.profiles}
    />
  </TopLayout>
))

storiesOf('Resume/Awards section', module).add('Default', () => (
  <Awards awards={defaultResume.awards} />
))

storiesOf('Resume/Education section', module).add('Default', () => (
  <Education education={defaultResume.education} />
))

storiesOf('Resume/Interests section', module).add('Default', () => (
  <Interests interests={defaultResume.interests} />
))

storiesOf('Resume/Languages section', module).add('Default', () => (
  <Languages languages={defaultResume.languages} />
))

storiesOf('Resume/Publications section', module).add('Default', () => (
  <Publications publications={defaultResume.publications} />
))

storiesOf('Resume/References section', module).add('Default', () => (
  <References references={defaultResume.references} />
))

storiesOf('Resume/Skills section', module).add('Default', () => (
  <Skills skills={defaultResume.skills} />
))

storiesOf('Resume/Volunteer section', module).add('Default', () => (
  <Volunteer volunteer={defaultResume.volunteer} />
))

storiesOf('Resume/Work section', module).add('Default', () => (
  <Work work={defaultResume.work} />
))
