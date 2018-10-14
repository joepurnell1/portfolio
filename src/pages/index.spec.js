import React from "react"
import renderer from "react-test-renderer"
import Index from './index';

describe('index test', () => {
  it('should test something', () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});