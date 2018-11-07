import React from 'react';
import renderer from 'react-test-renderer';
import HeaderWithTagline from './index';

describe('Header with Tagline component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <HeaderWithTagline
        headerText="Shakes me, makes me lighter"
        taglineText="Fearless on my breath"
        colour="#7A2D15"
      />,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
