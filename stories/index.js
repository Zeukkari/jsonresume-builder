import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../src/components/Header';
import Editor from '../src/components/Editor';
import Resume from '../src/components/Resume';

import Awards from '../src/components/Resume/Awards'
import Basics from '../src/components/Resume/Basics'
import Education from '../src/components/Resume/Education'
import Interests from '../src/components/Resume/Interests'
import Projects from '../src/components/Resume/Projects'
import Languages from '../src/components/Resume/Languages'
import Publications from '../src/components/Resume/Publications'
import References from '../src/components/Resume/References'
import Skills from '../src/components/Resume/Skills'
import Volunteer from '../src/components/Resume/Volunteer'
import Work from '../src/components/Resume/Work'


import defaultResume from './resume';

storiesOf('Editor', module)
  .add('Default', () => (
    <Editor
      data={{}}
      setData={() => alert('foo')}
      validate={() => alert('foo')}
      schema={{}}
    />
  ))

storiesOf('Header', module)
  .add('Default', () => (
    <Header
      showSidebar={false}
      toggleSidebar={() => alert('foo')}
      togglePreview={() => alert('foo')}
    />
  ))

storiesOf('Resume', module)
  .add('Default', () => (
    <Resume
      visible={true}
      onClickOutside={() => alert('foo')}
      data={{
        isValid: true,
        value: defaultResume
      }}
    />
  ))

  .add('Invalid', () => (
    <Resume
      visible={true}
      onClickOutside={() => alert('foo')}
      data={{
        isValid: false
      }}
    />
  ))

storiesOf('Resume/Basics', module)
  .add('Default', () => (
    <Basics basics={defaultResume.basics} />
  ))

storiesOf('Resume/Awards', module)
  .add('Default', () => (
    <Awards awards={defaultResume.awards} />
  ))

storiesOf('Resume/Education', module)
  .add('Default', () => (
    <Education educations={defaultResume.education}/>
  ))

storiesOf('Resume/Interests', module)
  .add('Default', () => (
    <Interests interests={defaultResume.interests} />
  ))

storiesOf('Resume/Languages', module)
  .add('Default', () => (
    <Languages languages={defaultResume.languages} />
  ))

  storiesOf('Resume/Projects', module)
  .add('Default', () => (
    <Projects projects={defaultResume.projects} />
  ))

  storiesOf('Resume/Publications', module)
  .add('Default', () => (
    <Publications publications={defaultResume.publications} />
  ))

  storiesOf('Resume/References', module)
  .add('Default', () => (
    <References references={defaultResume.references} />
  ))

  storiesOf('Resume/Skills', module)
  .add('Default', () => (
    <Skills skills={defaultResume.skills} />
  ))

  storiesOf('Resume/Volunteer', module)
  .add('Default', () => (
    <Volunteer volunteer={defaultResume.volunteer}/>
  ))

  storiesOf('Resume/Work', module)
  .add('Default', () => (
    <Work work={defaultResume.work}/>
  ))