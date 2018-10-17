import React from 'react';
import renderer from 'react-test-renderer';
import Image from './index';

describe('image component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <Image
        imageSource="https://static.stereogum.com/uploads/2012/09/pixies-608x451.jpeg"
        imageAlt="The Pixies"
      />,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom sizes as expected', () => {
    const render = renderer.create(
      <Image
        imageSource="https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/08/2013PixiesEM051213.hero_-1-920x515.jpg"
        imageAlt="The Pixies"
        height="600px"
        width="300px"
      />,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
