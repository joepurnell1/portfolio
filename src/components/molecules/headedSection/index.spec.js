import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import HeadedSection from './index';

const theme = {
  Global: {
    backgroundColour: '#737215',
  },
  HeadedSection: {
    headerText: '#100',
  },
};

describe('headed section component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <HeadedSection
          sectionTitle="Rhymes like ours could never be stopped"
        >
          <HeadedSection>Party rockers, non-stoppers, and our names are def</HeadedSection>
        </HeadedSection>
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
