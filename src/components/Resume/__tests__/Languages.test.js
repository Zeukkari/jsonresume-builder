import React from 'react';
import renderer from 'react-test-renderer';

import Languages from '../Languages';

import defaultResume from '../../../util/defaultResume';


test('renders languages section', () => {
  const data = defaultResume.languages;
  const component = renderer.create(
    <Languages languages={data} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});