const colours = {
  white: '#FFFFFF',
  accentPink: '#E84855',
  lightPink: '#F7A0A7',
  fairlyDarkBlue: '#022e51',
  darkestBlue: '#012b4c',
  peach: '#FFA987',
  blue: '#067BC2',
  kindaGreen: '#00FFC5',

  // new
  pinkish: '#f77ca0',
  solidPinkish: '#ff5158',
  leblue: '#26ebe3',
};

export default {
  breakpoints: {
    small: '420px',
    medium: '720px',
    large: '1060px',
  },

  typography: {
    headerColour: colours.solidPinkish,
    heavyWeight: 600,
    textColour: colours.darkestBlue,
    smallTextColour: colours.darkestBlue,
    link: {
      standardColour: colours.darkestBlue,
      specialColour: colours.pinkish,
      specialHoverColour: colours.leblue,
      fancyLines: [colours.solidPinkish, '#35FF69', '#440381', '#008DD5', '#F038FF']
    }
  },

  project: {
    accentOneStart: 'rgba(247, 124, 160, 0.4)',
    accentOneEnd: 'rgba(247, 124, 160, 0.7)',
  },

  tag: {
    colours:  [colours.solidPinkish, '#2ee65d', '#440381', '#008DD5', '#F038FF'],
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