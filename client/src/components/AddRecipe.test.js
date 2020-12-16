import { render, mount, shallow } from 'enzyme';
import React from 'react';

import AddRecipe from './AddRecipe';

describe("Add recipe form", () => {
  
  test("render title", () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.find(".add-recipe-title").length).toBe(1);
  });

  test("render Submit button", () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.find("#add-recipe-submit-btn").length).toBe(1);
  });

  test("can fill out the text inputs", () => {
    const wrapper = mount(<AddRecipe />);
    let titleInput = wrapper.find("input#input-title");
    titleInput.simulate("change", { target: { value: "Kool-Aid"}});
    titleInput = wrapper.find("input#input-title");
    expect(titleInput.props().value).toEqual("Kool-Aid");

    let ingredientsInput = wrapper.find("textarea#input-ingredients");
    ingredientsInput.simulate("change", { target: { value: "2 qt water\n1 pkg Kool-Aid mix (any flavor)"}});
    ingredientsInput = wrapper.find("textarea#input-ingredients");
    expect(ingredientsInput.props().value).toEqual("2 qt water\n1 pkg Kool-Aid mix (any flavor)");

    let instructionsInput = wrapper.find("textarea#input-instructions");
    instructionsInput.simulate("change", { target: { value: "Empty all ingredients into a large pitcher. Mix well. Serve chilled."}});
    instructionsInput = wrapper.find("textarea#input-instructions");
    expect(instructionsInput.props().value).toEqual("Empty all ingredients into a large pitcher. Mix well. Serve chilled.");

    let sourceInput = wrapper.find("input#input-source");
    sourceInput.simulate("change", { target: { value: "http://www.test.com/test"}});
    sourceInput = wrapper.find("input#input-source");
    expect(sourceInput.props().value).toEqual("http://www.test.com/test");
  });

});