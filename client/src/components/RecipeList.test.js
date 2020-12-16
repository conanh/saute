import { configure, shallow, render, mount } from 'enzyme';
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

describe("State controlled input field", () => {
  test("state updates with value of search field", () => {
    const mockSetSearchQueary = jest.fn();
    React.useState = jest.fn(() => ["", mockSetSearchQueary]);

    const wrapper = mount(<BrowserRouter><RecipeList /></BrowserRouter>);
    const searchBox = wrapper.find(".search input");

    const mockEvent = { target: { value: "eggs" } };
    searchBox.simulate("change", mockEvent);

    expect(mockSetSearchQueary).toHaveBeenCalledWith("eggs");
  });
});
