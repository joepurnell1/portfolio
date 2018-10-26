import React from 'react';
import renderer from 'react-test-renderer';
import SwellingLink from './index';

describe('link component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <SwellingLink
        link="https://open.spotify.com/album/63McpWDS7P0dF06fqXQMCZ"
        imageSource="https://upload.wikimedia.org/wikipedia/en/7/70/Childish-gambino-because-the-internet.gif"
        imageAlt="becausetheinternet"
        size="50px"
        hoverSize="55px"
      />,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});