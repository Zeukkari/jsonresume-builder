import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

test('renders header', () => {
  const component = renderer.create(
    <Header />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});