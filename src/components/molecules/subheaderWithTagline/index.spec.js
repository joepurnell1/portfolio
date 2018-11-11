import React from 'react';
import renderer from 'react-test-renderer';
import SubHeaderWithTagline from './index';

describe('Subheader with Tagline component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <SubHeaderWithTagline
        headerText="The people that know me best"
        taglineText="The key that I won't forget, too soon"
        colour="#530"
      />,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
