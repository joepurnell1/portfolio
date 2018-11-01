import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Projects from './index';
import theme from '../../../styles/theme';

describe('link component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Projects />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
