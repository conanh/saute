import React from 'react';
import { render } from 'enzyme';
import App from './App';

test("Top nav renders without error", () => {
  const wrapper = render(<App />);
  expect(wrapper.find("#top-nav").length).toBe(1);
});