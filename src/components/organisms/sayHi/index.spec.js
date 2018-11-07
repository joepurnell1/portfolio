import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import SayHi from './index';
import theme from '../../../styles/theme';

describe('say hi component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <SayHi />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
