import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import ColouredContainer from './index';

const theme = {
  Link: {
    accent: '#BADA55',
    background: '#1A1A1A',
  },
};

describe('coloured container component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <ColouredContainer>When Im watchin my TV and a man comes on and tells me</ColouredContainer>
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should with given colour as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <ColouredContainer backgroundColour="#907A70">How white my shirts can be</ColouredContainer>
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
