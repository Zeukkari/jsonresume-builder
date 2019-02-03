import React from 'react'
import ReadDOM from 'react-dom'
import { storiesOf } from '@storybook/react'

import { Grommet, Box, Button } from 'grommet'
import { dark } from 'grommet/themes/dark'
import { grommet } from 'grommet/themes/grommet'

import { schema } from 'resume-schema'
import Ajv from 'ajv'
import { JsonEditor as Editor } from 'jsoneditor-react'

import Header from '../src/components/Header'
import EditorComponent from '../src/components/Editor'

import {
  Resume,
  Loading,
  Awards,
  Picture,
  Summary,
  Contact,
  Education,
  Interests,
  Languages,
  Publications,
  References,
  Skills,
  Volunteer,
  Work,
  ResumeLayout,
  TopLayout,
  LeftColumnLayout,
  RightColumnLayout,
} from '@resumebuilder/react-resume'

import defaultResume from '../src/util/defaultResume.json'

storiesOf('Editor', module).add('Default', () => (
  <EditorComponent
    value={defaultResume}
    mode={Editor.modes.code}
    ajv={Ajv({ allErrors: true, verbose: true })}
    schema={schema}
  />
))

storiesOf('Header', module).add('Default', () => (
  <Header
    showSidebar={false}
    toggleSidebar={() => alert('foo')}
    togglePreview={() => alert('foo')}
  />
))

const myTheme = {
  global: {
    font: {
      family: 'Raleway',
    },
  },
}

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
    />
  ))

  .add('Invalid', () => <Resume state="" />)
  .add('Loading', () => (
    <Box
      margin="auto"
      align="center"
      justify="center"
      height="full"
      width="full"
    >
      <Loading />
    </Box>
  ))

storiesOf('Layout/Resume', module).add('Default', () => {
  const Top = () => (
    <Box align="center" pad="large">
      <Button label="Header" onClick={() => {}} primary />
    </Box>
  )

  const Left = () => (
    <Box align="center" pad="large">
      <Button label="Left column" onClick={() => {}} primary />
    </Box>
  )

  const Right = () => (
    <Box align="center" pad="large">
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

storiesOf('Layout/Resume/Top', module).add('Default', () => {
  const Left = () => (
    <Box align="center" pad="large">
      <Button label="Avatar" onClick={() => {}} primary />
    </Box>
  )

  const Right = () => (
    <Box align="center" pad="large">
      <Button label="Name + label + summar" onClick={() => {}} primary />
    </Box>
  )

  const Bottom = () => (
    <Box align="center" pad="large">
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

storiesOf('Layout/Resume/LeftColumn', module).add('Default', () => {
  return (
    <LeftColumnLayout>
      <Box align="center" pad="large" border="all">
        <Button label="Work" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all">
        <Button label="Education" onClick={() => {}} primary />
      </Box>
    </LeftColumnLayout>
  )
})

storiesOf('Layout/Resume/RightColumn', module).add('Default', () => {
  return (
    <RightColumnLayout>
      <Box align="center" pad="large" border="all">
        <Button label="Skills" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all">
        <Button label="Interests" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all">
        <Button label="Organizations" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all">
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

storiesOf('Resume/Awards', module).add('Default', () => (
  <Awards awards={defaultResume.awards} />
))

storiesOf('Resume/Education', module).add('Default', () => (
  <Education education={defaultResume.education} />
))

storiesOf('Resume/Interests', module).add('Default', () => (
  <Interests interests={defaultResume.interests} />
))

storiesOf('Resume/Languages', module).add('Default', () => (
  <Languages languages={defaultResume.languages} />
))

storiesOf('Resume/Publications', module).add('Default', () => (
  <Publications publications={defaultResume.publications} />
))

storiesOf('Resume/References', module).add('Default', () => (
  <References references={defaultResume.references} />
))

storiesOf('Resume/Skills', module).add('Default', () => (
  <Skills skills={defaultResume.skills} />
))

storiesOf('Resume/Volunteer', module).add('Default', () => (
  <Volunteer volunteer={defaultResume.volunteer} />
))

storiesOf('Resume/Work', module).add('Default', () => (
  <Work work={defaultResume.work} />
))
