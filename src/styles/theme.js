const colours = {
  white: '#FFFFFF',
  accentPink: '#E84855',
  lightPink: '#F7A0A7',
  fairlyDarkBlue: '#022e51',
  darkestBlue: '#011627',
  peach: '#FFA987',
  blue: '#067BC2',
  kindaGreen: '#00FFC5',
};

export default {
  typography: {
    headerColour: colours.accentPink,
    heavyWeight: 600,
    textColour: colours.darkestBlue,
    smallTextColour: colours.accentPink,
  },

  Global: {
    background: colours.white,
    textColour: colours.darkestBlue,
    strongTextWeight: 600,
  },
  Header: {
    accent: colours.accentPink,
  },
  Link: {
    accent: colours.accentPink,
  },
  Homepage: {
    highlightedBackground: colours.accentPink,
  },
  ColouredInfoBand: {
    backgroundColour: colours.accentPink,
    textColour: colours.white,
  },
  HeadedSection: {
    headerText: colours.accentPink,
  },
};
