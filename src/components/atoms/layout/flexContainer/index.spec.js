import React from 'react';
import renderer from 'react-test-renderer';
import FlexContainer from './index';

describe('flex container component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <FlexContainer>Will you stand above me</FlexContainer>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with given maxWidth as expected', () => {
    const render = renderer.create(
      <FlexContainer maxWidth="500px">Look my way, never love me</FlexContainer>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
