import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

describe('Header component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <Header>What is love?</Header>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom colour as expected', () => {
    const render = renderer.create(
      <Header colour="#F00B42">Baby don&apost hurt me</Header>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});