import { configure, shallow, render } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RecipeList from './RecipeList';

describe("Recipe list page testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<BrowserRouter><RecipeList /></BrowserRouter>);
  });

  test("render title", () => {
    expect(wrapper.find("#recipes-list-title").length).toBe(1);
  });

  test("render add recipe button", () => {
    expect(wrapper.find("#add-recipe-btn").length).toBe(1);
  });
});
