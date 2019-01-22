import React from 'react'
import { storiesOf } from '@storybook/react'

import ace from 'brace'
import 'brace/mode/json'
import 'brace/theme/monokai'

import { schema, validate } from 'resume-schema'
import Ajv from 'ajv'

import { JsonEditor as Editor } from 'jsoneditor-react'

import Header from '../src/components/Header'
import EditorComponent from '../src/components/Editor'
import Resume from '../src/components/Resume'

import Awards from '../src/components/Resume/Awards'
import Basics from '../src/components/Resume/Basics'
import Education from '../src/components/Resume/Education'
import Interests from '../src/components/Resume/Interests'
import Languages from '../src/components/Resume/Languages'
import Publications from '../src/components/Resume/Publications'
import References from '../src/components/Resume/References'
import Skills from '../src/components/Resume/Skills'
import Volunteer from '../src/components/Resume/Volunteer'
import Work from '../src/components/Resume/Work'
import '../src/components/fixAce.css'
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
      isValid={true}
    />
  ))
  .add('Invalid', () => (
    <Resume
      visible={true}
      onClickOutside={() => alert('foo')}
      data={{
        isValid: false,
      }}
    />
  ))

storiesOf('Resume/Basics', module).add('Default', () => (
  <Basics {...defaultResume.basics} />
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
