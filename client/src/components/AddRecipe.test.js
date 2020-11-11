import { render } from 'enzyme';
import React from 'react';

import AddRecipe from './AddRecipe';

describe("Add recipe form testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<AddRecipe />);
  });
  
  test("render title", () => {
    expect(wrapper.find("#add-recipe-title").length).toBe(1);
  });

  test("render Submit button", () => {
    expect(wrapper.find("#add-recipe-submit-btn").length).toBe(1);

  });
});