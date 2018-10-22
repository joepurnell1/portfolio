import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import Text from './index';

const theme = {
  Global: {
    textColour: '#DA221E',
  },
};

describe('Text component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Text>Blurred vision and the hobble of thick prose</Text>
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom colour as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Text colour="#F00B42">Why empower misogyny while violence towards women grows?</Text>
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
