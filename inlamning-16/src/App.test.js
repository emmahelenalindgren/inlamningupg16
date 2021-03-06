import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";
import { mount } from "enzyme";
import Formular from "./form";
import Button from "./button";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test("testar input-name", () => {
   let wrapper = mount(<Formular/>);
    wrapper.find({className: "inputNamn"})
});

test("testar input-email", () => {
   let wrapper = mount(<Formular/>);
    wrapper.find({className: "inputMail"})
});


test("testar button-element", () => {
   let wrapper = shallow(<Button />);
    let actual = wrapper.find("button").hasClass("buttonClass");
    let expected = true;
    expect(actual).toBe(expected);
});






