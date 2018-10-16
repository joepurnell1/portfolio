import React from 'react';
import renderer from 'react-test-renderer';
import ColouredContainer from './index';

describe('coloured container component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <ColouredContainer>When Im watchin my TV and a man comes on and tells me</ColouredContainer>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should with given colour as expected', () => {
    const render = renderer.create(
      <ColouredContainer backgroundColour="#907A70">How white my shirts can be</ColouredContainer>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
