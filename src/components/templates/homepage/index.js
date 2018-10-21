import React from 'react';
import { withTheme } from 'styled-components';
import ColouredContainer from '../../atoms/layout/colouredContainer';
import ColouredInfoBand from '../../organisms/colouredInfoBand';

export default withTheme(({ theme }) => (
  <ColouredContainer backgroundColour={theme.Homepage.highlightedBackground}>
    <ColouredInfoBand title="Hi, I'm Joe." subtitle="(better than your average Joe)" />
  </ColouredContainer>
));
