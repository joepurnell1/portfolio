import React from 'react';
import renderer from 'react-test-renderer';
import FlexGridContainer from './index';

describe('flex container component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <FlexGridContainer>Will you stand above me</FlexGridContainer>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with given maxWidth as expected', () => {
    const render = renderer.create(
      <FlexGridContainer maxWidth="500px">Look my way, never love me</FlexGridContainer>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
