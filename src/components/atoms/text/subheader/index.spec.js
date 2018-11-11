import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

describe('Subheader component', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <Header>You don&apos;t need nobody else, and I know that you still believe</Header>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom colour as expected', () => {
    const render = renderer.create(
      <Header colour="#F00B42">It&apos;s all yours</Header>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
