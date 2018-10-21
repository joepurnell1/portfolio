import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Link from './index';

const theme = {
  Link: {
    accent: '#BADA55',
  },
  Global: {
    background: '#1A1A1A',
  },
};

describe('link component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Link href="LinkUrl">We will, we will</Link>
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render inverted as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Link href="LinkUrl" invert>Link you, Link you</Link>
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
