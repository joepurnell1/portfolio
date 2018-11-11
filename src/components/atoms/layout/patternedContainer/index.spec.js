import React from 'react';
import renderer from 'react-test-renderer';
import ColouredContainer from './index';

describe('patterned container component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <ColouredContainer>When Im watchin my TV and a man comes on and tells me</ColouredContainer>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
