import React from 'react';
import renderer from 'react-test-renderer';

import Awards from '../Awards';

import defaultResume from '../../../util/defaultResume';


test('renders awards section', () => {
  const data = defaultResume.awards;
  const component = renderer.create(
    <Awards awards={data} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});