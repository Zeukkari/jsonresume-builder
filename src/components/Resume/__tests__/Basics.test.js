import React from 'react';
import renderer from 'react-test-renderer';

import Basics from '../Basics';

import defaultResume from '../../../util/defaultResume';


test('renders basics section', () => {
  const data = defaultResume.basics;
  const component = renderer.create(
    <Basics basics={data} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});