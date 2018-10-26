import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import ImageWithText from './index';

const theme = {
  Global: {
    textColour: '#OCE107',
  },
};

describe('ImageWithText component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <ImageWithText
          imageSource="http://s3.amazonaws.com/factmag-images/wp-content/uploads/2016/12/131223-run-jewels-christmas-miracle-616x440.jpg"
          imageAlt="LegendHasIt"
          text="I got a unicorn horn for a (Stop)"
        />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
