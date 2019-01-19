import React from 'react';
import renderer from 'react-test-renderer';

import Skills from '../Skills';

import defaultResume from '../../../util/defaultResume';


test('renders skills section', () => {
  const data = defaultResume.skills;
  const component = renderer.create(
    <Skills skills={data} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});