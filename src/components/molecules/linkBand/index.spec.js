import React from 'react';
import renderer from 'react-test-renderer';
import LinkBand from './index';

describe('link band component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <LinkBand />,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
