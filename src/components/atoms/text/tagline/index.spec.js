import React from 'react';
import renderer from 'react-test-renderer';
import Tagline from './index';

describe('Tagline component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <Tagline>Return of the Mac, get em</Tagline>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom colour as expected', () => {
    const render = renderer.create(
      <Tagline colour="#D06">What it is What it does What it is What it isn&apost</Tagline>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
