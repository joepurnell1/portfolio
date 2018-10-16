import React from 'react';
import renderer from 'react-test-renderer';
import SquareFlexGridItem from './index';

describe('Square Flex Item component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <SquareFlexGridItem>Today I missed my work out</SquareFlexGridItem>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with focussed prop as expected', () => {
    const render = renderer.create(
      <SquareFlexGridItem focused>But it worked out</SquareFlexGridItem>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with given size expected', () => {
    const render = renderer.create(
      <SquareFlexGridItem size="300px">I know that my girls trust is a luxury</SquareFlexGridItem>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom box shadow as expected', () => {
    const render = renderer.create(
      <SquareFlexGridItem size="300px">I don&apost want my next album sounding all Usher-y</SquareFlexGridItem>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom margin as expected', () => {
    const render = renderer.create(
      <SquareFlexGridItem margin="30px">But I must confess, I must confess</SquareFlexGridItem>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
