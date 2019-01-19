import React from 'react';
import renderer from 'react-test-renderer';

import Projects from '../Projects';

import defaultResume from '../../../util/defaultResume';


test('renders projects section', () => {
  const data = defaultResume.projects;
  const component = renderer.create(
    <Projects projects={data} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});