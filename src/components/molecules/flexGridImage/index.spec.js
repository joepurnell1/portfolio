import React from 'react';
import renderer from 'react-test-renderer';
import FlexGridImage from './index';

describe('FlexGridImage component', () => {
  it('renders default as expected', () => {
    const render = renderer.create(
      <FlexGridImage
        imageSource="https://img.discogs.com/6AAosovSxIH2OIGpql6fZa9I2QE=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5617558-1398104965-3485.png.jpg"
        imageAlt="Still looking for that blue jean, baby queen"
      />,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('renders custom size as expected', () => {
    const render = renderer.create(
      <FlexGridImage
        imageSource="https://img.discogs.com/6AAosovSxIH2OIGpql6fZa9I2QE=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5617558-1398104965-3485.png.jpg"
        imageAlt="Prettiest girl I ever seen"
        imageSize="225px"
        containerSize="250px"
      />,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
