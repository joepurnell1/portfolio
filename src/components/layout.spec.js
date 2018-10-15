import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './layout';

describe('Layout', () => {
  it('should render default as expected', () => {
    const render = renderer.create(
      <Layout headerLink="https://www.youtube.com/watch?v=DUT5rEU6pqM">
        I never really knew that she could dance like this
      </Layout>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render inverted as expected', () => {
    const render = renderer.create(
      <Layout headerLink="https://www.youtube.com/watch?v=DUT5rEU6pqM" invert>
        She makes a man wants to speak Spanish
      </Layout>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
