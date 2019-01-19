import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../src/components/Header';
import Editor from '../src/components/Editor';
import Resume from '../src/components/Resume';

import defaultResume from '../src/util/defaultResume';

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