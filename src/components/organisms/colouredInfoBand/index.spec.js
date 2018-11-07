import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import ColouredInfoBand from './index';
import theme from '../../../styles/theme';

describe('coloured info band component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <ColouredInfoBand
          title="I wanna know what love is"
          subtitle="I want you to show me"
        />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
