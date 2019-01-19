import React from 'react';
import renderer from 'react-test-renderer';

import Editor from '../Editor';

test('renders editor', () => {
  const component = renderer.create(
    <Editor />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});