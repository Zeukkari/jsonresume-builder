import React from 'react';
import renderer from 'react-test-renderer';

import Resume from '../Resume';

import defaultResume from '../../../util/defaultResume';


test('renders resume', () => {
  const data = defaultResume.projects;
  const component = renderer.create(
    <Resume data={{ isValid: true, value: data }} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});