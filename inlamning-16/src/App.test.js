import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";
import { mount } from "enzyme";
import Formular from "./form";

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
   let wrapper = shallow(<Formular/>);
    let actual = wrapper.find(<button />).hasClass("buttonClass");
});






